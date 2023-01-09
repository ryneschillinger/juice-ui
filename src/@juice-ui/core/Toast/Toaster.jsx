import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { Toaster as ToasterSource } from "@blueprintjs/core";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../styles/color.module.css";

import { ThemeContext } from "../ThemeContext";

export default function Toaster(props) {
  const {
    type = "def",
    view = "filled",
    color = "default",
    withoutClose,
    usePortal,
    className,
    setRef,
    ...restProps
  } = props;
  return (
    <ThemeContext.Consumer>
      {({ dark }) => (
        <ToasterSource
          {...restProps}
          className={cx(
            Type[type],
            dark ? View[view + "-dark"] : View[view],
            Color[color],
            withoutClose && Type["no-close"],
            className
          )}
          ref={ref => setRef(ref)}
        />
      )}
    </ThemeContext.Consumer>
  );
}

Toaster.propTypes = {
  /**
   ` The view of the component.
   * Variants: `filled` `smooth` `outlined` `raised`
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
  ]),
  /**
   * Show or not Close button
   */
  withoutClose: PropTypes.bool,
  /**
   *Position of Toaster within its container.
   */
  position: PropTypes.oneOf([
    "top",
    "top-left",
    "top-right",
    "bottom",
    "bottom-left",
    "bottom-right"
  ]),
  /**
   * Whether the toaster should be rendered into a new element attached to document.body.
   * If false, then positioning will be relative to the parent element.
   */
  usePortal: PropTypes.bool,
  /**
   *
   */
  setRef: PropTypes.func
};
