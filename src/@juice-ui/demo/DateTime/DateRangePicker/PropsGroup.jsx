import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../../core/CheckBox";

import StyleGrid from "../../styles/style.module.css";

const PropsGroup = props => {
  const {
    allowSingleDayRange,
    setSingleDayRange,
    shortcuts,
    setShowShortcuts,
    margin
  } = props;
  return (
    <div className={StyleGrid["demo-props"]}>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={shortcuts ? "primary" : "default"}
          checked={shortcuts}
          label="Shortcuts"
          onChange={() => setShowShortcuts(!shortcuts)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={allowSingleDayRange ? "primary" : "default"}
          checked={allowSingleDayRange}
          label="Single Day Range"
          onChange={() => setSingleDayRange(!allowSingleDayRange)}
          fill
          margin={margin}
        />
      </div>
    </div>
  );
};

export default PropsGroup;
