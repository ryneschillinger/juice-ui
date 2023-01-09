import React from "react";
import cx from "classnames";

import { Toast as ToastSource } from "@blueprintjs/core";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../styles/color.module.css";

import { ThemeContext } from "../ThemeContext";

export default function Toast(props) {
  const {
    type = "def",
    view = "filled",
    color = "default",
    children,
    className,
    usePortal,
    ...restProps
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ dark }) => (
        <ToastSource
          {...restProps}
          className={cx(
            Type[type],
            dark ? View[view + "-dark"] : View[view],
            Color[color],
            className
          )}
        />
      )}
    </ThemeContext.Consumer>
  );
}
