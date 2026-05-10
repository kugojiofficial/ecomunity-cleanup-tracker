import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import type { Icon } from "leaflet";
import { supabase } from "../lib/supabase";
import "leaflet/dist/leaflet.css";

type TrashLog = {
  id: string;
  device_id: string | null;
  session_id: string | null;
  latitude: number;
  longitude: number;
  accuracy_meters: number | null;
  timestamp: string | null;
};

const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);

const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);

const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

const Popup = dynamic(
  () => import("react-leaflet").then((mod) => mod.Popup),
  { ssr: false }
);

export default function LiveMap() {
  const [trashLogs, setTrashLogs] = useState<TrashLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [trashIcon, setTrashIcon] = useState<Icon | null>(null);

  useEffect(() => {
    async function setupLeafletIcon() {
      const L = await import("leaflet");

      const icon = new L.Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
      });

      setTrashIcon(icon);
    }

    setupLeafletIcon();
  }, []);

  useEffect(() => {
    fetchTrashLogs();

    const interval = setInterval(() => {
      fetchTrashLogs();
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  async function fetchTrashLogs() {
    const { data, error } = await supabase
      .from("trash_logs")
      .select(
        "id, device_id, session_id, latitude, longitude, accuracy_meters, timestamp"
      )
      .order("timestamp", { ascending: false })
      .limit(100);

    if (error) {
      console.error("Error fetching trash logs:", error);
      setLoading(false);
      return;
    }

    setTrashLogs(data || []);
    setLoading(false);
  }

  const center: [number, number] =
    trashLogs.length > 0
      ? [trashLogs[0].latitude, trashLogs[0].longitude]
      : [40.7128, -74.006];

  return (
    <div style={{ width: "100%", height: "500px" }}>
      {loading && (
        <div style={{ marginBottom: "8px", fontSize: "14px" }}>
          Loading map...
        </div>
      )}

      <MapContainer
        center={center}
        zoom={15}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "12px",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {trashLogs.map((log) => (
          <Marker
            key={log.id}
            position={[log.latitude, log.longitude]}
            icon={trashIcon || undefined}
          >
            <Popup>
              <strong>Trash Logged</strong>
              <br />
              Device: {log.device_id || "Unknown"}
              <br />
              Session: {log.session_id || "None"}
              <br />
              Accuracy:{" "}
              {log.accuracy_meters !== null
                ? `${log.accuracy_meters} m`
                : "Unknown"}
              <br />
              Time:{" "}
              {log.timestamp
                ? new Date(log.timestamp).toLocaleString()
                : "Unknown"}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}