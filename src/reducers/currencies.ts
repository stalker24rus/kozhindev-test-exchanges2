import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
} from "constants/actionTypes";
import createTable from "utils/createTable";

const defaultState = () => {
  return {
    calculator: [
      {
        value: 1.63463,
        currency: { id: 0, label: "Российский рубль" },
      },
      {
        value: 0.1012,
        currency: { id: 0, label: "Доллар США" },
      },
    ],
    table: [],
    LastUpdateDateTime: "",
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
      return { ...state, table, loading: false };
    }

    case GET_CURRENCY_RATES_FAILURE: {
      return { ...state, loading: false, fault: true };
    }

    default:
      return state;
  }
};
