import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { PageParamsProvider as PageParamsProvider__ } from "@plasmicapp/react-web/lib/host";
import { PlasmicQueryDataProvider } from "@plasmicapp/react-web/lib/query";
import { useRouter } from "next/router";

import { PlasmicLogWaste } from "../plasmic/eco_munity_cleanup_tracker/PlasmicLogWaste";
import MenuItem from "../MenuItem";
import { getEvents, insertWasteLog, uploadWasteImage, useRequireAuth } from "../../lib/api";
import { selectActiveOrRecentEvent } from "../../lib/domain/activeEvent";
import { Constants } from "../../lib/supabase/database.types";
import { formatWasteType, wasteTypeColor } from "../../lib/format/wasteType";
import { useYoloDetector } from "../../lib/yolo/useYoloDetector";
import styles from "./log-waste.module.css";

const HIDDEN = { display: "none" } as const;
const SHOWN = { display: "flex" } as const;

const WASTE_TYPES = Constants.public.Enums.waste_type;

function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      reject(new Error("Geolocation is not available."));
      return;
    }
    navigator.geolocation.getCurrentPosition(resolve, reject, {
      enableHighAccuracy: true,
      timeout: 10000,
    });
  });
}

function LogWaste() {
  const router = useRouter();
  const { user } = useRequireAuth();

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const overlayRef = useRef<HTMLCanvasElement>(null);
  const userPickedTypeRef = useRef(false);

  const [activeEventId, setActiveEventId] = useState<string | null>(null);
  const [wasteType, setWasteType] = useState<string>("");
  const [cameraError, setCameraError] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  // Live rear camera; muted + playsInline for the iOS WebView.
  useEffect(() => {
    if (!user) return;
    let active = true;

    (async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: "environment" },
          audio: false,
        });
        if (!active) {
          stream.getTracks().forEach((t) => t.stop());
          return;
        }
        streamRef.current = stream;
        if (videoRef.current) videoRef.current.srcObject = stream;
        setCameraError(null);
      } catch (err) {
        if (!active) return;
        const denied = err instanceof DOMException && err.name === "NotAllowedError";
        setCameraError(
          denied
            ? "Camera permission was denied. Enable camera access, then reload."
            : "No camera is available on this device."
        );
      }
    })();

    return () => {
      active = false;
      streamRef.current?.getTracks().forEach((t) => t.stop());
      streamRef.current = null;
    };
  }, [user]);

  // Active event to log to (the server rejects logs to a non-running event).
  useEffect(() => {
    if (!user) return;
    let active = true;

    (async () => {
      const res = await getEvents();
      if (!active || !res.success) return;
      const selected = selectActiveOrRecentEvent(res.data);
      if (selected && selected.isActive) setActiveEventId(selected.event.id);
    })();

    return () => {
      active = false;
    };
  }, [user]);
  
  const { status: yoloStatus } = useYoloDetector({
    videoRef,
    overlayRef,
    enabled: !cameraError,
    onSuggestion: (wt) => {
      if (wt && !userPickedTypeRef.current) setWasteType(wt);
    },
  });

  // Detection is an optional assist; surface failures without blocking the feed.
  const yoloUnavailable = !cameraError && (yoloStatus === "error" || yoloStatus === "unsupported");

  function captureFrameBlob(): Promise<Blob | null> {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return Promise.resolve(null);
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return Promise.resolve(null);
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    return new Promise((resolve) => canvas.toBlob((b) => resolve(b), "image/jpeg", 0.9));
  }

  async function handleSubmit() {
    if (busy || !user) return;
    setError(null);

    if (!wasteType) {
      setError("Please select a waste type.");
      return;
    }
    if (!activeEventId) {
      setError("There's no active event to log waste to right now.");
      return;
    }

    setBusy(true);

    let position: GeolocationPosition;
    try {
      position = await getCurrentPosition();
    } catch {
      setBusy(false);
      setError("Location permission is required to log waste. Enable it and try again.");
      return;
    }

    // Generate the log id up front so the photo can be named after it
    // (<eventId>/<userId>/<logId>.jpg) and inserted under the same id.
    const logId = crypto.randomUUID();

    // Best-effort photo: no camera → log without one; upload failure blocks the log.
    let imagePath: string | null = null;
    const blob = await captureFrameBlob();
    if (blob) {
      const up = await uploadWasteImage(activeEventId, user.id, logId, blob);
      if (!up.success) {
        setBusy(false);
        setError(`Couldn't upload the photo: ${up.error}`);
        return;
      }
      imagePath = up.data;
    }

    const res = await insertWasteLog({
      id: logId,
      event_id: activeEventId,
      waste_type: wasteType,
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      accuracy_meters: position.coords.accuracy ?? null,
      image_url: imagePath,
    });
    setBusy(false);

    if (!res.success) {
      setError(res.error);
      return;
    }
    router.push("/dashboard");
  }

  if (!user) return null;

  return (
    <PlasmicQueryDataProvider>
      <PageParamsProvider__
        route={router?.pathname}
        params={router?.query}
        query={router?.query}
      >
        <PlasmicLogWaste
          cameraFeedContainer={{
            children: (
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "inherit",
                  overflow: "hidden",
                }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <canvas
                  ref={overlayRef}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "none",
                  }}
                />
                {yoloUnavailable && (
                  <div
                    style={{
                      position: "absolute",
                      top: 8,
                      left: 8,
                      padding: "4px 8px",
                      borderRadius: 6,
                      fontSize: 12,
                      color: "#fde68a",
                      background: "rgba(0,0,0,0.55)",
                      pointerEvents: "none",
                    }}
                  >
                    Auto-detect unavailable
                  </div>
                )}
                {cameraError && (
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: 16,
                      textAlign: "center",
                      color: "#fecaca",
                      background: "rgba(0,0,0,0.6)",
                    }}
                  >
                    {cameraError}
                  </div>
                )}
              </div>
            ),
          }}
          wasteTypeSelector={{
            "aria-label": "Waste type",
            value: wasteType,
            onChange: (v: string) => {
              userPickedTypeRef.current = true;
              setWasteType(v);
              if (error) setError(null);
            },
            items: WASTE_TYPES.map((t) => (
              <MenuItem key={t} value={t} label={formatWasteType(t)} />
            )),
            className: styles.selectText,
          }}
          wasteTypeColor={{
            style: { background: wasteType ? wasteTypeColor(wasteType) : "transparent" },
          }}
          submitButton={{
            onClick: (e: React.MouseEvent) => {
              e.preventDefault();
              void handleSubmit();
            },
            style: busy ? { opacity: 0.6, pointerEvents: "none" } : undefined,
          }}
          error={{ style: error ? SHOWN : HIDDEN }}
          errorContent={{ children: error ?? "" }}
        />
      </PageParamsProvider__>
    </PlasmicQueryDataProvider>
  );
}

export default LogWaste;
