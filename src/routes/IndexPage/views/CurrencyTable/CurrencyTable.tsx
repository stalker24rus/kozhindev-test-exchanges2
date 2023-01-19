import React, { useEffect, useMemo, useState } from "react";
import { useTable, useGlobalFilter } from "react-table";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import Grid from "@steroidsjs/core/ui/list/Grid";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import {
  CURRENCY_TABLE_COLUMNS,
  MIN_ROW_NUMBER_FOR_VIEW,
} from "constants/currencies";
import { getCurrencyTable } from "reducers/currencies";

import "./CurrencyTable.scss";

function CurrencyTable(): JSX.Element {
  const bem = useBem("CurrencyTable");
  const tableData = useSelector(getCurrencyTable);

  const [expand, setExpand] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newData = expand
      ? tableData
      : tableData.slice(0, MIN_ROW_NUMBER_FOR_VIEW);
    setItems(newData);
  }, [expand, tableData]);

  const handleExpand = () => {
    setExpand(!expand);
  };

  console.log(items, tableData);

  const itemsMemo = useMemo(() => items, [items]);
  const itemWithIndex = React.useMemo(
    () => tableData.map((item, index) => ({ ...item, index })),
    [tableData]
  );

  return (
    <div className={bem.block()} key={tableData.length}>
      <div className={bem.element("table")}>
        <Grid
          listId={"currencyTable" + tableData.length}
          items={itemWithIndex}
          columns={columnsBasic}
          itemsIndexing
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
  },
  {
    label: "Название валюты",
    attribute: "name",
  },
  {
    label: "Курс к рублю",
    attribute: "RUB",
  },
  {
    label: "Курс к доллару",
    attribute: "USD",
  },
  {
    label: "Курс к Евро",
    attribute: "EUR",
  },
  {
    label: "Курс к Юаню",
    attribute: "CNY",
  },
];

// const {
//   getTableProps,
//   getTableBodyProps,
//   headerGroups,
//   rows,
//   state,
//   setGlobalFilter,
//   prepareRow,
// } = useTable({ columns, data: items }, useGlobalFilter);

// const { globalFilter } = state;

{
  /* <div className={bem.element("search-container")}>
        <input
          type="text"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>
      <table className={bem.element("table")} {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table> */
}
