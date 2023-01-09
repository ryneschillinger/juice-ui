import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { Drawer as DrawerSource } from "@blueprintjs/core";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../styles/color.module.css";

import { ThemeContext } from "../ThemeContext";

export default function Drawer(props) {
  const {
    type = "default",
    view = "smooth",
    color = "default",
    position = "right",
    className,
    size,
    canClickOutside,
    escapeKeyToClose,
    showCloseButton,
    ...restProps
  } = props;

  let _size = size ? size : "50%";

  switch(size) {
    case "small":
      _size = "360px"
      break;
    case "default":
      _size = "50%"
      break;
    case "large":
      _size = "90%"
      break;
    default:
      _size = _size;
  };

  return (
    <ThemeContext.Consumer>
      {({ dark }) => (
        <DrawerSource
          {...restProps}
          className={cx(
            Type[type],
            Type[position],
            dark ? View[view + "-dark"] : View[view],
            Color[color],
            className
          )}
          position={position}
          size={_size}
          canOutsideClickClose={canClickOutside}
          canEscapeKeyClose={escapeKeyToClose}
          isCloseButtonShown={showCloseButton}
        />
      )}
    </ThemeContext.Consumer>
  );
}

Drawer.propTypes = {
  /**
   `The type of the component.
   * Variants: `square` `action` `fab` `icon`
   * Default value (if undefined): `default` `
   */
  type: PropTypes.oneOf(["default", "square", "action", "fab", "icon"]),
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
