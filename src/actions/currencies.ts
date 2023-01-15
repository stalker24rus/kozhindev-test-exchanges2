import axios from "axios";
import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
} from "constants/actionTypes";
import {
  API_KEY,
  BASE_CURRENCY,
  REQUSTED_SIMBOLS,
  URL,
} from "constants/rateService";

export const getCurrencyRates = () => (dispatch: Function) => {
  dispatch(getCurrencyRatesStarted());
  dispatch(
    getCurrencyRatesSuccess({
      base: "USD",
      date: "2023-01-15",
      rates: {
        AED: 3.673042,
        AMD: 394.672074,
        CNY: 6.702904,
        EUR: 0.92185,
        GBP: 0.817595,
        INR: 81.285504,
        JPY: 127.88504,
        RUB: 66.000341,
        THB: 32.844038,
        TRY: 18.803504,
        UAH: 36.621376,
        USD: 1,
      },
    })
  );

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
};

const getCurrencyRatesStarted = () => ({
  type: GET_CURRENCY_RATES_STARTED,
});

const getCurrencyRatesSuccess = (result) => ({
  type: GET_CURRENCY_RATES_SUCCESS,
  payload: {
    ...result,
  },
});

const getCurrencyRatesFailure = (error) => ({
  type: GET_CURRENCY_RATES_FAILURE,
  payload: error,
});
