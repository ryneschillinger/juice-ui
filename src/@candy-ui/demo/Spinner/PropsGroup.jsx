import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";
import Slider from "../../core/Slider";

const PropsGroup = props => {
  const {
    value,
    setValue,
    valueAmount,
    setValueAmount,
    size,
    setSize,
    margin
  } = props;
  return (
    <div>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={value ? "primary" : "default"}
          checked={value}
          label="Known value"
          onChange={() => setValue(value => !value)}
          margin={margin}
          fill
        />
        { value && 
          <Slider
            view="filled"
            color="default"
            labelStepSize={50}
            min={0}
            max={100}
            onChange={valueAmount => setValueAmount(valueAmount)}
            stepSize={5}
            showTrackFill={true}
            value={valueAmount}
            labelRenderer={valueAmount => valueAmount + '%'}
            className="demo-slider-nested"
          />
        }
        <Label style={{ marginTop: "17px" }}>
          Size
        </Label>
        <Slider
            view="filled"
            color="default"
            labelStepSize={50}
            min={0}
            max={200}
            onChange={value => setSize(value)}
            stepSize={5}
            showTrackFill={true}
            value={size}
            className="demo-slider"
          />
      </div>
    </div>
  );
};

export default PropsGroup;
