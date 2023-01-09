import React from "react";
import cx from "classnames";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../../styles/color.module.css";

function Burger(props) {
  const {
    type = "default",
    view = "flat",
    color = "default",
    size,
    rounded = true,
    variant,
    transformBarBottom,
    transformBarTop,
    barHeight,
    isOpen = false,
    setOpen,
    className
  } = props;

  return (
    <div
      className={cx(
        Type["wrapper"],
        Type[type],
        View[view],
        Color[color],
        className
      )}
      style={{
        padding: (size/25) + 'rem',
        borderRadius: rounded && type !== 'circle' && barHeight*4
      }}
      onClick={setOpen && (() => setOpen(!isOpen))}
    >
      <div
        className={cx(
          Type["hamburger"],
          isOpen && Type["is-active"],
          Type["hamburger--" + variant]
        )}
        style={{ height: size + "px", width: size + "px" }}
      >
        <div className={Type["hamburger-bar"]} style={{ height: barHeight }} />
        <div className={Type["hamburger-bar--top"]} style={transformBarTop} />
        <div
          className={Type["hamburger-bar--bottom"]}
          style={transformBarBottom}
        />
      </div>
    </div>
  );
}

export default Burger;
