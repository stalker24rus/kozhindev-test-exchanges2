import {
  GET_CURRENCY_RATES_FAILURE,
  GET_CURRENCY_RATES_STARTED,
  GET_CURRENCY_RATES_SUCCESS,
} from "constants/actionTypes";

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
    table: {},
  };
};

export default (state = defaultState(), action: any) => {
  switch (action.type) {
    case GET_CURRENCY_RATES_STARTED: {
      return state;
    }
    case GET_CURRENCY_RATES_SUCCESS: {
      console.log(action.payload);
      return state;
    }

    case GET_CURRENCY_RATES_FAILURE: {
      console.log(action.payload);
      return state;
    }

    default:
      return state;
  }
};
