import { getNewCurrencyRates } from "api/apiService";
import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
  SET_CURRENCY_CONVERTER_DATA,
} from "constants/actionTypes";
import { IApiRequestResult, ICurrencyConverterItems } from "models";
import { RootState } from "reducers";
import getNewConverterState from "utils/getNewConverterState";

export const getCurrencyRates = () => (dispatch: Function) => {
  dispatch(getCurrencyRatesStarted());

  if (true) {
    getFakeRequestData(dispatch); // для проверки без использования api
  } else {
    getNewCurrencyRates()
      .then((response) => dispatch(getCurrencyRatesSuccess(response.data)))
      .catch((error) => dispatch(getCurrencyRatesFailure(error)));
  }
};

const getCurrencyRatesStarted = () => ({
  type: GET_CURRENCY_RATES_STARTED,
});

const getCurrencyRatesSuccess = (result: IApiRequestResult) => ({
  type: GET_CURRENCY_RATES_SUCCESS,
  payload: {
    ...result,
  },
});

const getCurrencyRatesFailure = (error: any) => ({
  type: GET_CURRENCY_RATES_FAILURE,
  payload: error,
});

export const setCurrencyConverterData = (changes: { [key: string]: any }) => (
  dispatch: Function,
  getState: () => RootState
) => {
  const state = getState();
  const { converter, rates } = state.currencies;

  const newConverterState = getNewConverterState(changes, converter, rates);

  dispatch({
    type: SET_CURRENCY_CONVERTER_DATA,
    payload: { data: newConverterState },
  });
};

function getFakeRequestData(dispatch: Function) {
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
}
