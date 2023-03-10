import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

const PropsGroup = props => {
  const { isIcon, setIcon, isTitle, setTitle, margin, isCustomWidth, setCustomWidth } = props;
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
          color={isTitle ? "primary" : "default"}
          checked={isTitle}
          label="Title"
          onChange={() => setTitle(!isTitle)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={isCustomWidth ? "primary" : "default"}
          checked={isCustomWidth}
          label="Width"
          onChange={() => setCustomWidth(!isCustomWidth)}
          fill
          margin={margin}
        />
      </div>
    </div>
  );
};

export default PropsGroup;
