import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
} from "constants/actionTypes";
import { RootState } from "reducers";
import createTable from "utils/createTable";

const defaultState = () => {
  return {
    converter: {
      firstField: {
        value: 0,
        currency: undefined,
      },
      secondField: {
        value: 0,
        currency: undefined,
      },
    },
    table: [],
    lastUpdateDT: undefined,
    loading: false,
    fault: false,
  };
};

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case GET_CURRENCY_RATES_STARTED: {
      console.log(GET_CURRENCY_RATES_STARTED);
      return { ...state, loading: true };
    }
    case GET_CURRENCY_RATES_SUCCESS: {
      const { rates } = action.payload;
      const title = ["RUB", "USD", "EUR", "CNY"];
      const table = createTable(title, rates);
      return { ...state, table, loading: false, lastUpdateDT: new Date() };
    }

    case GET_CURRENCY_RATES_FAILURE: {
      return { ...state, loading: false, fault: true };
    }

    default:
      return state;
  }
};

export const getLastUpdateDT = (state: RootState) =>
  state.currencies.lastUpdateDT?.toLocaleString();

export const getCurrencyTable = (state: RootState) => state.currencies.table;

export const getConverterData = (state: RootState) =>
  state.currencies.converter;

export const getLoadingState = (state: RootState) => state.currencies.loading;
