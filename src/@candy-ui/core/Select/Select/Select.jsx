import React, { useRef } from "react";
import cx from "classnames";
import PropTypes from "prop-types";

/**Import core component (variable)*/
import { Select as SelectSource } from "@blueprintjs/select";
import { Icon } from "@blueprintjs/core";
import Button from "../../../core/Button";
import Menu from "../../../core/Menu";
import MenuItem from "../../../core/Menu/MenuItem";
import View from "./_view.module.css";
import Color from "../../../styles/color.module.css";
import SearchType from "../../../core/Inputs/SearchInput/_type.module.css";
import SearchView from "../../../core/Inputs/SearchInput/_view.module.css";
import MenuType from "../../../core/Menu/_type.module.css";
import MenuView from "../../../core/Menu/_view.module.css";
import { ThemeContext } from "../../ThemeContext";

export default function Select(props) {
  const {
    type = "def",
    view = "filled",
    color = "default",
    disabled = "false",
    icon,
    fill,
    centerAlign,
    customWidth,
    matchTargetWidth,
    items,
    placeholder,
    selectedItem,
    onItemSelect,
    onActiveItemChange,
    filterable,
    ...restProps
  } = props;

  const renderItem  = (
    item,
    { handleClick, modifiers, query }
  ) => {
    if (!modifiers.matchesPredicate) {
      return null;
    }
    const text = `${item.id}. ${item.title}`;
    return (
      <MenuItem
        type={type}
        view={view}
        color={color}
        active={modifiers.active}
        disabled={modifiers.disabled}
        label={item.label ? item.label.toString() : null}
        key={item.id}
        onClick={handleClick}
        text={highlightText(text, query)}
      />
    );
  };
  
  const renderMenuList = ({ items, itemsParentRef, query, renderItem }) => {
    const renderedItems = items.map(renderItem).filter(item => item != null);
    return (
      <Menu
        type={type}
        view={view === "outlined" ? "raised" : view}
        color={color}
        ulRef={itemsParentRef}
        disabled={disabled}
        style={{ maxHeight: "390px", overflow: "auto" }}
      >
        { renderedItems.length < 1 && 
          <MenuItem
            type={type}
            view={view}
            color={color}
            disabled={true}
            text="No results."
          />
        }
        {renderedItems}
      </Menu>
    );
  };
  
  const filterItem = (query, item) => {
    return (
      `${item.id}. ${item.title.toLowerCase()} ${item.label}`.indexOf(
        query.toLowerCase()
      ) >= 0
    );
  };
  
  const highlightText = (text, query) => {
    let lastIndex = 0;
    const words = query
      .split(/\s+/)
      .filter((word) => word.length > 0)
      .map(escapeRegExpChars);
    if (words.length === 0) {
      return [text];
    }
    const regexp = new RegExp(words.join("|"), "gi");
    const tokens = [];
    while (true) {
      const match = regexp.exec(text);
      if (!match) {
        break;
      }
      const length = match[0].length;
      const before = text.slice(lastIndex, regexp.lastIndex - length);
      if (before.length > 0) {
        tokens.push(before);
      }
      lastIndex = regexp.lastIndex;
      tokens.push(<strong key={lastIndex}>{match[0]}</strong>);
    }
    const rest = text.slice(lastIndex);
    if (rest.length > 0) {
      tokens.push(rest);
    }
    return tokens;
  }
  
  const escapeRegExpChars = text => {
    return text.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
  }

  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <SelectSource
          type={type === "dense" ? "dense" : "default"}
          view={view}
          color={color}
          fill={fill}
          disabled={disabled}
          filterable={filterable}
          matchTargetWidth={matchTargetWidth}
          itemPredicate={filterItem}
          itemRenderer={renderItem}
          itemListRenderer={renderMenuList}
          onItemSelect={onItemSelect}
          onActiveItemChange={onActiveItemChange}
          items={items}
          inputProps={{
            fill: true,
            leftIcon:
              <Icon
                icon={"search"}
                iconSize={type === "dense" ? 16 : 20}
                className={SearchView["searchButton"]}
                style={type === "dense" ? { margin: "0.4rem" } : { margin: "0.65rem" }}
              />,
            className: cx(
              SearchType[type],
              SearchView[view],
              Color[color]
            )
          }}
          popoverProps={{
            minimal: true,
            popoverClassName: cx(
              View["select-popover"],
              filterable && View["select-popover-filterable"],
              MenuView[view],
              MenuType[type],
              Color[color]
            )
          }}
          {...restProps}
        >
          <Button
            type={type === "dense" ? "dense" : "default"}
            view={view}
            color={color}
            fill={fill}
            icon={icon}
            text={
              selectedItem
                ? selectedItem.title + (selectedItem.label ? ` (${selectedItem.label})` : '')
                : placeholder
            }
            disabled={disabled}
            rightIcon="caret-down"
            className={cx(
              View["select-button"],
              fill && View["button-fill-width"],
              centerAlign && View["button-center-align"],
              placeholder && !selectedItem && View["placeholder-text"]
            )}
          />
        </SelectSource>
      )}
    </ThemeContext.Consumer>
  );
}

Select.propTypes = {
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
   * Item select event listener.
   */
  onItemSelect: PropTypes.func,
  /**
   * Whether this component should expand to fill its container.
   */
  fill: PropTypes.bool,
  /**
   * Name of a Blueprint UI icon (or an icon element) to render before the text.
   */
  icon: PropTypes.any,
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
   * Whether target button text should be centerd
   */
  centerAlign: PropTypes.bool,
  /**
   * Whether list should be filterable
   */
  filterable: PropTypes.bool
};

