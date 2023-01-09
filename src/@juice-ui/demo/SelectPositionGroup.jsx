import React, { useCallback } from "react";

import { RadioGroup } from "@blueprintjs/core";
import Radio from "../core/Radio";

const SelectPositionGroup = props => {
  const { position, setPosition, positions } = props;
  const handleClick = useCallback(e => setPosition(e.target.value), [setPosition]);

  return (
    <RadioGroup
      inline={false}
      label="Select position:"
      name="Position group"
      onChange={() => null}
      selectedValue={position}
      className="demo-position-group"
    >
      {positions.map(([label, value], i) => (
        <Radio
          type="dense"
          color={value === position ? "primary" : "default"}
          label={label}
          value={value}
          onClick={handleClick}
          alignIndicator="left"
          key={i}
          checked={value === position && true} //important
          style={{ margin: "2px" }}
          onChange={() => null}
          fill
        />
      ))}
    </RadioGroup>
  );
};

export default SelectPositionGroup;
