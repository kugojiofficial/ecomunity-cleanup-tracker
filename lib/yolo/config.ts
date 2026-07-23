// Tune for your model. Drop the ONNX at public/models/model.onnx; see
// public/models/README.md.

export const YOLO_CONFIG = {
  modelUrl: "/models/model.onnx",
  inputSize: 640, // must match the model's export; use 320 for better WebView perf
  scoreThreshold: 0.35,
  iouThreshold: 0.45,
  targetFps: 12, // inference cadence; drawing is every frame
} as const;

// Class names in the model's output order (index = class id). These are the 80
// COCO classes, matching the deployed yolo26n.onnx (stock Ultralytics YOLO26
// nano). This is a stopgap COCO detector — it's robust and high-confidence, but
// it detects common objects, not trash. Only the litter-relevant classes are
// mapped in CLASS_TO_WASTE below; everything else (person, car, furniture…) is
// detected by the model but dropped before drawing. Replace this whole list
// when a proper trash-trained model lands.
export const MODEL_LABELS: readonly string[] = [
  "person", "bicycle", "car", "motorcycle", "airplane", "bus", "train", "truck",
  "boat", "traffic light", "fire hydrant", "stop sign", "parking meter", "bench",
  "bird", "cat", "dog", "horse", "sheep", "cow", "elephant", "bear", "zebra",
  "giraffe", "backpack", "umbrella", "handbag", "tie", "suitcase", "frisbee",
  "skis", "snowboard", "sports ball", "kite", "baseball bat", "baseball glove",
  "skateboard", "surfboard", "tennis racket", "bottle", "wine glass", "cup",
  "fork", "knife", "spoon", "bowl", "banana", "apple", "sandwich", "orange",
  "broccoli", "carrot", "hot dog", "pizza", "donut", "cake", "chair", "couch",
  "potted plant", "bed", "dining table", "toilet", "tv", "laptop", "mouse",
  "remote", "keyboard", "cell phone", "microwave", "oven", "toaster", "sink",
  "refrigerator", "book", "clock", "vase", "scissors", "teddy bear", "hair drier",
  "toothbrush",
];

// Class name → one of the DB waste_type values. Only the COCO classes that are
// plausibly litter are mapped; any class omitted here is dropped (never boxed),
// which is how we hide people/cars/furniture. Mapping is by dominant material.
// Edit to taste — to turn this into a "detect everything" demo, map more classes.
export const CLASS_TO_WASTE: Readonly<Record<string, string>> = {
  bottle: "plastic",
  "wine glass": "glass",
  cup: "plastic",
  fork: "metal",
  knife: "metal",
  spoon: "metal",
  bowl: "plastic",
  vase: "glass",
  book: "paper",
  banana: "food",
  apple: "food",
  sandwich: "food",
  orange: "food",
  broccoli: "food",
  carrot: "food",
  "hot dog": "food",
  pizza: "food",
  donut: "food",
  cake: "food",
};

export function wasteTypeForClassId(classId: number): string | null {
  const label = MODEL_LABELS[classId];
  if (!label) return null;
  return CLASS_TO_WASTE[label] ?? null;
}

export function labelForClassId(classId: number): string {
  return MODEL_LABELS[classId] ?? `class_${classId}`;
}
