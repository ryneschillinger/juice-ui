import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

const PropsGroup = props => {
  const {
    inline,
    setInline,
    dis,
    setDis,
    help,
    setHelp,
    right,
    setRight,
    rtl,
    setRtl,
    margin
  } = props;
  return (
    <div>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={inline ? "primary" : "default"}
          checked={inline}
          label="Inline"
          onChange={() => setInline(!inline)}
          margin={margin}
          fill
        />
        <Checkbox
          type="dense"
          color={help ? "primary" : "default"}
          checked={help}
          label="Helper Text"
          onChange={() => setHelp(!help)}
          margin={margin}
          fill
        />
        <Checkbox
          type="dense"
          color={right ? "primary" : "default"}
          checked={right}
          label="Right Position"
          onChange={() => setRight(!right)}
          margin={margin}
          fill
        />
        <Checkbox
          type="dense"
          color={rtl ? "primary" : "default"}
          checked={rtl}
          label="RTL"
          onChange={() => setRtl(!rtl)}
          margin={margin}
          fill
        />
        <Checkbox
          type="dense"
          color={dis ? "primary" : "default"}
          checked={dis}
          label="Disabled"
          onChange={() => setDis(!dis)}
          margin={margin}
          fill
        />
      </div>
    </div>
  );
};

export default PropsGroup;
