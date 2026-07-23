// Tune for your model. Drop the ONNX at public/models/model.onnx; see
// public/models/README.md.

export const YOLO_CONFIG = {
  modelUrl: "/models/model.onnx",
  inputSize: 640, // must match the model's export; use 320 for better WebView perf
  scoreThreshold: 0.35,
  iouThreshold: 0.45,
  targetFps: 12, // inference cadence; drawing is every frame
} as const;

// Class names in the model's output order (index = class id). Default: COCO-80.
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
  "refrigerator", "book", "clock", "vase", "scissors", "teddy bear",
  "hair drier", "toothbrush",
];

// Class name → one of the 17 DB waste_type values (omit to ignore the class).
export const CLASS_TO_WASTE: Readonly<Record<string, string>> = {
  bottle: "plastic",
  cup: "plastic",
  "wine glass": "glass",
  bowl: "glass",
  vase: "glass",
  fork: "metal",
  knife: "metal",
  spoon: "metal",
  scissors: "metal",
  banana: "food",
  apple: "food",
  orange: "food",
  sandwich: "food",
  "hot dog": "food",
  pizza: "food",
  donut: "food",
  cake: "food",
  broccoli: "organic",
  carrot: "organic",
  "potted plant": "organic",
  book: "paper",
  "cell phone": "electronic",
  laptop: "electronic",
  keyboard: "electronic",
  mouse: "electronic",
  remote: "electronic",
  tv: "electronic",
  microwave: "electronic",
  toaster: "electronic",
  "hair drier": "electronic",
};

export function wasteTypeForClassId(classId: number): string | null {
  const label = MODEL_LABELS[classId];
  if (!label) return null;
  return CLASS_TO_WASTE[label] ?? null;
}

export function labelForClassId(classId: number): string {
  return MODEL_LABELS[classId] ?? `class_${classId}`;
}
