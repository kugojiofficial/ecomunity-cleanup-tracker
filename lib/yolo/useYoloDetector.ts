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

// A smoothed, persistent box. Detections arrive at targetFps in discrete jumps;
// a track carries an animated (rendered) box that eases toward the latest
// detection every frame, plus an opacity that fades in on birth / out on death.
type Track = {
  id: number;
  classId: number;
  wt: string;
  // rendered box (normalized), eased toward the target each frame
  x: number;
  y: number;
  w: number;
  h: number;
  score: number;
  // latest matched detection
  tx: number;
  ty: number;
  tw: number;
  th: number;
  tScore: number;
  opacity: number; // current, animated
  targetOpacity: number; // 1 = alive, 0 = dying
  matched: boolean;
};

// Time constants (seconds) for frame-rate-independent exponential easing.
const POS_TAU = 0.07; // box position/size settle
const OP_TAU = 0.11; // fade in/out
const MATCH_IOU = 0.2; // min overlap to treat a detection as the same object

function iou(a: Track, dx: number, dy: number, dw: number, dh: number): number {
  const ax2 = a.tx + a.tw;
  const ay2 = a.ty + a.th;
  const bx2 = dx + dw;
  const by2 = dy + dh;
  const ix = Math.max(0, Math.min(ax2, bx2) - Math.max(a.tx, dx));
  const iy = Math.max(0, Math.min(ay2, by2) - Math.max(a.ty, dy));
  const inter = ix * iy;
  const union = a.tw * a.th + dw * dh - inter;
  return union > 0 ? inter / union : 0;
}

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

  const tracksRef = useRef<Track[]>([]);
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
    let nextTrackId = 1;

    // Reconcile a fresh batch of detections with the live tracks: match by class
    // and overlap, spawn tracks for new objects, and mark vanished ones dying.
    function ingest(dets: Detection[]) {
      const tracks = tracksRef.current;
      for (const t of tracks) t.matched = false;

      const pairs: { di: number; ti: number; iou: number }[] = [];
      dets.forEach((d, di) => {
        if (!wasteTypeForClassId(d.classId)) return;
        tracks.forEach((t, ti) => {
          if (t.classId !== d.classId) return;
          const ov = iou(t, d.x, d.y, d.w, d.h);
          if (ov >= MATCH_IOU) pairs.push({ di, ti, iou: ov });
        });
      });
      pairs.sort((a, b) => b.iou - a.iou);

      const usedDet = new Set<number>();
      const usedTrack = new Set<number>();
      for (const p of pairs) {
        if (usedDet.has(p.di) || usedTrack.has(p.ti)) continue;
        usedDet.add(p.di);
        usedTrack.add(p.ti);
        const t = tracks[p.ti];
        const d = dets[p.di];
        t.tx = d.x;
        t.ty = d.y;
        t.tw = d.w;
        t.th = d.h;
        t.tScore = d.score;
        t.targetOpacity = 1;
        t.matched = true;
      }

      dets.forEach((d, di) => {
        const wt = wasteTypeForClassId(d.classId);
        if (!wt || usedDet.has(di)) return;
        tracks.push({
          id: nextTrackId++,
          classId: d.classId,
          wt,
          x: d.x,
          y: d.y,
          w: d.w,
          h: d.h,
          score: d.score,
          tx: d.x,
          ty: d.y,
          tw: d.w,
          th: d.h,
          tScore: d.score,
          opacity: 0,
          targetOpacity: 1,
          matched: true,
        });
      });

      for (const t of tracks) if (!t.matched) t.targetOpacity = 0;
    }

    worker.onmessage = (e: MessageEvent) => {
      const msg = e.data;
      if (msg.type === "ready") {
        readyRef.current = true;
        setStatusSafe("ready");
      } else if (msg.type === "result") {
        busyRef.current = false;
        ingest(msg.detections as Detection[]);
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
    let lastFrame = performance.now();
    const draw = () => {
      if (disposed) return;
      const now = performance.now();
      const dt = Math.min((now - lastFrame) / 1000, 0.1);
      lastFrame = now;

      // Frame-rate-independent easing toward each track's target.
      const posK = 1 - Math.exp(-dt / POS_TAU);
      const opK = 1 - Math.exp(-dt / OP_TAU);
      const tracks = tracksRef.current;
      for (const t of tracks) {
        t.x += (t.tx - t.x) * posK;
        t.y += (t.ty - t.y) * posK;
        t.w += (t.tw - t.w) * posK;
        t.h += (t.th - t.h) * posK;
        t.score += (t.tScore - t.score) * posK;
        t.opacity += (t.targetOpacity - t.opacity) * opK;
      }
      // Retire tracks that have finished fading out.
      tracksRef.current = tracks.filter(
        (t) => !(t.targetOpacity === 0 && t.opacity < 0.02)
      );

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

          for (const t of tracksRef.current) {
            const alpha = Math.max(0, Math.min(1, t.opacity));
            if (alpha < 0.02) continue;
            const color = wasteTypeColor(t.wt);
            const dx = offsetX + t.x * dispW;
            const dy = offsetY + t.y * dispH;
            const dw = t.w * dispW;
            const dh = t.h * dispH;

            // Subtle pop: scale from center as the box fades in / out.
            const scale = 0.9 + 0.1 * alpha;
            ctx.save();
            ctx.globalAlpha = alpha;
            ctx.translate(dx + dw / 2, dy + dh / 2);
            ctx.scale(scale, scale);
            ctx.translate(-(dx + dw / 2), -(dy + dh / 2));

            ctx.strokeStyle = color;
            ctx.strokeRect(dx, dy, dw, dh);

            const label = `${formatWasteType(t.wt)} ${Math.round(t.score * 100)}%`;
            const tw = ctx.measureText(label).width;
            const th = 18;
            const ly = dy - th >= 0 ? dy - th : dy;
            ctx.fillStyle = color;
            ctx.fillRect(dx, ly, tw + 10, th);
            ctx.fillStyle = "#ffffff";
            ctx.fillText(label, dx + 5, ly + 3);
            ctx.restore();
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
      tracksRef.current = [];
      lastSuggestionRef.current = undefined;
      onSuggestionRef.current?.(null);
    };
  }, [enabled, videoRef, overlayRef]);

  return { status, error };
}
