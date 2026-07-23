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
    .select("id, event_id, user_id, image_uri")
    .not("image_uri", "is", null);

  if (error) {
    console.error("Failed to read waste_logs:", error.message);
    process.exit(1);
  }

  console.log(`${rows.length} log(s) with an image.${DRY_RUN ? "  (dry run)" : ""}\n`);

  let moved = 0;
  let skipped = 0;
  let failed = 0;

  for (const row of rows) {
    const from = row.image_uri;
    const to = targetPath(row);

    if (from === to) {
      skipped++;
      continue;
    }

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

    const { error: moveErr } = await supabase.storage
      .from(WASTE_IMAGES_BUCKET)
      .move(from, to);

    if (moveErr) {
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
      .update({ image_uri: to })
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
