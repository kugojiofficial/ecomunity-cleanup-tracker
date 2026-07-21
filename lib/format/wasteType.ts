export function formatWasteType(type: string): string {
  return type
    .split("_")
    .map((word) => (word ? word.charAt(0).toUpperCase() + word.slice(1) : word))
    .join(" ");
}

const WASTE_TYPE_COLORS: Record<string, string> = {
  plastic: "#3b82f6", // blue
  paper: "#d6b370", // tan
  cardboard: "#b45309", // cardboard brown
  glass: "#06b6d4", // cyan
  metal: "#6b7280", // gray
  aluminum: "#b0c4de", // steel blue
  food: "#f97316", // orange
  organic: "#65a30d", // leaf green
  textile: "#ec4899", // pink
  rubber: "#111827", // near-black (tires)
  electronic: "#8b5cf6", // purple (e-waste)
  batteries: "#dc2626", // red (hazard)
  wood: "#854d0e", // wood brown
  construction_material: "#a8a29e", // stone
  hazardous: "#facc15", // hazard yellow
  mixed: "#a3a3a3", // neutral gray
  other: "#64748b", // slate
};

export function wasteTypeColor(type: string): string {
  return WASTE_TYPE_COLORS[type] ?? "#64748b";
}
