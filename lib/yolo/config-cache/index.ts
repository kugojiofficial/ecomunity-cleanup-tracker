export type { ModelConfig, YoloOutputFormat } from "./types";
export { COCO80_LABELS, COCO_CLASS_TO_WASTE } from "./coco";
export { yolov8nCoco } from "./yolov8n-coco";
export { yolo26nCoco } from "./yolo26n-coco";
export { jeremyTaco60 } from "./jeremy-taco60";

import type { ModelConfig } from "./types";
import { yolov8nCoco } from "./yolov8n-coco";
import { yolo26nCoco } from "./yolo26n-coco";
import { jeremyTaco60 } from "./jeremy-taco60";

export const MODELS = {
  yolo26n: yolo26nCoco,
  yolov8n: yolov8nCoco,
  "jeremy-taco60": jeremyTaco60,
} as const satisfies Record<string, ModelConfig>;

export type ModelKey = keyof typeof MODELS;

export const CACHED_MODELS: readonly ModelConfig[] = Object.values(MODELS);
