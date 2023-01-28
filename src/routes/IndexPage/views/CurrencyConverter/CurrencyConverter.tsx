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
      <div className={bem.element("container")}>
        <div className={bem.element("title")}>Конвертер валют</div>
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
    </div>
  );
}

{
  /* 
             <div className={bem.element("item")}>
            <div className={bem.element("number-field")}>
              <NumberField
                value={memoFirstField.value}
                onChange={bindingChange("firstField.value")}
              />
            </div>

            <div className={bem.element("drop-down-field")}>
              <DropDownField
                value={memoFirstField.currency}
                items={CURRENCY_LIST}
                onChange={bindingChange("firstField.currency")}
              />
            </div>
          </div> */
}

{
  /* <div className={bem.element("item")}>
            <div className={bem.element("number-field")}>
              <NumberField
                value={memoSecondField.value}
                onChange={bindingChange("secondField.value")}
              />
            </div>
            <div className={bem.element("drop-down-field")}>
              <DropDownField
                value={memoSecondField.currency}
                // inputValue={secondField.currency}
                items={CURRENCY_LIST}
                onChange={bindingChange("secondField.currency")}
              />
            </div> 

          </div>*/
}
