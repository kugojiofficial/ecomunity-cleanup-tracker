import type { ModelConfig } from "./types";
import { COCO80_LABELS, COCO_CLASS_TO_WASTE } from "./coco";

export const yolov8nCoco: ModelConfig = {
  name: "YOLOv8n (COCO-80, demo)",
  file: "yolov8n.onnx",
  inputSize: 640,
  format: "raw",
  labels: COCO80_LABELS,
  classToWaste: COCO_CLASS_TO_WASTE,
};
