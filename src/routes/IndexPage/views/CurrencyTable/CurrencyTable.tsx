import React, { useEffect, useMemo, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import Grid from "@steroidsjs/core/ui/list/Grid";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import {
  CURRENCY_TABLE_COLUMNS,
  MIN_ROW_NUMBER_FOR_VIEW,
} from "constants/currencies";
import { getCurrencyRates } from "reducers/currencies";

import "./CurrencyTable.scss";
import createTable from "utils/createTable";

const title = ["RUB", "USD", "EUR", "CNY"];

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

function CurrencyTable(): JSX.Element {
  const bem = useBem("CurrencyTable");

  const rates = useSelector(getCurrencyRates);
  const table = createTable(title, rates) || [];

  const [expand, setExpand] = useState(false);
  const [items, setItems] = useState([...table]);

  useEffect(() => {
    if (expand) {
      setItems([...table]);
    } else {
      setItems([...table.slice(0, MIN_ROW_NUMBER_FOR_VIEW)]);
    }
  }, [expand, rates]);

  const handleExpand = React.useCallback(() => {
    setExpand(!expand);
  }, [table]);

  const memoItems = React.useMemo(() => items, [items]);

  return (
    <div className={bem.block()} key={items.length}>
      <div className={bem.element("table")}>
        <Grid
          listId={`currencyTable${items.length}`}
          items={memoItems}
          columns={columnsBasic}
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

export const columnsBasic = [
  {
    label: "Код валюты (ISO 4217)",
    attribute: "code",
    // sortable: true,
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
    // sortable: true,
  },
];
