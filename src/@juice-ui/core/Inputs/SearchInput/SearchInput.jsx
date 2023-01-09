import React, { useEffect } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

import { InputGroup, Icon, Button } from "@blueprintjs/core";

import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../../styles/color.module.css";

import { ThemeContext } from "../../ThemeContext";

/** 
  __Component 'SearchInput'__
**/

export default function SearchInput(props) {
  const {
    type = "def",
    view = "smooth",
    color = "primary",
    className,
    placeholder,
    clearButton,
    clearIcon,
    value,
    fill,
    onSearch,
    segmented,
    ...restProps
  } = props;

  const [isVal, setVal] = React.useState(value); //component value
  const [isActive, setActive] = React.useState(false); //component active state (focused)
  const [isFilled, setFilled] = React.useState(isVal ? true : false); //component filled state (unfocused and has value)
  // add active class and placeholder
  const handleFocus = e => {
    setActive(true);
    setFilled(false);
  };

  // remove active class and placeholder
  const handleBlur = e => {
    setActive(false);
    setFilled(e.target.value ? true : false);
  };

  const handleClear = e => {
    setVal("");
    onSearch("");
    setActive(false);
    setFilled(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      isVal && isVal.length > 0 && onSearch(isVal)
    }, 500);
    return () => clearTimeout(timer);
  }, [isVal]);

  const handleChange = e => {
    setVal(e.target.value);
  };

  return (
    <ThemeContext.Consumer>
      {({ dark }) => (
        <InputGroup
          {...restProps}
          type={"text"}
          value={isVal || ``}
          className={cx(
            Type[type],
            fill && Type["fill"],
            View[type],
            isActive && View["active"],
            isFilled && View["isFilled"],
            Color[color],
            segmented && Type[`segmented-${segmented}`],
            clearButton && Type["clearButton"],
            clearButton && View["clearButton"],
            /*Dark mode*/
            dark ? View[view + "-dark"] : View[view],
            className
          )}
          placeholder={isActive ? null : placeholder}
          leftIcon={
            <Button
              icon={
                <Icon icon={"search"} iconSize={type === "dense" ? 16 : 20} />
              }
              minimal={true}
              className={View["searchButton"]}
            />
          }
          onFocus={e => handleFocus(e)}
          onBlur={e => handleBlur(e)}
          onChange={e => handleChange(e)}
          rightElement={
            <Button
              icon={
                isVal && (
                  <Icon
                    icon={clearIcon || "cross"}
                    iconSize={type === "dense" ? 16 : 20}
                  />
                )
              }
              minimal={true}
              className={cx(
                isVal
                  ? View["clearButton"]
                  : type === "def" && View["voiceSearch"]
              )}
              onClick={e => handleClear(e)}
            />
          }
        />
      )}
    </ThemeContext.Consumer>
  );
}

SearchInput.propTypes = {
  /**
   `The type of the component.
   * Variants: `dense` 
   * Default value (if undefined): `def` `
   */
  type: PropTypes.oneOf(["def", "dense"]),
  /**
   ` The view of the component.
   * Variants: `outlined` `raised`
   * Default value (if undefined): `smooth` `
   */
  view: PropTypes.oneOf(["smooth", "outlined", "raised", "filled"]),
  /**
   * Placeholder text in the absence of any value.
   */
  placeholder: PropTypes.string,
  /**
   * Form value of the input
   */
  value: PropTypes.string,
  /**Your custom search function */
  onSearch: PropTypes.func,
  /**If `true`, the component will take up the full width of its container. */
  fill: PropTypes.bool
};
