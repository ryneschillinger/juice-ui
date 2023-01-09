import React, { useState } from "react";

/**Import core component (variable)*/
import MultiSelect from "../../core/Select/SelectMulti";
import { TOP_100_FILMS } from "./films";

export const DEMO = ({
  type,
  view,
  color,
  icon,
  fill,
  allowCreate,
  disabled,
  matchTargetWidth
}) => {

  const capitalizeWords = title => (
    title.toLowerCase().replace(/(^\w{1})|(\s{1}\w{1})/g, match => match.toUpperCase())
  );
  const newItemObjMap = {
    title: capitalizeWords,
    label: new Date().getFullYear(),
  };

  return (
    <MultiSelect
      type={type}
      view={view}
      color={color}
      items={TOP_100_FILMS}
      placeholder="Select a film..."
      fill={fill}
      allowCreate={allowCreate}
      disabled={disabled}
      matchTargetWidth={matchTargetWidth}
      newItemMap={newItemObjMap}
      // onActiveItemChange={() => doSomething()}
    />
  );
};
