import _ from "lodash";
import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
  SET_CURRENCY_CONVERTER_DATA,
} from "constants/actionTypes";
import { LOCALSTORAGE_CONVERTER } from "constants/currencies";
import { RootState } from "reducers";
import saveLocalStorage from "utils/saveLocalStorage";
import loadLocalStorage from "utils/loadLocalStorage";

const defaultState = () => {
  return {
    converter: loadLocalStorage(LOCALSTORAGE_CONVERTER) || {
      firstField: {
        value: 1,
        currency: "RUB",
      },
      secondField: {
        value: 1,
        currency: "USD",
      },
    },
    rates: {},
    lastUpdateDT: undefined,
    loading: false,
    fault: false,
  };
};

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case GET_CURRENCY_RATES_STARTED: {
      return { ...state, loading: true };
    }
    case GET_CURRENCY_RATES_SUCCESS: {
      const { rates } = action.payload;
      return { ...state, rates, loading: false, lastUpdateDT: new Date() };
    }

    case GET_CURRENCY_RATES_FAILURE: {
      return { ...state, loading: false, fault: true };
    }

    case SET_CURRENCY_CONVERTER_DATA: {
      const { data } = action.payload;
      saveLocalStorage(LOCALSTORAGE_CONVERTER, data);
      return { ...state, converter: data };
    }

    default:
      return state;
  }
};

export const getLastUpdateDT = (state: RootState) =>
  state.currencies.lastUpdateDT?.toLocaleString();

export const getCurrencyRates = (state: RootState) => state.currencies.rates;

export const getConverterData = (state: RootState) =>
  state.currencies.converter;

export const getLoadingState = (state: RootState) => state.currencies.loading;
