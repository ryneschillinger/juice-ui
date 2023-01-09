import React from "react";
import cx from "classnames";

import { Popover as PopoverSource } from "@blueprintjs/core";

import Type from "./_type.module.css";
import { ThemeContext } from "../ThemeContext";

/** 
  __Component 'Popover'__
**/

export default function Popover(props) {
  const { menu, popoverClassName, ...restProps } = props;

  return (
    <ThemeContext.Consumer>
      {({ dark }) => (
        <PopoverSource
          {...restProps}
          popoverClassName={cx(menu && Type["menu"], popoverClassName)}
        />
      )}
    </ThemeContext.Consumer>
  );
}
