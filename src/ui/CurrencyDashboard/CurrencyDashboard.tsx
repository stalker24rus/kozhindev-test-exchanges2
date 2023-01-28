import React from "react";
import { useBem } from "@steroidsjs/core/hooks";

import NumberField from "ui/NumberField";
import DropDownField from "@steroidsjs/core/ui/form/DropDownField";

import useBindNameToFuncResult from "hooks/useBindNameToFuncResult";

import "./CurrencyDashboard.scss";

export default function CurrencyDashboard(currency, currencyList, onChange) {
  const bem = useBem("CurrencyDashboard");
  const bindNameToOnChangeResult = useBindNameToFuncResult(onChange);

  return (
    <div className={bem.element("item")}>
      <div className={bem.element("number-field")}>
        <NumberField
          value={currency.value}
          onChange={bindNameToOnChangeResult("value")}
        />
      </div>

      <div className={bem.element("drop-down-field")}>
        <DropDownField
          value={currency.name}
          items={currencyList}
          onChange={bindNameToOnChangeResult("name")}
        />
      </div>
    </div>
  );
}
