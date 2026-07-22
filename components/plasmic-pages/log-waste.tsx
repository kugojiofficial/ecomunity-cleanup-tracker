import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import { useRequireAuth } from "../../lib/api";
import { Constants } from "../../lib/supabase/database.types";
import { formatWasteType, wasteTypeColor } from "../../lib/format/wasteType";

// The 17 authoritative waste types (same source as the DB enum).
const WASTE_TYPES = Constants.public.Enums.waste_type;

// Reuse the project's Plasmic design tokens (defined globally in plasmic.css,
// imported by pages/_app.tsx) so this hand-built page matches the app's theme.
const THEME = {
  pageBg: "var(--token-uaIxKhkvZhCQ, #001606)",
  cardBg: "var(--token-QvKZNdbDFRb8, #002b0b)",
  border: "var(--token-_ghsv35bfxZ2, #14532d)",
  accent: "var(--token-ytzaa9i3sK9d, #16a34a)",
  text: "var(--token-vOzt3wWwXHfx, #ffffff)",
  danger: "#dc2626",
  font: '"Inter", sans-serif',
} as const;

function LogWaste() {
  const router = useRouter();
  const { user } = useRequireAuth();

  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [cameraError, setCameraError] = useState<string | null>(null);
  const [wasteType, setWasteType] = useState<string>(WASTE_TYPES[0]);
  const [photo, setPhoto] = useState<string | null>(null);

  // Start the rear camera once we know the user is signed in. `facingMode:
  // environment` asks for the back camera; playsInline/muted on the <video> keep
  // it working inside an iOS WebView (the Capacitor target).
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
            ? "Camera permission was denied. Enable camera access in your browser or app settings, then reload."
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

  function capturePhoto() {
    const video = videoRef.current;
    if (!video || !video.videoWidth) return;
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    setPhoto(canvas.toDataURL("image/jpeg", 0.9));
  }

  if (!user) return null;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: THEME.pageBg,
        color: THEME.text,
        fontFamily: THEME.font,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "24px 16px 48px",
        boxSizing: "border-box",
      }}
    >
      <div style={{ width: "100%", maxWidth: 520, display: "flex", flexDirection: "column", gap: 20 }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button
            type="button"
            onClick={() => router.push("/dashboard")}
            style={{
              background: "transparent",
              color: THEME.text,
              border: "none",
              cursor: "pointer",
              fontSize: 16,
              opacity: 0.8,
              padding: 0,
            }}
          >
            ← Back
          </button>
          <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700 }}>Log Waste</h1>
          <span style={{ width: 44 }} />
        </header>

        {/* Camera / captured photo */}
        <div
          style={{
            background: THEME.cardBg,
            border: `3px solid ${THEME.border}`,
            borderRadius: 16,
            overflow: "hidden",
            aspectRatio: "9 / 14",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          {cameraError ? (
            <p style={{ padding: 24, textAlign: "center", color: "#fecaca", margin: 0 }}>
              {cameraError}
            </p>
          ) : photo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={photo}
              alt="Captured waste"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          )}
        </div>

        {/* Capture / retake */}
        {!cameraError &&
          (photo ? (
            <button
              type="button"
              onClick={() => setPhoto(null)}
              style={secondaryButtonStyle}
            >
              Retake photo
            </button>
          ) : (
            <button type="button" onClick={capturePhoto} style={primaryButtonStyle}>
              Capture photo
            </button>
          ))}

        {/* Trash type selector */}
        <label style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 15, fontWeight: 600, textAlign: "center" }}>Select Waste Type</span>
          <div style={{ position: "relative", display: "flex", alignItems: "center", gap: 12 }}>
            <span
              aria-hidden
              style={{
                width: 18,
                height: 18,
                borderRadius: "50%",
                background: wasteTypeColor(wasteType),
                border: "2px solid rgba(255,255,255,0.4)",
                flexShrink: 0,
              }}
            />
            <select
              value={wasteType}
              onChange={(e) => setWasteType(e.target.value)}
              style={{
                flex: 1,
                appearance: "none",
                background: THEME.cardBg,
                color: THEME.text,
                border: `2px solid ${THEME.border}`,
                borderRadius: 10,
                padding: "12px 14px",
                fontSize: 16,
                fontFamily: THEME.font,
                cursor: "pointer",
              }}
            >
              {WASTE_TYPES.map((t) => (
                <option key={t} value={t} style={{ background: "#002b0b", color: "#fff" }}>
                  {formatWasteType(t)}
                </option>
              ))}
            </select>
          </div>
        </label>
      </div>
    </div>
  );
}

const primaryButtonStyle: React.CSSProperties = {
  background: THEME.accent,
  color: "#ffffff",
  border: "none",
  borderRadius: 10,
  padding: "14px 20px",
  fontSize: 16,
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: THEME.font,
};

const secondaryButtonStyle: React.CSSProperties = {
  background: "transparent",
  color: THEME.text,
  border: `2px solid ${THEME.border}`,
  borderRadius: 10,
  padding: "14px 20px",
  fontSize: 16,
  fontWeight: 600,
  cursor: "pointer",
  fontFamily: THEME.font,
};

export default LogWaste;
