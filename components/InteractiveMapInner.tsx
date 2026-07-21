import { Fragment, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { getWasteLogs, getEventWasteLogs, type WasteLog } from "../lib/api";
import { getSupabaseBrowserClient } from "../lib/supabase/browser";
import { formatWasteType, wasteTypeColor } from "../lib/format/wasteType";

export type InteractiveMapProps = {
  eventId?: string;
  live?: boolean;
  liveUntil?: string | null;
};

const DEFAULT_CENTER: [number, number] = [40.7128, -74.006];
const DEFAULT_ZOOM = 13;
const POINT_HALF_SPAN = 0.005; // ~500m half-box drawn around a single point

const iconCache = new Map<string, L.DivIcon>();
function dotIcon(color: string): L.DivIcon {
  let icon = iconCache.get(color);
  if (!icon) {
    icon = L.divIcon({
      className: "",
      html:
        `<div style="width:16px;height:16px;border-radius:9999px;background:${color};` +
        'border:2px solid #ffffff;box-shadow:0 0 0 1px rgba(0,0,0,.25)"></div>',
      iconSize: [16, 16],
      iconAnchor: [8, 8],
      popupAnchor: [0, -8],
    });
    iconCache.set(color, icon);
  }
  return icon;
}

function sameCalendarDay(a: string, b: string): boolean {
  return new Date(a).toDateString() === new Date(b).toDateString();
}

function boundsForLogs(logs: WasteLog[]): L.LatLngBounds | null {
  if (logs.length === 0) return null;
  if (logs.length === 1) {
    const { latitude: lat, longitude: lng } = logs[0];
    return L.latLngBounds(
      [lat - POINT_HALF_SPAN, lng - POINT_HALF_SPAN],
      [lat + POINT_HALF_SPAN, lng + POINT_HALF_SPAN]
    );
  }
  return L.latLngBounds(logs.map((l) => [l.latitude, l.longitude] as [number, number]));
}

function MapController({ logs, eventId }: { logs: WasteLog[]; eventId?: string }) {
  const map = useMap();
  const fittedFor = useRef<string | null>(null);

  const attemptFit = useCallback(() => {
    map.invalidateSize();
    const scope = eventId ?? "__all__";
    if (fittedFor.current === scope) return; // fit once per event, then free
    const size = map.getSize();
    if (size.x === 0 || size.y === 0) return; // container not sized yet
    const bounds = boundsForLogs(logs);
    if (!bounds) return; // no data yet

    fittedFor.current = scope;
    if (logs.length === 1) {
      map.setView(bounds.getCenter(), 16);
    } else {
      map.fitBounds(bounds, { padding: [40, 40] });
    }
  }, [map, logs, eventId]);

  useEffect(() => {
    attemptFit();
    const ro = new ResizeObserver(() => attemptFit());
    ro.observe(map.getContainer());
    return () => ro.disconnect();
  }, [map, attemptFit]);

  return null;
}

export default function InteractiveMapInner({ eventId, live, liveUntil }: InteractiveMapProps) {
  const [wasteLogs, setWasteLogs] = useState<WasteLog[]>([]);
  const [openLogId, setOpenLogId] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const request = eventId ? getEventWasteLogs(eventId) : getWasteLogs(1000);
    request.then((result) => {
      if (cancelled) return;
      if (!result.success) {
        console.error("Error fetching waste logs:", result.error);
        return;
      }
      setWasteLogs(result.data);
    });

    const endedMs = liveUntil ? new Date(liveUntil).getTime() : null;
    const liveNow = !!live && (endedMs === null || endedMs > Date.now());
    if (!liveNow) {
      return () => {
        cancelled = true;
      };
    }

    const supabase = getSupabaseBrowserClient();
    const channel = supabase
      .channel(`waste_logs:${eventId ?? "all"}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "waste_logs",
          ...(eventId ? { filter: `event_id=eq.${eventId}` } : {}),
        },
        (payload) => {
          const row = payload.new as WasteLog;
          setWasteLogs((prev) => (prev.some((l) => l.id === row.id) ? prev : [...prev, row]));
        }
      )
      .subscribe();

    const endTimer =
      endedMs !== null
        ? setTimeout(() => supabase.removeChannel(channel), Math.max(0, endedMs - Date.now()))
        : undefined;

    return () => {
      cancelled = true;
      if (endTimer) clearTimeout(endTimer);
      supabase.removeChannel(channel);
    };
  }, [eventId, live, liveUntil]);

  const logs = useMemo(
    () => (eventId ? wasteLogs.filter((log) => log.event_id === eventId) : wasteLogs),
    [wasteLogs, eventId]
  );

  const allSameDay = useMemo(() => {
    const stamped = logs.filter((l) => l.created_at);
    return (
      stamped.length > 0 &&
      stamped.every((l) => sameCalendarDay(l.created_at!, stamped[0].created_at!))
    );
  }, [logs]);

  return (
    <div style={{ width: "100%", height: "500px" }}>
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%", borderRadius: "12px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MapController logs={logs} eventId={eventId} />

        {logs.map((log) => (
          <Fragment key={log.id}>
            {openLogId === log.id && log.accuracy_meters && log.accuracy_meters > 0 ? (
              <Circle
                center={[log.latitude, log.longitude]}
                radius={log.accuracy_meters}
                pathOptions={{
                  stroke: false, // filled circle, no ring outline
                  fillColor: wasteTypeColor(log.waste_type),
                  fillOpacity: 0.2,
                }}
              />
            ) : null}
            <Marker
              position={[log.latitude, log.longitude]}
              icon={dotIcon(wasteTypeColor(log.waste_type))}
              eventHandlers={{
                popupopen: () => setOpenLogId(log.id),
                popupclose: () => setOpenLogId((cur) => (cur === log.id ? null : cur)),
              }}
            >
              <Popup>
                <strong>Waste Logged</strong>
                <br />
                Type: {log.waste_type ? formatWasteType(log.waste_type) : "Unknown"}
                <br />
                {log.created_at
                  ? allSameDay
                    ? new Date(log.created_at).toLocaleTimeString()
                    : new Date(log.created_at).toLocaleString()
                  : "Unknown"}
              </Popup>
            </Marker>
          </Fragment>
        ))}
      </MapContainer>
    </div>
  );
}
