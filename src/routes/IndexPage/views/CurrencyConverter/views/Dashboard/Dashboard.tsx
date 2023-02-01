import React, { useMemo } from "react";
import { useBem } from "@steroidsjs/core/hooks";

import InputFieldView from "@steroidsjs/core/ui/form/InputField";
import DropDownField from "@steroidsjs/core/ui/form/DropDownField";

import { CURRENCY_DROPDOWN_LIST } from "constants/currencies";
import { ICurrencyConverterRecord } from "models";

import "./Dashboard.scss";

interface IProps {
  currency: ICurrencyConverterRecord;
  onChange: Function;
}

export default function Dashboard({ currency, onChange }: IProps): JSX.Element {
  const bem = useBem("Dashboard");

  const bindOnChange = React.useCallback(
    (name: string) => (value: string | number) => {
      onChange({ [name]: value });
    },
    [onChange]
  );

  const memoCurrency = React.useMemo(() => currency, [currency]);

  return (
    <div className={bem.element("item")}>
      <div className={bem.element("number-field")}>
        <InputFieldView
          type="number"
          inputProps={{
            min: 0,
          }}
          className={bem.element("input")}
          value={memoCurrency.value}
          onChange={bindOnChange("value")}
        />
      </div>

      <div className={bem.element("drop-down-field")}>
        <DropDownField
          value={memoCurrency.code}
          items={CURRENCY_DROPDOWN_LIST}
          onChange={bindOnChange("code")}
        />
      </div>
    </div>
  );
}
