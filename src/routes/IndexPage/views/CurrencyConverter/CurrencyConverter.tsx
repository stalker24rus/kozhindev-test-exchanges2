import React from "react";
import { useBem, useDispatch, useSelector } from "@steroidsjs/core/hooks";
import { getConverterData } from "reducers/currencies";
import { setCurrencyConverterData } from "actions/currencies";

import Dashboard from "./views/Dashboard";

import "./CurrencyConverter.scss";
import { ICurrencyConverterItems } from "models";

export default function CurrencyConverter(): JSX.Element {
  const bem = useBem("CurrencyConverter");

  const {
    firstCurrency,
    secondCurrency,
  }: ICurrencyConverterItems = useSelector(getConverterData);

  const dispatch = useDispatch();

  const bindOnChange = (name: string) =>
    React.useCallback(
      (value: { [key: string]: string | number }) => {
        dispatch(setCurrencyConverterData({ [name]: value }));
      },
      [dispatch]
    );

  const memoFirstCurrency = React.useMemo(() => firstCurrency, [firstCurrency]);
  const memoSecondCurrency = React.useMemo(() => secondCurrency, [
    secondCurrency,
  ]);

  return (
    <div className={bem.block()}>
      <div className={bem.element("title")}>КОНВЕРТЕР ВАЛЮТ</div>
      <div className={bem.element("body")}>
        <Dashboard
          currency={memoFirstCurrency}
          onChange={bindOnChange("firstCurrency")}
        />

        <div className={bem.element("arrow")}>&#8644;</div>

        <Dashboard
          currency={memoSecondCurrency}
          onChange={bindOnChange("secondCurrency")}
        />
      </div>
    </div>
  );
}
