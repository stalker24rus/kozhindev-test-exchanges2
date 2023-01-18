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
  const [items, setItems] = useState(tableData);

  const columns = useMemo(() => CURRENCY_TABLE_COLUMNS, [
    CURRENCY_TABLE_COLUMNS,
  ]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    state,
    setGlobalFilter,
    prepareRow,
  } = useTable({ columns, data: items }, useGlobalFilter);

  const { globalFilter } = state;

  useEffect(() => {
    const newData = expand
      ? tableData
      : tableData.slice(0, MIN_ROW_NUMBER_FOR_VIEW);
    setItems(newData);
  }, [expand, tableData]);

  const handleExpand = () => {
    setExpand((prev) => !prev);
  };

  return (
    <div className={bem.block()}>
      <div className={bem.element("search-container")}>
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
      </table>

      <>
        <Grid
          style={{ height: "300px" }}
          listId="CurrencyTable"
          items={items}
          columns={columnsGrid}
        />
      </>
      <Button onClick={handleExpand}>
        {expand ? "Скрыть" : "Показать все"}
      </Button>
    </div>
  );
}

export const columnsGrid = [
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

export default CurrencyTable;
