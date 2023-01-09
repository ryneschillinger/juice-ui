import React from "react";

/**Import core component (variable)*/
import Counter from "../../core/Counter";

export const DEMO = props => {
  const { type, view, color, dis, vertical, dense } = props;

  return (
    <Counter
      type={type}
      view={view}
      rightColor={color}
      value={0}
      leftIcon={vertical ? "chevron-down" : "minus"}
      rightIcon={vertical ? "chevron-up" : "plus"}
      disabled={dis}
      dense={dense}
      vertical={vertical}
    />
  );
};
