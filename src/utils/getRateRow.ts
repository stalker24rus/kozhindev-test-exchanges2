export default function getRateRow(
  baseCode: string,
  baseRate: number,
  titles: string[],
  rates: { [key: string]: number }
): { [key: string]: number } | undefined {
  const result = {};

  for (let i = 0; i < titles.length; i++) {
    const name = titles[i];

    if (rates[name] !== undefined) {
      result[name] =
        baseCode !== name ? (rates[name] / baseRate).toFixed(5) : 1;
    }
  }
  return result;
}
