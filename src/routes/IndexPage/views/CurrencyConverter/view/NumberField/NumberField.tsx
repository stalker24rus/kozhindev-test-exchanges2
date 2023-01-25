import { useBem } from "@steroidsjs/core/hooks";
import React from "react";

import "./NumberField.scss";

interface INumberFieldProps {
  value: string;
  onChange: Function;
}

export default function NumberField({
  value,
  onChange,
}: INumberFieldProps): JSX.Element {
  const bem = useBem("CurrencyCounter");

  const handleChange = React.useCallback(
    (ev) => {
      const newValue = ev.target.value;
      //   onChange(newValue.replace(",", ".").replace(/[^0-9.,]/g, ""));
      onChange(newValue.replace(/\d\,\d/g, "").replace(",", "."));
    },
    [onChange]
  );

  const memoValue = React.useMemo(() => value.replace(".", ","), [value]);

  return (
    <div className={bem.block()}>
      <input
        className={bem.element("input")}
        value={memoValue}
        onChange={handleChange}
      />
    </div>
  );
}
