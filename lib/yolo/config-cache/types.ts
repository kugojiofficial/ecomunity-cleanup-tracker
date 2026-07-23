export type YoloOutputFormat = "raw" | "end2end";

export type ModelConfig = {
  name: string;
  file: string;
  inputSize: number;
  format: YoloOutputFormat;
  scoreThreshold?: number;
  iouThreshold?: number;
  targetFps?: number;
  labels: readonly string[];
  classToWaste: Readonly<Record<string, string>>;
};
