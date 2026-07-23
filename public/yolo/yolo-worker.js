importScripts("/ort/ort.wasm.min.js");

ort.env.wasm.wasmPaths = "/ort/";
ort.env.wasm.numThreads = 1;

let session = null;
let cfg = { inputSize: 640, scoreThreshold: 0.35, iouThreshold: 0.45 };

self.onmessage = async (event) => {
  const msg = event.data;
  try {
    if (msg.type === "init") {
      cfg = Object.assign({}, cfg, msg.cfg);
      session = await ort.InferenceSession.create(msg.model, {
        executionProviders: ["wasm"],
        graphOptimizationLevel: "all",
      });
      self.postMessage({ type: "ready" });
      return;
    }

    if (msg.type === "detect") {
      if (!session) return;
      const size = cfg.inputSize;
      const input = toTensorData(new Uint8ClampedArray(msg.buffer), size);
      const t0 = performance.now();
      const feeds = {};
      feeds[session.inputNames[0]] = new ort.Tensor("float32", input, [1, 3, size, size]);
      const output = await session.run(feeds);
      const detections = postprocess(output[session.outputNames[0]], cfg, msg.meta);
      self.postMessage({ type: "result", id: msg.id, detections, inferMs: performance.now() - t0 });
    }
  } catch (err) {
    self.postMessage({ type: "error", message: String(err && err.message ? err.message : err) });
  }
};

function toTensorData(rgba, size) {
  const area = size * size;
  const out = new Float32Array(area * 3);
  for (let i = 0; i < area; i++) {
    out[i] = rgba[i * 4] / 255;
    out[area + i] = rgba[i * 4 + 1] / 255;
    out[area * 2 + i] = rgba[i * 4 + 2] / 255;
  }
  return out;
}

const MAX_E2E_DETECTIONS = 1024;

function postprocess(tensor, cfg, meta) {
  const dims = tensor.dims;
  if (!dims || dims.length !== 3) return [];
  const d1 = dims[1];
  const d2 = dims[2];

  if (d2 === 6 && d1 <= MAX_E2E_DETECTIONS) {
    return decodeEndToEnd(tensor, cfg, meta, d1, true);
  }
  if (d1 === 6 && d2 <= MAX_E2E_DETECTIONS) {
    return decodeEndToEnd(tensor, cfg, meta, d2, false);
  }
  return decodeRaw(tensor, cfg, meta);
}

function decodeEndToEnd(tensor, cfg, meta, count, rowMajor) {
  const data = tensor.data;
  const val = rowMajor ? (i, k) => data[i * 6 + k] : (i, k) => data[k * count + i];
  const { scale, padX, padY, srcW, srcH } = meta;
  const boxes = [];
  for (let i = 0; i < count; i++) {
    const score = val(i, 4);
    if (score < cfg.scoreThreshold) continue;
    const x1 = (val(i, 0) - padX) / scale;
    const y1 = (val(i, 1) - padY) / scale;
    const x2 = (val(i, 2) - padX) / scale;
    const y2 = (val(i, 3) - padY) / scale;
    boxes.push({
      x: x1 / srcW,
      y: y1 / srcH,
      w: (x2 - x1) / srcW,
      h: (y2 - y1) / srcH,
      score,
      classId: Math.round(val(i, 5)),
    });
  }
  return boxes;
}

function decodeRaw(tensor, cfg, meta) {
  const dims = tensor.dims;
  const data = tensor.data;
  let channels, anchors, channelsFirst;
  if (dims[1] <= dims[2]) {
    channels = dims[1];
    anchors = dims[2];
    channelsFirst = true;
  } else {
    channels = dims[2];
    anchors = dims[1];
    channelsFirst = false;
  }
  const numClasses = channels - 4;
  if (numClasses <= 0) return [];
  const at = (c, a) => (channelsFirst ? data[c * anchors + a] : data[a * channels + c]);

  const { scale, padX, padY, srcW, srcH } = meta;
  const boxes = [];
  for (let a = 0; a < anchors; a++) {
    let best = 0;
    let bestClass = 0;
    for (let c = 0; c < numClasses; c++) {
      const s = at(4 + c, a);
      if (s > best) {
        best = s;
        bestClass = c;
      }
    }
    if (best < cfg.scoreThreshold) continue;

    const cx = at(0, a);
    const cy = at(1, a);
    const w = at(2, a);
    const h = at(3, a);
    const x0 = (cx - w / 2 - padX) / scale;
    const y0 = (cy - h / 2 - padY) / scale;
    boxes.push({
      x: x0 / srcW,
      y: y0 / srcH,
      w: w / scale / srcW,
      h: h / scale / srcH,
      score: best,
      classId: bestClass,
    });
  }
  return nms(boxes, cfg.iouThreshold);
}

function nms(boxes, iouThreshold) {
  boxes.sort((a, b) => b.score - a.score);
  const removed = new Array(boxes.length).fill(false);
  const keep = [];
  for (let i = 0; i < boxes.length; i++) {
    if (removed[i]) continue;
    keep.push(boxes[i]);
    for (let j = i + 1; j < boxes.length; j++) {
      if (!removed[j] && iou(boxes[i], boxes[j]) > iouThreshold) removed[j] = true;
    }
  }
  return keep;
}

function iou(a, b) {
  const ix = Math.max(0, Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x));
  const iy = Math.max(0, Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y));
  const inter = ix * iy;
  const union = a.w * a.h + b.w * b.h - inter;
  return union <= 0 ? 0 : inter / union;
}
