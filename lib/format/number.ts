export function formatWithCommas(n: number | null | undefined): string {
  if (n == null || Number.isNaN(n)) return "";
  return n.toLocaleString("en-US");
}

export function abbreviateNumber(n: number | null | undefined, digits = 1): string {
  if (n == null || Number.isNaN(n)) return "";

  const abs = Math.abs(n);
  if (abs < 1000) return formatWithCommas(n);

  const units = [
    { value: 1e12, symbol: "T" },
    { value: 1e9, symbol: "B" },
    { value: 1e6, symbol: "M" },
    { value: 1e3, symbol: "K" },
  ];
  const unit = units.find((u) => abs >= u.value)!;
  const scaled = (n / unit.value).toFixed(digits).replace(/\.0+$/, "");
  return scaled + unit.symbol;
}
