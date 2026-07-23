// One-time (idempotent) migration of waste-log images to the layout
//   <eventId>/<userId>/<logId>.jpg
// Older images used <userId>/<uuid>.jpg. For each waste_log whose image_url is
// not already in the new shape, this copies the object to the new path, updates
// waste_logs.image_url, and removes the old object.
//
//   node scripts/migrate-storage-layout.mjs --dry-run   # preview only
//   node scripts/migrate-storage-layout.mjs             # apply
//
// Safe to re-run: rows already at the target path are skipped.

import { getAdminClient, WASTE_IMAGES_BUCKET, parseArgs } from "./lib/supabase-admin.mjs";

const args = parseArgs(process.argv.slice(2));
const DRY_RUN = Boolean(args["dry-run"]);
const supabase = getAdminClient();

function targetPath(row) {
  return `${row.event_id}/${row.user_id}/${row.id}.jpg`;
}

async function main() {
  const { data: rows, error } = await supabase
    .from("waste_logs")
    .select("id, event_id, user_id, image_url")
    .not("image_url", "is", null);

  if (error) {
    console.error("Failed to read waste_logs:", error.message);
    process.exit(1);
  }

  console.log(`${rows.length} log(s) with an image.${DRY_RUN ? "  (dry run)" : ""}\n`);

  let moved = 0;
  let skipped = 0;
  let failed = 0;

  for (const row of rows) {
    const from = row.image_url;
    const to = targetPath(row);

    if (from === to) {
      skipped++;
      continue;
    }
    // A user_id is required to build the owner-scoped path; skip anonymized rows.
    if (!row.user_id || !row.event_id) {
      console.warn(`skip ${row.id}: missing event_id/user_id (${from})`);
      skipped++;
      continue;
    }

    console.log(`${from}\n  -> ${to}`);
    if (DRY_RUN) {
      moved++;
      continue;
    }

    // storage.move is a rename within the bucket; then repoint the DB row.
    const { error: moveErr } = await supabase.storage
      .from(WASTE_IMAGES_BUCKET)
      .move(from, to);

    if (moveErr) {
      // If the source is already gone but the target exists, treat as done.
      const { data: exists } = await supabase.storage
        .from(WASTE_IMAGES_BUCKET)
        .list(to.split("/").slice(0, -1).join("/"), {
          search: to.split("/").pop(),
        });
      if (!exists?.length) {
        console.error(`  move failed: ${moveErr.message}`);
        failed++;
        continue;
      }
    }

    const { error: updErr } = await supabase
      .from("waste_logs")
      .update({ image_url: to })
      .eq("id", row.id);

    if (updErr) {
      console.error(`  db update failed: ${updErr.message}`);
      failed++;
      continue;
    }
    moved++;
  }

  console.log(
    `\nDone. ${DRY_RUN ? "would move" : "moved"} ${moved}, skipped ${skipped}, failed ${failed}.`
  );
  if (failed > 0) process.exit(1);
}

main();
