import { readFileSync, writeFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = "components/plasmic";
const FONT_IMPORT = /^@import url\("https:\/\/fonts\.googleapis\.com[^\n]*\r?\n/m;

function cssFiles(dir) {
  const out = [];
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    if (statSync(p).isDirectory()) out.push(...cssFiles(p));
    else if (entry.endsWith(".css") && !entry.endsWith(".module.css")) out.push(p);
  }
  return out;
}

let stripped = 0;
for (const file of cssFiles(ROOT)) {
  const src = readFileSync(file, "utf8");
  const out = src.replace(FONT_IMPORT, "");
  if (out !== src) {
    writeFileSync(file, out);
    stripped++;
    console.log("✓ stripped Google Fonts @import from", file);
  }
}
if (stripped === 0) console.log("• no Google Fonts @import to strip (already clean)");
