import { getNewCurrencyRates } from "api/rateService";
import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
  SET_CURRENCY_CONVERTER_DATA,
} from "constants/actionTypes";

export const getCurrencyRates = () => (dispatch: Function) => {
  dispatch(getCurrencyRatesStarted());

  setTimeout(() => {
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
  }, 1000);

  // getNewCurrencyRates()
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

export const setCurrencyConverterData = (data) => ({
  type: SET_CURRENCY_CONVERTER_DATA,
  payload: { data },
});
