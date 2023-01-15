import React from "react";
import { useBem } from "@steroidsjs/core/hooks";
import { IDropDownFieldProps } from "models";

import "./DropDownField.scss";

export default function DropDownField({
  selected,
  items,
  onChange,
}: IDropDownFieldProps): JSX.Element {
  const bem = useBem("DropDownField");

  const handleChange = (ev: Event | React.ChangeEvent<Element>) => {
    onChange(ev);
  };

  return (
    <select
      className={bem.block()}
      value={selected.label || ""}
      onChange={handleChange}
    >
      {items?.map((item) => (
        <option key={item.id}>{item.label}</option>
      ))}
    </select>
  );
}
