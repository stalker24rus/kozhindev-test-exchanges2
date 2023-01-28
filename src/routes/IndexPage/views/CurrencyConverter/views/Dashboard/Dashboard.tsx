import React from "react";
import { useBem } from "@steroidsjs/core/hooks";

import NumberField from "ui/NumberField";
import DropDownField from "@steroidsjs/core/ui/form/DropDownField";
import { CURRENCY_LIST } from "constants/currencies";

import "./Dashboard.scss";

export default function Dashboard({ currencyInfo, onChange }) {
  const bem = useBem("Dashboard");

  const bindOnChange = (name: string) =>
    React.useCallback(
      (value: string | number) => {
        onChange({ [name]: value });
      },
      [onChange]
    );

  return (
    <div className={bem.element("item")}>
      <div className={bem.element("number-field")}>
        <NumberField
          value={currencyInfo.value}
          onChange={bindOnChange("value")}
        />
      </div>

      <div className={bem.element("drop-down-field")}>
        <DropDownField
          value={currencyInfo.currency}
          items={CURRENCY_LIST}
          onChange={bindOnChange("currency")}
        />
      </div>
    </div>
  );
}
