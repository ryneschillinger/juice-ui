import React from "react";

/**Import core component (variable)*/
import DateRangePicker from "../../../core/DateTime/DateRangePicker";

export const DEMO = props => {
  const {
    type,
    view,
    color,
    shortcuts,
    allowSingleDayRange
  } = props;
  return (
    <DateRangePicker
      type={type}
      view={view}
      color={color}
      shortcuts={shortcuts}
      allowSingleDayRange={allowSingleDayRange} />
  );
};
