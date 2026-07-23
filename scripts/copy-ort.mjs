import { existsSync, mkdirSync, readdirSync, copyFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "node_modules", "onnxruntime-web", "dist");
const dest = join(root, "public", "ort");

if (!existsSync(src)) {
  console.warn("[copy-ort] onnxruntime-web not installed; skipping.");
  process.exit(0);
}

mkdirSync(dest, { recursive: true });

const wanted = (f) =>
  f === "ort.wasm.min.js" || /^ort-wasm.*\.(wasm|mjs)$/.test(f);

let count = 0;
for (const file of readdirSync(src)) {
  if (wanted(file)) {
    copyFileSync(join(src, file), join(dest, file));
    count += 1;
  }
}

console.log(`[copy-ort] copied ${count} onnxruntime-web files to public/ort`);
