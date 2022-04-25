import React from "react";

/**Import core component (variable)*/
import Button from "../../core/Button";
import Badge from "../../core/Badge";

export const DEMO = ({ view, color, isLeft, isBottom, dense, isHide, isDot, ...props }) => {
  return (
    <>
      <Badge
        {...props}
        view={view}
        color={color}
        value="New"
        hide={isHide}
        dot={isDot}
        dense={dense}
        bottom={isBottom}
        left={isLeft}
      >
        <Button text="Button" view="outlined" />
      </Badge>
      <Badge
        {...props}
        view={view}
        color={color}
        value="9"
        hide={isHide}
        dot={isDot}
        dense={dense}
        bottom={isBottom}
        left={isLeft}
        style={{ marginLeft: "4rem" }}
      >
        <Button text="A" type="circle" dense view="filled" />
      </Badge>
    </>
  );
};
