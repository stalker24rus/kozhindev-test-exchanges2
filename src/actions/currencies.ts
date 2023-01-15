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
  getCurrencyRatesSuccess({
    data: {
      rates: {
        AED: 3.673042,
        AMD: 394.672074,
        CNY: 6.702904,
      },
    },
  });
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
  //   .then((response) => dispatch(getCurrencyRatesSuccess(response)))
  //   .catch((err) => dispatch(getCurrencyRatesFailure(err)));
};

const getCurrencyRatesStarted = () => ({
  type: GET_CURRENCY_RATES_STARTED,
});

const getCurrencyRatesSuccess = (result) => {
  // console.log(result);
  return {
    type: GET_CURRENCY_RATES_SUCCESS,
    payload: {
      ...result.data,
    },
  };
};

const getCurrencyRatesFailure = (error) => ({
  type: GET_CURRENCY_RATES_FAILURE,
  payload: error,
});
