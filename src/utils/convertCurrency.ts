export default function convertCurrency(
  count: number,
  baseFrom: number,
  baseTo: number
): number {
  return (count / baseFrom) * baseTo;
}
