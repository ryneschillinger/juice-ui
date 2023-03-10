import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

const PropsGroup = props => {
  const {
    isIcon,
    setIcon,
    margin
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
      </div>
    </div>
  );
};

export default PropsGroup;
