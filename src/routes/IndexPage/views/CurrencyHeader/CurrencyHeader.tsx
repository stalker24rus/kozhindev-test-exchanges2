import React from "react";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import useDispatch from "@steroidsjs/core/hooks/useDispatch";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import { getLastUpdateDT } from "reducers/currencies";

import "./CurrencyHeader.scss";
import { getCurrencyRates } from "actions/currencies";

export default function CurrencyHeader(): JSX.Element {
  const bem = useBem("CurrencyHeader");
  const dateTime = useSelector(getLastUpdateDT);
  const dispatch = useDispatch();

  const handleUpdateCurrency = React.useCallback(() => {
    dispatch(getCurrencyRates());
  }, [dispatch]);

  return (
    <div className={bem.block()}>
      <div className={bem.element("title")}>
        Курсы валют на
        <span className={bem.element("date-time")}>{dateTime}</span>
      </div>
      <div className={bem.element("update-button")}>
        <Button onClick={handleUpdateCurrency}>Обновить</Button>
      </div>
    </div>
  );
}
