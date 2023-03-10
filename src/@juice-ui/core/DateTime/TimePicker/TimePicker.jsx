import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

//import { Button as ButtonSource, Icon } from "@blueprintjs/core";
import {
  TimePicker as TimePickerSource,
  TimePrecision
} from "@blueprintjs/datetime";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../../styles/color.module.css";

import { ThemeContext } from "../../ThemeContext";

export default function TimePicker(props) {
  const {
    type = "def",
    view = "outlined",
    color = "default",
    precision,
    active,
    dense,
    className,
    icon,
    ...restProps
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <TimePickerSource
          {...restProps}
          className={cx(
            Type[type],
            dense && Type["dense"],
            isDark ? View[view + "-dark"] : View[view],
            Color[color],
            active && View["focused"],
            //anim && View["animation"],
            className
          )}
          precision={
            precision === "SECOND"
              ? TimePrecision.SECOND
              : precision === "MILLISECOND" && TimePrecision.MILLISECOND
          }
        />
      )}
    </ThemeContext.Consumer>
  );
}

TimePicker.propTypes = {
  /**
  `The type of the component.
  * Variants: `def` `dense` `segmented`
  * Default value (if undefined): `def` `
  */
  type: PropTypes.oneOf(["def", "dense"]),
  /**
  ` The view of the component.
  * Variants: `filled` `flat` `smooth` `outlined` `raised`
  * Default value (if undefined): `filled` `
  */
  view: PropTypes.oneOf(["filled", "smooth", "outlined", "raised"]),
  /**
  ` The color of the component.
  * Variants: `primary` `warning` `danger` `success` `primaryAlt` `warningAlt` `dangerAlt` `successAlt`
  * Default value (if undefined): `default` `
  */
  color: PropTypes.oneOf([
    "default",
    "primary",
    "warning",
    "danger",
    "success",
    "primary_alt",
    "warning_alt",
    "danger_alt",
    "success_alt"
  ])
};
