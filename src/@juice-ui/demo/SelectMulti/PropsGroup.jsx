import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

import StyleGrid from "../styles/style.module.css";

const PropsGroup = props => {
  const {
    fill,
    setFill,
    allowCreate,
    setAllowCreate,
    margin,
    disabled,
    setDisabled,
    matchTargetWidth,
    setMatchTargetWidth
  } = props;
  return (
    <div className={StyleGrid["demo-props"]}>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={fill ? "primary" : "default"}
          checked={fill}
          label="Fill Width"
          onChange={() => setFill(!fill)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={matchTargetWidth ? "primary" : "default"}
          checked={matchTargetWidth}
          label="Match Target Width"
          onChange={() => setMatchTargetWidth(!matchTargetWidth)}
          fill
          margin={margin}
          style={{
            lineHeight: 1.1
          }}
        />
        <Checkbox
          type="dense"
          color={disabled ? "primary" : "default"}
          checked={disabled}
          label="Disabled"
          onChange={() => setDisabled(!disabled)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={allowCreate ? "primary" : "default"}
          checked={allowCreate}
          label="Allow Creating New Items"
          onChange={() => setAllowCreate(!allowCreate)}
          fill
          margin={margin}
          style={{
            lineHeight: 1.1
          }}
        />
      </div>
    </div>
  );
};

export default PropsGroup;
