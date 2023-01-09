import React from "react";

/**Import core component (variable)*/
import Button from "../../core/Button";
import Tooltip from "../../core/Tooltip";

export const DEMO = props => {
  const { color, pos, isOpen } = props;
  return (
    <Tooltip
      color={color}
      content="Tooltip example"
      position={pos}
      isOpen={isOpen ? isOpen : null}
    >
      <Button view="outlined" color="primary" text="Hover me" />
    </Tooltip>
  );
};
