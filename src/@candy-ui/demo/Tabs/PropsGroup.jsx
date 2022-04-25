import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

const PropsGroup = props => {
  const {
    isIcon,
    setIcon,
    fill,
    setFill,
    margin,
    isVertical,
    setVertical
  } = props;
  return (
    <div>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={isIcon ? "primary" : "default"}
          checked={isIcon}
          label="Icon"
          onChange={() => setIcon(!isIcon)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={fill ? "primary" : "default"}
          checked={fill}
          label="Fill"
          onChange={() => setFill(!fill)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={isVertical ? "primary" : "default"}
          checked={isVertical}
          label="Vertical"
          onChange={() => setVertical(!isVertical)}
          fill
          margin={margin}
        />
      </div>
    </div>
  );
};

export default PropsGroup;
