import useApplication from "@steroidsjs/core/hooks/useApplication";
import HttpComponent from "@steroidsjs/core/components/HttpComponent";
import LocaleComponent from "@steroidsjs/core/components/LocaleComponent";

import "style/index.scss";
// import { store } from "reducers";
// import currencies from "reducers/currencies";

export default function Application(props) {
  const { config } = props;
  const { renderApplication } = useApplication({
    reducers: require("./reducers").default, //require("@steroidsjs/core/reducers").default,
    routes: () => require("routes").default,
    layoutView: () => require("shared/Layout").default,
    screen: true,
    components: {
      locale: LocaleComponent,
      http: HttpComponent,
      //   store: {
      //     reducers: require("../src/reducers/index").default,
      //     // ...config?.components?.store,
      //   },
    },
    onInit: ({ ui }) => {
      ui.addViews(require("./ui/bootstrap").default);
      ui.addFields(require("@steroidsjs/core/ui/form").default);
      ui.addFormatters(require("@steroidsjs/core/ui/format").default);
      ui.addIcons(require("./icons").default);
    },
  });

  return renderApplication();
}
