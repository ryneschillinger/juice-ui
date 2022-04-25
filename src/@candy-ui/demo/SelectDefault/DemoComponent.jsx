import React, { useState } from "react";

/**Import core component (variable)*/
import Select from "../../core/Select/Select";
import { TOP_100_FILMS } from "./films";

export const DEMO = ({
  type,
  view,
  color,
  icon,
  fill,
  centerAlign,
  disabled,
  filterable,
  matchTargetWidth
}) => {

  const [item, setItem] = useState();

  return (
    <Select
      type={type}
      view={view}
      color={color}
      icon={icon === true ? "film" : null}
      placeholder="Select a film..."
      fill={fill}
      centerAlign={centerAlign}
      filterable={filterable}
      disabled={disabled}
      matchTargetWidth={matchTargetWidth}
      items={TOP_100_FILMS}
      selectedItem={item}
      onItemSelect={setItem}
      // onActiveItemChange={() => doSomething()}
    />
  );
};
