import _ from "lodash";
import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
  SET_CURRENCY_CONVERTER_DATA,
} from "constants/actionTypes";
import { LOCALSTORAGE_CONVERTER } from "constants/currencies";
import { RootState } from "reducers";
import createTable from "utils/createTable";

const defaultState = () => {
  return {
    converter: JSON.parse(localStorage.getItem(LOCALSTORAGE_CONVERTER)) || {
      firstField: {
        value: 1,
        currency: "RUB",
      },
      secondField: {
        value: 1,
        currency: "USD",
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
      return { ...state, loading: true };
    }
    case GET_CURRENCY_RATES_SUCCESS: {
      const { rates } = action.payload;
      const title = ["RUB", "USD", "EUR", "CNY"];
      const table = createTable(title, rates) || [];
      return { ...state, table, loading: false, lastUpdateDT: new Date() };
    }

    case GET_CURRENCY_RATES_FAILURE: {
      return { ...state, loading: false, fault: true };
    }

    case SET_CURRENCY_CONVERTER_DATA: {
      const { data } = action.payload;
      //console.log(data);
      const converter = _.cloneDeep(state.converter);
      _.merge(converter, data);

      localStorage.setItem(LOCALSTORAGE_CONVERTER, JSON.stringify(converter));
      return { ...state, converter };
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
