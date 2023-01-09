import React from "react";
import Burger from "./BaseBurger";

export const Squeeze = props => {
  const { size, barHeight, offset, isOpen, ...rest } = props;

  const transformBarBottom = {
    height: barHeight,
    bottom: isOpen ? size / 2 - barHeight / 2 : offset,
    transform: isOpen ? "rotate(-45deg)" : "none",
    transition: isOpen
      ? "bottom 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)"
      : "bottom 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  };
  const transformBarTop = {
    height: barHeight,
    top: isOpen ? size / 2 - barHeight / 2 : offset,
    transform: isOpen ? "rotate(45deg)" : "none",
    transition: isOpen
      ? "top 0.075s ease, transform 0.075s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1)"
      : "top 0.075s 0.12s ease, transform 0.075s cubic-bezier(0.55, 0.055, 0.675, 0.19)"
  };

  return (
    <Burger
      {...rest}
      transformBarBottom={transformBarBottom}
      transformBarTop={transformBarTop}
      size={size}
      offset={offset}
      barHeight={barHeight}
      variant="squeeze"
      isOpen={isOpen}
    />
  );
};
export default Squeeze;
