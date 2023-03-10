import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { DatePicker as DatePickerSource } from "@blueprintjs/datetime";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../../styles/color.module.css";

import { ThemeContext } from "../../ThemeContext";

export default function DatePicker(props) {
  const {
    type = "default",
    view = "flat",
    color = "default",
    active,
    dense,
    className,
    icon,
    ...restProps
  } = props;

  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <DatePickerSource
          {...restProps}
          className={cx(
            Type[type],
            dense && Type["dense"],
            isDark ? View[view + "-dark"] : View[view],
            Color[color],
            active && View["focused"],
            className
          )}
        />
      )}
    </ThemeContext.Consumer>
  );
}

DatePicker.propTypes = {
  /**
   `The type of the component.
   * Variants: `card` `action` `circle` `icon`
   * Default value (if undefined): `default` `
   */
  type: PropTypes.oneOf(["default", "card", "action", "circle", "icon"]),
  /**
   ` The view of the component.
   * Variants: `flat` `smooth` `outlined` `raised`
   * Default value (if undefined): `filled` `
   */
  view: PropTypes.oneOf(["filled", "flat", "smooth", "outlined", "raised"]),
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
  ]),
  /**
   * Click event handler.
   */
  onClick: PropTypes.func,
  /**
   * Whether this component should expand to fill its container.
   */
  fill: PropTypes.bool,
  /**
   * Name of a Blueprint UI icon (or an icon element) to render before the text.
   */
  icon: PropTypes.any,
  /**
   * Name of a Blueprint UI icon (or an icon element) to render after the text.
   */
  rightIcon: PropTypes.any,
  /**
   * If set to `true`, the button will display a centered loading spinner instead of its contents.
   * The width of the button is not affected by the value of this prop.
   */
  loading: PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool,
  /**
   * Dense size
   */
  dense: PropTypes.bool
};
