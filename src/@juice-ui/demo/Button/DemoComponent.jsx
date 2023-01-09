import React from "react";

/**Import core component (variable)*/
import Button from "../../core/Button";

export const DEMO = props => {
  const {
    type,
    view,
    color,
    fill,
    icon,
    rightIcon,
    dis,
    isLoad,
    dense
  } = props;
  return (
    <Button
      /*style={{ margin: "auto" }}*/
      type={type}
      view={view}
      color={color}
      fill={type !== "card" && fill}
      text={type !== "circle" && type !== "icon" && type[0].toUpperCase() + type.substring(1)}
      icon={
        type === "circle" || type === "icon" || icon === true ? "plus" : null
      }
      rightIcon={
        type !== "circle" &&
        type !== "card" &&
        type !== "icon" &&
        rightIcon === true
          ? "cross"
          : null
      }
      disabled={dis}
      loading={isLoad}
      dense={dense}
    />
  );
};
