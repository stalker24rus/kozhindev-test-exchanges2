import React from "react";
import { useBem, useDispatch, useSelector } from "@steroidsjs/core/hooks";
import { getConverterData } from "reducers/currencies";
import { setCurrencyConverterData } from "actions/currencies";

import Dashboard from "./views/Dashboard";

import "./CurrencyConverter.scss";

export default function CurrencyConverter(): JSX.Element {
  const bem = useBem("CurrencyConverter");

  const { firstField, secondField } = useSelector(getConverterData);

  const dispatch = useDispatch();

  const bindOnChange = (name: string) =>
    React.useCallback(
      (value: { [key: string]: string | number }) => {
        dispatch(setCurrencyConverterData({ [name]: value }));
      },
      [dispatch]
    );

  const memoFirstField = React.useMemo(() => firstField, [firstField]);
  const memoSecondField = React.useMemo(() => secondField, [secondField]);

  return (
    <div className={bem.block()}>
      <div className={bem.element("title")}>КОНВЕРТЕР ВАЛЮТ</div>
      <div className={bem.element("body")}>
        <Dashboard
          currencyInfo={memoFirstField}
          onChange={bindOnChange("firstField")}
        />

        <div className={bem.element("arrow")}>&#8644;</div>

        <Dashboard
          currencyInfo={memoSecondField}
          onChange={bindOnChange("secondField")}
        />
      </div>
    </div>
  );
}
