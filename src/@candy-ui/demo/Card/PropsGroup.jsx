import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";
import Slider from "../../core/Slider";

const PropsGroup = props => {
  const {
    isInter,
    setInter,
    margin,
    isCustomWidth,
    setCustomWidth,
    elevation,
    setElevation
  } = props;
  return (
    <div>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={isCustomWidth ? "primary" : "default"}
          checked={isCustomWidth}
          label="Width"
          onChange={() => setCustomWidth(!isCustomWidth)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={isInter ? "primary" : "default"}
          checked={isInter}
          label="Interactive"
          onChange={() => setInter(!isInter)}
          fill
          margin={margin}
        />
        <Label
          style={{
            fontSize: `var(--font_size_body_small)`,
            letterSpacing: `var(--letter_spacing_body_small)`,
            fontWeight: 200,
            height: '1.75rem',
            lineHeight: '1.75rem',
            margin: '0 0 -1rem 0.45rem'
          }}
        >Elevation:</Label>
        <Slider
          view="filled"
          color="default"
          labelStepSize={1}
          min={0}
          max={4}
          onChange={value => setElevation(value)}
          stepSize={1}
          showTrackFill={true}
          value={elevation}
          labelRenderer={value => value}
          className="demo-slider"
        />
      </div>
    </div>
  );
};

export default PropsGroup;
