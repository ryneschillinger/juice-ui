import React from "react";

/**Import core component (variable)*/
import Switch from "../../core/Switch";

export const DEMO = props => {
  const {
    type,
    view,
    color,
    isDemo,
    rtl,
    setDemo,
    dis,
    help,
    right,
    fill,
    iOS
  } = props;
  return (
    <Switch
      type={type}
      view={view}
      color={color}
      checked={isDemo}
      label={rtl ? "تبديل التسمية" : "Switch Label"}
      onChange={() => setDemo(!isDemo)}
      disabled={dis}
      helperText={
        help ? (rtl ? "تسمية فرعية اختيارية" : "Optional subcaption") : null
      }
      rtl={rtl}
      rightPosition={right}
      fill={fill}
      iStyle={iOS}
    />
  );
};
