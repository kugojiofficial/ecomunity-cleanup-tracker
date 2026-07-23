// Export logged waste photos + their labels into a training-ready dataset.
//
// Every /log-waste submission stores the camera frame in the private
// `waste_log_images` bucket and the volunteer's chosen waste_type on the row.
// That pairing (image -> material label) IS a labeled dataset drawn from your
// exact deployment domain. This script downloads it into a classification layout
// that Ultralytics/YOLO/PyTorch can read directly, plus a manifest carrying full
// provenance (id, event, user, GPS, time, points) so you can later convert it to
// a detection dataset by drawing boxes.
//
//   Output layout (default):
//     training-data/
//       plastic/<logId>.jpg
//       glass/<logId>.jpg
//       ...
//       manifest.csv
//       manifest.jsonl
//
// Usage:
//   node scripts/export-training-data.mjs                 # export everything
//   node scripts/export-training-data.mjs --dry-run       # report, download nothing
//   node scripts/export-training-data.mjs --out ./ds      # custom output dir
//   node scripts/export-training-data.mjs --limit 500     # cap number of images
//   node scripts/export-training-data.mjs --since 2026-07-01   # only logs on/after this date
//
// Requires NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY in .env.local.

import { mkdir, writeFile } from "node:fs/promises";
import { Buffer } from "node:buffer";
import path from "node:path";
import { getAdminClient, WASTE_IMAGES_BUCKET, parseArgs } from "./lib/supabase-admin.mjs";

const args = parseArgs(process.argv.slice(2));
const DRY_RUN = Boolean(args["dry-run"]);
const OUT_DIR = path.resolve(String(args.out ?? "training-data"));
const LIMIT = args.limit ? Number(args.limit) : null;
const SINCE = args.since ? String(args.since) : null;

const supabase = getAdminClient();

const CSV_COLUMNS = [
  "id",
  "waste_type",
  "event_id",
  "user_id",
  "latitude",
  "longitude",
  "points",
  "created_at",
  "source_path",
  "local_path",
];

function csvCell(value) {
  const s = value === null || value === undefined ? "" : String(value);
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}

async function fetchRows() {
  let query = supabase
    .from("waste_logs")
    .select("id, waste_type, event_id, user_id, latitude, longitude, points, created_at, image_url")
    .not("image_url", "is", null)
    .order("created_at", { ascending: true });

  if (SINCE) query = query.gte("created_at", SINCE);
  if (LIMIT) query = query.limit(LIMIT);

  const { data, error } = await query;
  if (error) {
    console.error("Failed to read waste_logs:", error.message);
    process.exit(1);
  }
  return data;
}

async function downloadImage(sourcePath) {
  const { data, error } = await supabase.storage.from(WASTE_IMAGES_BUCKET).download(sourcePath);
  if (error || !data) throw new Error(error?.message ?? "download returned no data");
  return Buffer.from(await data.arrayBuffer());
}

async function main() {
  const rows = await fetchRows();
  console.log(
    `${rows.length} labeled image(s) to export${SINCE ? ` since ${SINCE}` : ""}` +
      `${LIMIT ? ` (limit ${LIMIT})` : ""}.${DRY_RUN ? "  (dry run)" : ""}\n`
  );

  const perClass = {};
  const manifest = [];
  let ok = 0;
  let failed = 0;

  for (const row of rows) {
    const cls = row.waste_type;
    perClass[cls] = (perClass[cls] ?? 0) + 1;

    const localRel = path.join(cls, `${row.id}.jpg`);
    const localAbs = path.join(OUT_DIR, localRel);

    if (!DRY_RUN) {
      try {
        const bytes = await downloadImage(row.image_url);
        await mkdir(path.dirname(localAbs), { recursive: true });
        await writeFile(localAbs, bytes);
        ok++;
      } catch (err) {
        console.warn(`  failed ${row.id} (${row.image_url}): ${err.message}`);
        failed++;
        continue;
      }
    }

    manifest.push({
      id: row.id,
      waste_type: row.waste_type,
      event_id: row.event_id,
      user_id: row.user_id,
      latitude: row.latitude,
      longitude: row.longitude,
      points: row.points,
      created_at: row.created_at,
      source_path: row.image_url,
      local_path: localRel.split(path.sep).join("/"),
    });
  }

  if (!DRY_RUN && manifest.length) {
    await mkdir(OUT_DIR, { recursive: true });
    const csv = [
      CSV_COLUMNS.join(","),
      ...manifest.map((m) => CSV_COLUMNS.map((c) => csvCell(m[c])).join(",")),
    ].join("\n");
    await writeFile(path.join(OUT_DIR, "manifest.csv"), csv + "\n");
    await writeFile(
      path.join(OUT_DIR, "manifest.jsonl"),
      manifest.map((m) => JSON.stringify(m)).join("\n") + "\n"
    );
  }

  console.log("Per-class counts:");
  for (const [cls, n] of Object.entries(perClass).sort((a, b) => b[1] - a[1])) {
    console.log(`  ${cls.padEnd(22)} ${n}`);
  }
  console.log(
    `\n${DRY_RUN ? "Would export" : "Exported"} ${DRY_RUN ? manifest.length : ok} image(s)` +
      `${failed ? `, ${failed} failed` : ""}.`
  );
  if (!DRY_RUN) console.log(`Output: ${OUT_DIR}`);
  if (failed > 0) process.exit(1);
}

main();
