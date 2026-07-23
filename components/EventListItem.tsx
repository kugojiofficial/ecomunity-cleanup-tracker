import * as React from "react";
import { classNames, HTMLElementRefOf } from "@plasmicapp/react-web";
import {
  PlasmicEventListItem,
  DefaultEventListItemProps,
} from "./plasmic/eco_munity_cleanup_tracker/PlasmicEventListItem";
import sty from "./plasmic/eco_munity_cleanup_tracker/PlasmicEventListItem.module.css";
import { getEventWasteLogs, type WasteLog } from "../lib/api";

export interface EventListItemProps extends DefaultEventListItemProps {
  eventId?: string;
}

function statValue(value: number | undefined, textClass: string) {
  return (
    <div className={classNames("all", "__wab_text", textClass)}>
      {String(value ?? 0)}
    </div>
  );
}

const CSV_COLUMNS: (keyof WasteLog)[] = [
  "id",
  "event_id",
  "user_id",
  "waste_type",
  "latitude",
  "longitude",
  "accuracy_meters",
  "points",
  "created_at",
];

function toCsv(logs: WasteLog[]): string {
  const escape = (v: unknown) => {
    const s = v == null ? "" : String(v);
    return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };
  const header = CSV_COLUMNS.join(",");
  const rows = logs.map((log) => CSV_COLUMNS.map((c) => escape(log[c])).join(","));
  return [header, ...rows].join("\n");
}

function triggerDownload(content: string, type: string, filename: string) {
  const url = URL.createObjectURL(new Blob([content], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function EventListItem_(
  {
    eventId,
    participantsCount,
    collectedWasteAmount,
    duration,
    ...props
  }: EventListItemProps,
  ref: HTMLElementRefOf<"div">
) {
  async function downloadLogs(format: "csv" | "json") {
    if (!eventId) return;
    const res = await getEventWasteLogs(eventId, 100000);
    if (!res.success) {
      console.error("Failed to load logs for download:", res.error);
      return;
    }
    const short = eventId.slice(0, 8);
    if (format === "json") {
      triggerDownload(
        JSON.stringify(res.data, null, 2),
        "application/json",
        `waste-logs-${short}.json`
      );
    } else {
      triggerDownload(toCsv(res.data), "text/csv;charset=utf-8", `waste-logs-${short}.csv`);
    }
  }

  return (
    <PlasmicEventListItem
      eventListItem={{ ref }}
      {...props}
      eventListItemParticipantsStatValueLabel={{
        children: statValue(participantsCount, sty.text__vAviY),
      }}
      eventListItemCollectedWasteStatValueLabel={{
        children: statValue(collectedWasteAmount, sty.text__yGFjp),
      }}
      eventListItemTimeStatValueLabel={{
        children: statValue(duration, sty.text__yHkfn),
      }}
      eventListItemDownloadCsvButton={{ onClick: () => void downloadLogs("csv") }}
      eventListItemDownloadJsonButton={{ onClick: () => void downloadLogs("json") }}
      interactiveMap={{ eventId }}
    />
  );
}

const EventListItem = React.forwardRef(EventListItem_);
export default EventListItem;
