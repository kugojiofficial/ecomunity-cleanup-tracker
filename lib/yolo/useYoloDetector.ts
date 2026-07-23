import { useEffect, useRef, useState } from "react";
import { YOLO_CONFIG, wasteTypeForClassId } from "./config";
import { wasteTypeColor, formatWasteType } from "../format/wasteType";

export type Detection = {
  x: number;
  y: number;
  w: number;
  h: number;
  score: number;
  classId: number;
};

export type YoloStatus = "idle" | "loading" | "ready" | "error" | "unsupported";

type Options = {
  videoRef: React.RefObject<HTMLVideoElement | null>;
  overlayRef: React.RefObject<HTMLCanvasElement | null>;
  enabled: boolean;
  onSuggestion?: (wasteType: string | null) => void;
};

export function useYoloDetector({
  videoRef,
  overlayRef,
  enabled,
  onSuggestion,
}: Options): { status: YoloStatus; error: string | null } {
  const [status, setStatus] = useState<YoloStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const detectionsRef = useRef<Detection[]>([]);
  const busyRef = useRef(false);
  const readyRef = useRef(false);
  const onSuggestionRef = useRef(onSuggestion);
  const lastSuggestionRef = useRef<string | null | undefined>(undefined);

  useEffect(() => {
    onSuggestionRef.current = onSuggestion;
  }, [onSuggestion]);

  useEffect(() => {
    if (!enabled) return;

    let disposed = false;
    const setStatusSafe = (s: YoloStatus) => {
      void Promise.resolve().then(() => {
        if (!disposed) setStatus(s);
      });
    };

    if (typeof window === "undefined" || typeof Worker === "undefined") {
      setStatusSafe("unsupported");
      return;
    }

    setStatusSafe("loading");
    readyRef.current = false;

    const worker = new Worker("/yolo/yolo-worker.js");
    let frameId = 0;

    worker.onmessage = (e: MessageEvent) => {
      const msg = e.data;
      if (msg.type === "ready") {
        readyRef.current = true;
        setStatusSafe("ready");
      } else if (msg.type === "result") {
        busyRef.current = false;
        detectionsRef.current = msg.detections as Detection[];
        emitSuggestion(msg.detections as Detection[]);
      } else if (msg.type === "error") {
        busyRef.current = false;
        if (!disposed) {
          setError(String(msg.message));
          setStatus("error");
        }
        console.warn("[yolo] worker error:", msg.message);
      }
    };
    worker.onerror = (ev) => {
      busyRef.current = false;
      if (!disposed) {
        setError(ev.message || "Detector worker failed to load.");
        setStatus("error");
      }
    };

    function emitSuggestion(dets: Detection[]) {
      let topType: string | null = null;
      let topScore = -1;
      for (const d of dets) {
        const wt = wasteTypeForClassId(d.classId);
        if (wt && d.score > topScore) {
          topScore = d.score;
          topType = wt;
        }
      }
      if (topType !== lastSuggestionRef.current) {
        lastSuggestionRef.current = topType;
        onSuggestionRef.current?.(topType);
      }
    }

    worker.postMessage({
      type: "init",
      model: YOLO_CONFIG.modelUrl,
      cfg: {
        inputSize: YOLO_CONFIG.inputSize,
        scoreThreshold: YOLO_CONFIG.scoreThreshold,
        iouThreshold: YOLO_CONFIG.iouThreshold,
      },
    });

    const capture = document.createElement("canvas");
    capture.width = YOLO_CONFIG.inputSize;
    capture.height = YOLO_CONFIG.inputSize;
    const captureCtx = capture.getContext("2d", { willReadFrequently: true });

    const inferTimer = window.setInterval(() => {
      if (disposed || !readyRef.current || busyRef.current || !captureCtx) return;
      const video = videoRef.current;
      if (!video || !video.videoWidth) return;

      const size = YOLO_CONFIG.inputSize;
      const srcW = video.videoWidth;
      const srcH = video.videoHeight;
      const scale = Math.min(size / srcW, size / srcH);
      const newW = Math.round(srcW * scale);
      const newH = Math.round(srcH * scale);
      const padX = Math.floor((size - newW) / 2);
      const padY = Math.floor((size - newH) / 2);

      captureCtx.fillStyle = "rgb(114,114,114)";
      captureCtx.fillRect(0, 0, size, size);
      captureCtx.drawImage(video, 0, 0, srcW, srcH, padX, padY, newW, newH);
      const img = captureCtx.getImageData(0, 0, size, size);

      busyRef.current = true;
      frameId += 1;
      worker.postMessage(
        {
          type: "detect",
          buffer: img.data.buffer,
          meta: { scale, padX, padY, srcW, srcH },
          id: frameId,
        },
        [img.data.buffer]
      );
    }, Math.round(1000 / YOLO_CONFIG.targetFps));

    let drawRaf = 0;
    const draw = () => {
      if (disposed) return;
      const video = videoRef.current;
      const canvas = overlayRef.current;
      if (video && canvas && video.clientWidth && video.videoWidth) {
        const dpr = window.devicePixelRatio || 1;
        const cw = video.clientWidth;
        const ch = video.clientHeight;
        if (canvas.width !== Math.round(cw * dpr) || canvas.height !== Math.round(ch * dpr)) {
          canvas.width = Math.round(cw * dpr);
          canvas.height = Math.round(ch * dpr);
        }
        const ctx = canvas.getContext("2d");
        if (ctx) {
          ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
          ctx.clearRect(0, 0, cw, ch);

          // Map normalized boxes onto the object-fit: cover video.
          const srcW = video.videoWidth;
          const srcH = video.videoHeight;
          const coverScale = Math.max(cw / srcW, ch / srcH);
          const dispW = srcW * coverScale;
          const dispH = srcH * coverScale;
          const offsetX = (cw - dispW) / 2;
          const offsetY = (ch - dispH) / 2;

          ctx.lineWidth = 2;
          ctx.font = "600 13px Inter, sans-serif";
          ctx.textBaseline = "top";

          for (const det of detectionsRef.current) {
            const wt = wasteTypeForClassId(det.classId);
            if (!wt) continue;
            const color = wasteTypeColor(wt);
            const dx = offsetX + det.x * dispW;
            const dy = offsetY + det.y * dispH;
            const dw = det.w * dispW;
            const dh = det.h * dispH;

            ctx.strokeStyle = color;
            ctx.strokeRect(dx, dy, dw, dh);

            const label = `${formatWasteType(wt)} ${Math.round(det.score * 100)}%`;
            const tw = ctx.measureText(label).width;
            const th = 18;
            const ly = dy - th >= 0 ? dy - th : dy;
            ctx.fillStyle = color;
            ctx.fillRect(dx, ly, tw + 10, th);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(label, dx + 5, ly + 3);
          }
        }
      }
      drawRaf = window.requestAnimationFrame(draw);
    };
    drawRaf = window.requestAnimationFrame(draw);

    return () => {
      disposed = true;
      readyRef.current = false;
      busyRef.current = false;
      window.clearInterval(inferTimer);
      window.cancelAnimationFrame(drawRaf);
      worker.terminate();
      detectionsRef.current = [];
      lastSuggestionRef.current = undefined;
      onSuggestionRef.current?.(null);
    };
  }, [enabled, videoRef, overlayRef]);

  return { status, error };
}
