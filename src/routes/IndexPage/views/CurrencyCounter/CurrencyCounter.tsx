import React from "react";
import { useBem } from "@steroidsjs/core/hooks";
import { ICurrencyCounterProps } from "models";
import DropDownField from "./views/DropDownField";
import NumberField from "./views/NumberField";

import "./CurrencyCounter.scss";

export default function CurrencyCounter({
  items,
  onChange,
}: ICurrencyCounterProps): JSX.Element {
  const bem = useBem("CurrencyCounter");
  const { first, second } = items;

  const handleOnChange = () => {
    onChange();
  };

  return (
    <div className={bem.block()}>
      <div className={bem.element("item")}>
        <div className={bem.element("number-field")}>
          <NumberField
            value={first?.value | 0}
            step={"0.00001"}
            onChange={handleOnChange}
          />
        </div>

        <div className={bem.element("drop-down-field")}>
          {/* <DropDownField
            selected={first?.currency}
            items={options}
            onChange={handleOnChange}
          /> */}
        </div>
      </div>

      <div className={bem.element("item")}>
        <div className={bem.element("number-field")}>
          <NumberField
            value={second?.value | 0}
            step={"0.00001"}
            onChange={handleOnChange}
          />
        </div>
        <div className={bem.element("drop-down-field")}>
          {/* <DropDownField
            selected={second?.currency}
            items={options}
            onChange={handleOnChange}
          /> */}
        </div>
      </div>
    </div>
  );
}
