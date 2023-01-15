import React from "react";
import { useBem } from "@steroidsjs/core/hooks";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import { ICurrencyHeaderProps } from "models";

import "./CurrencyHeader.scss";

export default function CurrencyHeader({
  currencyDateTime,
  onUpdateCurrency,
}: ICurrencyHeaderProps): JSX.Element {
  const bem = useBem("CurrencyHeader");

  const handleUpdateCurrency = () => {
    onUpdateCurrency();
  };
  return (
    <div className={bem.block()}>
      <div className={bem.element("title")}>
        Курсы валют на
        <span className={bem.element("date-time")}>{currencyDateTime}</span>
      </div>
      <div className={bem.element("update-button")}>
        <Button onClick={handleUpdateCurrency}>Обновить</Button>
      </div>
    </div>
  );
}
