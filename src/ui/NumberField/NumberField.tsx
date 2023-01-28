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
      console.log("newValue", newValue);
      onChange(newValue);
    },
    [onChange]
  );

  const memoValue = React.useMemo(() => value.replace(".", ","), [value]);
  console.log(memoValue);
  return (
    <div className={bem.block()}>
      <input
        type="number"
        className={bem.element("input")}
        value={memoValue}
        onChange={handleChange}
      />
    </div>
  );
}
