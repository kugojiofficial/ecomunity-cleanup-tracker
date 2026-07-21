export function formatStartDateTime(isoString: string | null | undefined): string {
  if (!isoString) return "";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  const formattedDate = date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const formattedTime = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return `${formattedDate} at ${formattedTime}`;
}

export function formatEndedRelative(isoString: string | null | undefined): string {
  if (!isoString) return "";
  const date = new Date(isoString);
  if (Number.isNaN(date.getTime())) return "";

  const diffMs = new Date().getTime() - date.getTime();
  const MINUTE = 60 * 1000;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;

  let relative: string;
  if (diffMs < MINUTE) {
    relative = "just now";
  } else if (diffMs < HOUR) {
    const minutes = Math.floor(diffMs / MINUTE);
    relative = `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else if (diffMs < DAY) {
    const hours = Math.floor(diffMs / HOUR);
    relative = `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (diffMs < WEEK) {
    const days = Math.floor(diffMs / DAY);
    relative = `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (diffMs < MONTH) {
    const weeks = Math.floor(diffMs / WEEK);
    relative = `${weeks} week${weeks !== 1 ? "s" : ""} ago`;
  } else if (diffMs < YEAR) {
    const months = Math.floor(diffMs / MONTH);
    relative = `${months} month${months !== 1 ? "s" : ""} ago`;
  } else {
    const years = Math.floor(diffMs / YEAR);
    relative = `${years} year${years !== 1 ? "s" : ""} ago`;
  }
  return `Ended ${relative}`;
}

export function formatJoinDate(isoString: string | null | undefined): string {
  if (!isoString) return "—";
  const d = new Date(isoString);
  if (Number.isNaN(d.getTime())) return "—";
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `Joined ${yyyy}-${mm}-${dd}`;
}
