export function formatWasteType(type: string): string {
  return type
    .split("_")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

const WASTE_TYPE_COLORS: Record<string, string> = {
  plastic: "#3b82f6",
  paper: "#d6b370",
  cardboard: "#b45309",
  glass: "#06b6d4",
  metal: "#6b7280",
  aluminum: "#b0c4de",
  food: "#f97316",
  organic: "#65a30d",
  textile: "#ec4899",
  rubber: "#111827",
  electronic: "#8b5cf6",
  batteries: "#dc2626",
  wood: "#854d0e",
  construction_material: "#a8a29e",
  hazardous: "#facc15",
  mixed: "#a3a3a3",
  other: "#64748b",
};

export function wasteTypeColor(type: string): string {
  return WASTE_TYPE_COLORS[type] ?? "#64748b";
}
