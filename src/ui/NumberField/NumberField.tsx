import { useBem } from "@steroidsjs/core/hooks";
import InputFieldView from "@steroidsjs/core/ui/form/InputField";

import React from "react";

import "./NumberField.scss";

interface INumberFieldProps {
  value: number;
  onChange: Function;
}

export default function NumberField({
  value,
  onChange,
}: INumberFieldProps): JSX.Element {
  const bem = useBem("CurrencyCounter");

  const handleChange = React.useCallback(
    (value) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <div className={bem.block()}>
      <InputFieldView
        type="number"
        className={bem.element("input")}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
