import React, { useEffect, useState } from "react";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import Grid from "@steroidsjs/core/ui/list/Grid";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import { MIN_ROW_NUMBER_FOR_VIEW } from "constants/currencies";
import { getCurrencyRates } from "reducers/currencies";
import createCurrencyTable from "utils/createCurrencyTable";

import "./CurrencyTable.scss";

const searchForm = {
  layout: "table",
  fields: [
    {
      attribute: "code",
      placeholder: "Код",
      size: "Small",
    },
    {
      attribute: "name",
      placeholder: "Название",
      size: "Small",
    },
    {
      attribute: "RUB",
      placeholder: "RUB",
      size: "Small",
    },
    {
      attribute: "USD",
      placeholder: "USD",
      size: "Small",
    },
    {
      attribute: "EUR",
      placeholder: "EUR",
      size: "Small",
    },
    {
      attribute: "CNY",
      placeholder: "CNY",
      size: "Small",
    },
  ],
};

const columns = [
  {
    label: "Код валюты (ISO 4217)",
    attribute: "code",
    // FIXME Uncaught Error: Not found icon with name "long-arrow-alt-down"
    //sortable: true,
  },
  {
    label: "Название валюты",
    attribute: "name",
    // sortable: true,
  },
  {
    label: "Курс к рублю",
    attribute: "RUB",
    // sortable: true,
  },
  {
    label: "Курс к доллару",
    attribute: "USD",
    // sortable: true,
  },
  {
    label: "Курс к Евро",
    attribute: "EUR",
    // sortable: true,
  },
  {
    label: "Курс к Юаню",
    attribute: "CNY",
    //sortable: true,
  },
];

function CurrencyTable(): JSX.Element {
  const bem = useBem("CurrencyTable");

  const rates = useSelector(getCurrencyRates);
  const currencyTableSource = createCurrencyTable(rates) || [];

  const [currencyTable, setCurrencyTable] = useState([...currencyTableSource]);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    if (expand) {
      setCurrencyTable(currencyTableSource);
    } else {
      setCurrencyTable(currencyTableSource.slice(0, MIN_ROW_NUMBER_FOR_VIEW));
    }
  }, [expand, rates]);

  const handleExpand = React.useCallback(() => {
    setExpand(!expand);
  }, [currencyTableSource]);

  const memoCurrencyTable = React.useMemo(() => currencyTable, [currencyTable]);

  return (
    <div className={bem.block()} key={currencyTable.length}>
      <div className={bem.element("table")}>
        <Grid
          listId={`currencyTable${currencyTable.length}`}
          items={memoCurrencyTable}
          columns={columns}
          searchForm={searchForm}
        />
        <Button onClick={handleExpand}>
          {expand ? "Скрыть" : "Показать все"}
        </Button>
      </div>
    </div>
  );
}

export default CurrencyTable;

export const itemsBasic = [
  {
    CNY: "1.82489",
    EUR: "0.25098",
    RUB: "17.96885",
    USD: "0.27225",
    code: "AED",
    id: 1,
    name: "Дирхам",
  },
  {
    CNY: "0.01698",
    EUR: "0.00234",
    RUB: "0.16723",
    USD: "0.00253",
    code: "AMD",
    id: 2,
    name: "Драхм",
  },
  {
    id: 3,
    code: "CNY",
    name: "Китайский юань",
    RUB: "9.84653",
    USD: "0.14919",
    EUR: "0.13753",
    CNY: 1,
  },
];
