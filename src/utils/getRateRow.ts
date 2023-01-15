import convertCurrency from "./convertCurrency";

export default function getRateRow(
  titles: string[],
  baseRate: number,
  rates: { [key: string]: number }
): { [key: string]: number } | undefined {
  const result = {};

  for (let i = 0; i < titles.length; i++) {
    const name = titles[i];

    if (rates[name] !== undefined) {
      result[name] = convertCurrency(1, baseRate, rates[name]);
    }
  }
  return result;
}
