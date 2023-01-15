import React, { ReactEventHandler, useEffect, useState } from "react";
import { useBem } from "@steroidsjs/core/hooks";

import "./NumberField.scss";
import { INumberFieldProps } from "models";

export default function NumberField({
  name,
  min,
  max,
  step,
  value,
  onChange,
}: INumberFieldProps): JSX.Element {
  const bem = useBem("NumberField");

  const [val, setVal] = useState(value);

  useEffect(() => {
    let tempVal = value;

    // tempVal = limitNumber(tempVal, min, max);

    setVal(tempVal);
  }, [value]);

  const handleChange = (ev) => {
    const val = ev.target.value;
    let tempVal = val;

    // tempVal = limitNumber(tempVal, min, max);

    setVal(tempVal);
    onChange(ev);
  };

  return (
    <input
      className={bem.block()}
      name={name || ""}
      type="number"
      min={min || undefined}
      max={max || undefined}
      step={step || undefined}
      value={val}
      onChange={handleChange}
    ></input>
  );
}

NumberField.defaultProps = {
  onChange: () => {},
};

export function limitNumber(
  num: number | string,
  min: number | undefined,
  max: number | undefined
) {
  const parsed = typeof num === "number" ? num : parseFloat(num);
  const result = Math.min(Math.max(parsed, min | parsed), max | parsed);
  return result;
}
