import React, { useEffect, useState } from "react";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import Grid from "@steroidsjs/core/ui/list/Grid";
import Button from "@steroidsjs/core/ui/form/Button/Button";
import {
  TABLE_COLUMNS,
  MIN_AMOUNT_ROW_FOR_VIEW,
  TABLE_SEARCH_FORM,
} from "constants/currencies";
import { getCurrencyRates } from "reducers/currencies";
import getCurrencyTable from "utils/getCurrencyTable";
import { ICurrencyTableRecord } from "models";

import "./CurrencyTable.scss";

function CurrencyTable(): JSX.Element {
  const bem = useBem("CurrencyTable");
  const [table, setCurrencyTable] = useState([]);
  const [expand, setExpand] = useState(false);

  const rates = useSelector(getCurrencyRates);
  const sourceTable: ICurrencyTableRecord[] =
    React.useMemo(() => getCurrencyTable(rates), [rates]) || [];

  const handleExpand = React.useCallback(() => {
    setExpand(!expand);
  }, [table]);

  useEffect(() => {
    if (expand) {
      setCurrencyTable(sourceTable);
    } else {
      setCurrencyTable(sourceTable.slice(0, MIN_AMOUNT_ROW_FOR_VIEW));
    }
  }, [expand, sourceTable]);

  const memoTable = React.useMemo(() => table, [table]);

  return (
    <div className={bem.block()} key={table.length}>
      <div className={bem.element("table")}>
        <Grid
          listId={`currencyTable${table.length}`}
          items={memoTable}
          columns={TABLE_COLUMNS}
          searchForm={TABLE_SEARCH_FORM}
        />
        <Button onClick={handleExpand}>
          {expand ? "Скрыть" : "Показать все"}
        </Button>
      </div>
    </div>
  );
}

export default CurrencyTable;
