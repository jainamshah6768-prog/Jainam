export function formatINR(amount: number): string {
  const isWhole = Math.abs(amount - Math.round(amount)) < 0.001;
  const formatted = amount.toLocaleString('en-IN', {
    minimumFractionDigits: isWhole ? 0 : 2,
    maximumFractionDigits: isWhole ? 0 : 2,
  });
  return `₹${formatted}`;
}
