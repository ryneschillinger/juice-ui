import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

import StyleGrid from "../styles/style.module.css";

const PropsGroup = props => {
  const {
    icon,
    setIcon,
    fill,
    setFill,
    centerAlign,
    setCenterAlign,
    margin,
    filterable,
    setFilterable,
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
          color={icon ? "primary" : "default"}
          checked={icon}
          label="Icon"
          onChange={() => setIcon(!icon)}
          fill
          margin={margin}
        />
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
          color={fill && centerAlign ? "primary" : "default"}
          checked={fill && centerAlign}
          label="Center Align"
          onChange={() => setCenterAlign(!centerAlign)}
          fill
          margin={margin}
          disabled={!fill}
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
          color={filterable ? "primary" : "default"}
          checked={filterable}
          label="Filterable"
          onChange={() => setFilterable(!filterable)}
          fill
          margin={margin}
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
      </div>
    </div>
  );
};

export default PropsGroup;
