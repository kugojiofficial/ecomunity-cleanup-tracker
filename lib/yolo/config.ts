import { MODELS, type ModelKey } from "./config-cache";

const ACTIVE_MODEL: ModelKey = "yolo26n";

const model = MODELS[ACTIVE_MODEL];

const DEFAULT_SCORE_THRESHOLD = 0.35;
const DEFAULT_IOU_THRESHOLD = 0.45;
const DEFAULT_TARGET_FPS = 12;

export const YOLO_CONFIG = {
  modelUrl: `/models/${model.file}`,
  inputSize: model.inputSize,
  scoreThreshold: model.scoreThreshold ?? DEFAULT_SCORE_THRESHOLD,
  iouThreshold: model.iouThreshold ?? DEFAULT_IOU_THRESHOLD,
  targetFps: model.targetFps ?? DEFAULT_TARGET_FPS,
} as const;

export const MODEL_LABELS: readonly string[] = model.labels;

export const CLASS_TO_WASTE: Readonly<Record<string, string>> = model.classToWaste;

export function wasteTypeForClassId(classId: number): string | null {
  const label = MODEL_LABELS[classId];
  if (!label) return null;
  return CLASS_TO_WASTE[label] ?? null;
}

export function labelForClassId(classId: number): string {
  return MODEL_LABELS[classId] ?? `class_${classId}`;
}
