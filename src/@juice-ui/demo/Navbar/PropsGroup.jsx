import React from "react";

import { Label } from "@blueprintjs/core";
import Radio from "../../core/Radio";

const PropsGroup = props => {
  const { navType, setNavType, margin } = props;
  return (
    <div>
      <Label>Select format:</Label>
      <div className="demo-props">
        <Radio
          type="dense"
          color={navType === "menu" ? "primary" : "default"}
          checked={navType === "menu"}
          label="Menu"
          onChange={() => setNavType("menu")}
          fill
          margin={margin}
        />
        <Radio
          type="dense"
          color={navType === "logo" ? "primary" : "default"}
          checked={navType === "logo"}
          label="Logo"
          onChange={() => setNavType("logo")}
          fill
          margin={margin}
        />
      </div>
    </div>
  );
};

export default PropsGroup;
