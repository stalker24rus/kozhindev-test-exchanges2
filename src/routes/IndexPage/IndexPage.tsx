import * as React from "react";
import { useBem, useSelector } from "@steroidsjs/core/hooks";
import useDispatch from "@steroidsjs/core/hooks/useDispatch";

import CurrencyHeader from "./views/CurrencyHeader";
import CurrencyTable from "./views/CurrencyTable";

import { getCurrencyRates } from "actions/currencies";
import { getLoadingState } from "reducers/currencies";
import LoadingRing from "ui/LoadingRing";

import CurrencyConverter from "./views/CurrencyConverter";

import "./IndexPage.scss";

function IndexPage(): JSX.Element {
  const bem = useBem("IndexPage");
  const dispatch = useDispatch();

  const [firstRender, setFirstRender] = React.useState(true);

  const loading = useSelector(getLoadingState);

  React.useEffect(() => {
    if (firstRender) {
      dispatch(getCurrencyRates());
      setFirstRender(false);
    }
  }, [firstRender]);

  return (
    <div className={bem.block()}>
      <CurrencyHeader />
      <CurrencyTable />
      <CurrencyConverter />
      {loading && <LoadingRing />}
    </div>
  );
}

export default IndexPage;
