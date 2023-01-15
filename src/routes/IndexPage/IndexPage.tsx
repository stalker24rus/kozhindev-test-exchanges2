import * as React from "react";
import { connect } from "react-redux";

import { useBem } from "@steroidsjs/core/hooks";
import CurrencyHeader from "./views/CurrencyHeader";
import CurrencyCounter from "./views/CurrencyCounter";
import { ICurrencyCounterItems } from "models";
import CurrencyTable from "./views/CurrencyTable";
import { TEST_DATA } from "./views/CurrencyTable/constants";

import "./IndexPage.scss";
import { getCurrencyRates } from "actions/currencies";

interface StateProps {}

interface DispatchProps {
  onGetCurrencies: Function;
}

interface OwnProps {}

type Props = StateProps & DispatchProps & OwnProps;

function mapStateToProps(store) {
  return {};
}

function mapDispatchToProps() {
  return {
    onGetCurrencies: getCurrencyRates,
  };
}

function IndexPage(props: Props): JSX.Element {
  const bem = useBem("IndexPage");
  const { onGetCurrencies } = props;

  const currentdate = new Date();
  const datetime =
    currentdate.getDate() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();

  const items = {
    first: {
      value: 1.63463,
      currency: { id: 0, label: "Российский рубль" },
    },
    second: {
      value: 0.1012,
      currency: { id: 0, label: "Доллар США" },
    },
  };

  const handleGetCurrencies = () => {
    onGetCurrencies();
  };

  return (
    <div className={bem.block()}>
      <CurrencyHeader
        currencyDateTime={datetime}
        onUpdateCurrency={handleGetCurrencies}
      />
      {/* <CurrencyCounter items={items} onChange={() => console.log("updated")} /> */}
      <CurrencyTable items={TEST_DATA} />
    </div>
  );
}

export default connect<StateProps, DispatchProps, OwnProps>(
  mapStateToProps,
  mapDispatchToProps()
)(IndexPage);
