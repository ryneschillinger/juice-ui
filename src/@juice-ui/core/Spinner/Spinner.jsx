import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { Spinner as SpinnerSource } from "@blueprintjs/core";

import View from "./_view.module.css";
import Color from "../../styles/color.module.css";

import { ThemeContext } from "../ThemeContext";

/** 
  __Component 'Spinner'__
**/

const Spinner = React.forwardRef(function Button(props, ref) {
  const { view = "smooth", color = "default", className, ...restProps } = props;
  //size, tagName, value

  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <SpinnerSource
          {...restProps}
          ref={ref}
          className={cx(View[view], Color[color], className)}
        />
      )}
    </ThemeContext.Consumer>
  );
});

Spinner.propTypes = {
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
   * If set to `true`, the button will display a centered loading spinner instead of its contents.
   * The width of the button is not affected by the value of this prop.
   */
  loading: PropTypes.bool,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool
};

export default Spinner;
