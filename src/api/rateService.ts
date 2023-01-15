import axios from "axios";
import {
  API_KEY,
  BASE_CURRENCY,
  REQUSTED_SIMBOLS,
  URL,
} from "constants/rateService";

// axios(
//   `${URL}/fixer/latest?base=${BASE_CURRENCY}` +
//     `&symbols=${REQUSTED_SIMBOLS},`,
//   {
//     method: "GET",
//     headers: {
//       apikey: API_KEY,
//     },
//   }
// )
//   .then((response) => dispatch(getCurrencyRatesSuccess(response.data)))
//   .catch((err) => dispatch(getCurrencyRatesFailure(err)));

const axiosInstance = axios.create({
  headers: {
    apikey: API_KEY,
  },
  baseURL: URL,
});

export function getNewCurrencyRates() {
  return axiosInstance.get(
    `/fixer/latest?base=${BASE_CURRENCY}&symbols=${REQUSTED_SIMBOLS}`
  );
}
