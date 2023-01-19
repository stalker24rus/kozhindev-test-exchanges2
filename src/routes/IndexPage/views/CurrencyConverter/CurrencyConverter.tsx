import React from "react";
import { useBem, useDispatch, useSelector } from "@steroidsjs/core/hooks";
import NumberField from "@steroidsjs/core/ui/form/NumberField";
import DropDownField from "@steroidsjs/core/ui/form/DropDownField";
import { CURRENCY_LIST } from "constants/currencies";
import { getConverterData } from "reducers/currencies";
import { setCurrencyConverterData } from "actions/currencies";

import "./CurrencyConverter.scss";

export default function CurrencyConverter(): JSX.Element {
  const bem = useBem("CurrencyCounter");
  const { firstField, secondField } = useSelector(getConverterData);
  const dispatch = useDispatch();

  const bindingChange = (name: string) =>
    React.useCallback(
      (value: number) => {
        const [parent, element] = name.split(".");

        if (parent && element) {
          dispatch(
            setCurrencyConverterData({ [parent]: { [element]: value } })
          );
        }
      },
      [dispatch]
    );

  return (
    <div className={bem.block()}>
      <div className={bem.element("title")}>Конвертер валют</div>
      <div className={bem.element("item")}>
        <div className={bem.element("number-field")}>
          <NumberField
            value={firstField.value}
            onChange={bindingChange("firstField.value")}
          />
        </div>

        <div className={bem.element("drop-down-field")}>
          <DropDownField
            value={firstField.currency}
            items={CURRENCY_LIST}
            onChange={bindingChange("firstField.currency")}
          />
        </div>
      </div>

      <div className={bem.element("item")}>
        <div className={bem.element("number-field")}>
          <NumberField
            value={secondField.value}
            onChange={bindingChange("secondField.value")}
          />
        </div>
        <div className={bem.element("drop-down-field")}>
          <DropDownField
            value={secondField.currency}
            items={CURRENCY_LIST}
            onChange={bindingChange("secondField.currency")}
          />
        </div>
      </div>
    </div>
  );
}
