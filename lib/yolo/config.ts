// Tune for your model. Drop the ONNX at public/models/model.onnx; see
// public/models/README.md.

export const YOLO_CONFIG = {
  modelUrl: "/models/model.onnx",
  inputSize: 640, // must match the model's export; use 320 for better WebView perf
  scoreThreshold: 0.35,
  iouThreshold: 0.45,
  targetFps: 12, // inference cadence; drawing is every frame
} as const;

// Class names in the model's output order (index = class id). These are the 60
// TACO (Trash Annotations in Context) categories, matching the class order in
// jeremy-rico/litter-detection's TACO.yaml. Spelling/casing is intentionally
// verbatim (incl. "Food Can", "Plastic glooves") because CLASS_TO_WASTE keys
// must match these strings exactly. Replace this whole list if you swap models.
export const MODEL_LABELS: readonly string[] = [
  "Aluminium foil", "Battery", "Aluminium blister pack", "Carded blister pack",
  "Other plastic bottle", "Clear plastic bottle", "Glass bottle",
  "Plastic bottle cap", "Metal bottle cap", "Broken glass", "Food Can",
  "Aerosol", "Drink can", "Toilet tube", "Other carton", "Egg carton",
  "Drink carton", "Corrugated carton", "Meal carton", "Pizza box", "Paper cup",
  "Disposable plastic cup", "Foam cup", "Glass cup", "Other plastic cup",
  "Food waste", "Glass jar", "Plastic lid", "Metal lid", "Other plastic",
  "Magazine paper", "Tissues", "Wrapping paper", "Normal paper", "Paper bag",
  "Plastified paper bag", "Plastic film", "Six pack rings", "Garbage bag",
  "Other plastic wrapper", "Single-use carrier bag", "Polypropylene bag",
  "Crisp packet", "Spread tub", "Tupperware", "Disposable food container",
  "Foam food container", "Other plastic container", "Plastic glooves",
  "Plastic utensils", "Pop tab", "Rope & strings", "Scrap metal", "Shoe",
  "Squeezable tube", "Plastic straw", "Paper straw", "Styrofoam piece",
  "Unlabeled litter", "Cigarette",
];

// Class name → one of the 17 DB waste_type values (omit to ignore the class).
// Mapping is by dominant material; genuinely composite items (blister packs,
// plasticised paper) are "mixed". Foam/styrofoam is polystyrene → plastic. Edit
// any line to taste — these are judgment calls, not ground truth.
export const CLASS_TO_WASTE: Readonly<Record<string, string>> = {
  "Aluminium foil": "aluminum",
  Battery: "batteries",
  "Aluminium blister pack": "aluminum",
  "Carded blister pack": "mixed",
  "Other plastic bottle": "plastic",
  "Clear plastic bottle": "plastic",
  "Glass bottle": "glass",
  "Plastic bottle cap": "plastic",
  "Metal bottle cap": "metal",
  "Broken glass": "glass",
  "Food Can": "metal",
  Aerosol: "metal",
  "Drink can": "aluminum",
  "Toilet tube": "cardboard",
  "Other carton": "cardboard",
  "Egg carton": "cardboard",
  "Drink carton": "cardboard",
  "Corrugated carton": "cardboard",
  "Meal carton": "cardboard",
  "Pizza box": "cardboard",
  "Paper cup": "paper",
  "Disposable plastic cup": "plastic",
  "Foam cup": "plastic",
  "Glass cup": "glass",
  "Other plastic cup": "plastic",
  "Food waste": "food",
  "Glass jar": "glass",
  "Plastic lid": "plastic",
  "Metal lid": "metal",
  "Other plastic": "plastic",
  "Magazine paper": "paper",
  Tissues: "paper",
  "Wrapping paper": "paper",
  "Normal paper": "paper",
  "Paper bag": "paper",
  "Plastified paper bag": "mixed",
  "Plastic film": "plastic",
  "Six pack rings": "plastic",
  "Garbage bag": "plastic",
  "Other plastic wrapper": "plastic",
  "Single-use carrier bag": "plastic",
  "Polypropylene bag": "plastic",
  "Crisp packet": "plastic",
  "Spread tub": "plastic",
  Tupperware: "plastic",
  "Disposable food container": "plastic",
  "Foam food container": "plastic",
  "Other plastic container": "plastic",
  "Plastic glooves": "plastic",
  "Plastic utensils": "plastic",
  "Pop tab": "aluminum",
  "Rope & strings": "textile",
  "Scrap metal": "metal",
  Shoe: "textile",
  "Squeezable tube": "plastic",
  "Plastic straw": "plastic",
  "Paper straw": "paper",
  "Styrofoam piece": "plastic",
  "Unlabeled litter": "other",
  Cigarette: "other",
};

export function wasteTypeForClassId(classId: number): string | null {
  const label = MODEL_LABELS[classId];
  if (!label) return null;
  return CLASS_TO_WASTE[label] ?? null;
}

export function labelForClassId(classId: number): string {
  return MODEL_LABELS[classId] ?? `class_${classId}`;
}
