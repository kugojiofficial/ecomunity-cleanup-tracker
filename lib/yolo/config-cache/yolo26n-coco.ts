import type { ModelConfig } from "./types";
import { COCO80_LABELS, COCO_CLASS_TO_WASTE } from "./coco";

export const yolo26nCoco: ModelConfig = {
  name: "YOLO26n (COCO-80, current)",
  file: "yolo26n.onnx",
  inputSize: 640,
  format: "end2end",
  labels: COCO80_LABELS,
  classToWaste: COCO_CLASS_TO_WASTE,
};
