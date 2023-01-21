const сourseСollumns = ["RUB", "USD", "EUR", "CNY"];

export default function getCurrencyCource(
  rowCurrencyCode: string,
  rates: { [key: string]: number }
): { [key: string]: number } | undefined {
  const currencyCource = {};

  for (let i = 0; i < сourseСollumns.length; i++) {
    const сourseCollumn = сourseСollumns[i];
    const baseRate = rates[rowCurrencyCode];

    if (rates[сourseCollumn] !== undefined) {
      currencyCource[сourseCollumn] =
        rowCurrencyCode !== сourseCollumn
          ? (rates[сourseCollumn] / baseRate).toFixed(5)
          : 1;
    }
  }
  return currencyCource;
}
