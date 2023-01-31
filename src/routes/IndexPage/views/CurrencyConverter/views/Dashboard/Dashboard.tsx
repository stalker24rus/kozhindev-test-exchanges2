import React from "react";
import { useBem } from "@steroidsjs/core/hooks";

import InputFieldView from "@steroidsjs/core/ui/form/InputField";
import DropDownField from "@steroidsjs/core/ui/form/DropDownField";

import { CURRENCY_LIST } from "constants/currencies";

import "./Dashboard.scss";

export default function Dashboard({ record, onChange }) {
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
        <InputFieldView
          type="number"
          className={bem.element("input")}
          value={record.value}
          onChange={bindOnChange("value")}
        />
      </div>

      <div className={bem.element("drop-down-field")}>
        <DropDownField
          value={record.currency}
          items={CURRENCY_LIST}
          onChange={bindOnChange("currency")}
        />
      </div>
    </div>
  );
}
