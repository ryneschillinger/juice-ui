import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";
import Slider from "../../core/Slider";

const PropsGroup = props => {
  const {
    isIcon,
    setIcon,
    isAction,
    setAction,
    isClose,
    setClose,
    usePortal,
    setUsePortal,
    margin,
    timeout,
    setTimeout
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
          color={isAction ? "primary" : "default"}
          checked={isAction}
          label="Action"
          onChange={() => setAction(!isAction)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={isClose ? "primary" : "default"}
          checked={isClose}
          label="Close button"
          onChange={() => setClose(!isClose)}
          fill
          margin={margin}
        />
        <Slider
          view="filled"
          color="default"
          labelStepSize={5000}
          min={0}
          max={10000}
          onChange={value => setTimeout(value)}
          stepSize={500}
          showTrackFill={true}
          value={timeout}
          labelRenderer={value => value/1000 + 'sec'}
          className="demo-slider"
        />
      </div>
    </div>
  );
};

export default PropsGroup;
