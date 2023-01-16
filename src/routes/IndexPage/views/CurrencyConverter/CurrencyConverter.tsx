import React from "react";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import NumberField from "@steroidsjs/core/ui/form/NumberField";
import DropDownField from "@steroidsjs/core/ui/form/DropDownField";
import { CURRENCY_LIST } from "constants/currencies";
import { getConverterData } from "reducers/currencies";

import "./CurrencyConverter.scss";

export default function CurrencyConverter(): JSX.Element {
  const bem = useBem("CurrencyCounter");
  const { firstField, secondField } = useSelector(getConverterData);

  const handleOnChange = (ev) => {
    console.log(ev);
  };

  return (
    <div className={bem.block()}>
      <div className={bem.element("item")}>
        <div className={bem.element("number-field")} onChange={handleOnChange}>
          <NumberField
            label="firstField.value"
            value={firstField.value}
            inputProps={{
              name: "firstField.value",
              onclick: handleOnChange,
            }}
          />
        </div>

        <div className={bem.element("drop-down-field")}>
          <DropDownField
            label="firstField.currency"
            value={firstField.currency}
            items={CURRENCY_LIST}
            inputProps={{
              name: "firstField.currency",
            }}
            onChange={handleOnChange}
          />
        </div>
      </div>

      <div className={bem.element("item")}>
        <div className={bem.element("number-field")}>
          <NumberField
            label="secondField.value"
            value={secondField.value}
            inputProps={{
              name: "secondField.value",
              onclick: handleOnChange,
            }}
          />
        </div>
        <div className={bem.element("drop-down-field")}>
          <DropDownField
            label="secondField.currency"
            value={secondField.currency}
            items={CURRENCY_LIST}
            inputProps={{
              name: "secondField.currency",
            }}
            onChange={handleOnChange}
          />
        </div>
      </div>
    </div>
  );
}
