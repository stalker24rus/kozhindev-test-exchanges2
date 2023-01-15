import React from "react";
import { useBem } from "@steroidsjs/core/hooks";

import "./LoadingRing.scss";

function LoadingRing() {
  const bem = useBem("LoadingRing");
  return (
    <div className={bem.block()}>
      <div className={bem.element("data")}>
        <div className={bem.element("frame")}>
          <div className={bem.element("frame-center")}>
            <div className={bem.element("loader")}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingRing;
