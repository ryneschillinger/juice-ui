import React, { useEffect, useState } from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { MultiSelect as MultiSelectSource } from "@blueprintjs/select";
import { Icon } from "@blueprintjs/core";
import Button from "../../../core/Button";
import Menu from "../../../core/Menu";
import MenuItem from "../../../core/Menu/MenuItem";
import Type from "./_type.module.css";
import View from "./_view.module.css";
import Color from "../../../styles/color.module.css";
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
    onActiveItemChange,
    allowCreate,
    newItemMap,
    ...restProps
  } = props;

  const [createdItems, setCreatedItems] = useState([]);
  const [stateItems, setStateItems] = useState(items);
  const [selections, setSelections] = useState([]);
  const [currentQuery, setCurrentQuery] = useState('');
  let targetWidth;
  let inputRef = React.useRef();

  useEffect(() => {
    targetWidth = inputRef.clientWidth;
  });

  const renderItem  = (
    item,
    { handleClick, modifiers}
  ) => {
    if (currentQuery.length > 0 && !modifiers.matchesPredicate) {
      return null;
    }
    const text = `${item.id}. ${item.title}`;
    return (
      <MenuItem
        type={type}
        view={view}
        color={color}
        icon={isItemSelected(item) ? "tick" : "blank"}
        active={isItemSelected(item)}
        disabled={modifiers.disabled}
        label={item.label ? item.label.toString() : null}
        key={item.id}
        onClick={handleClick}
        text={highlightText(text, currentQuery)}
      />
    );
  };

  const resetForm = () => {
    setCurrentQuery('');
    inputRef.focus();
  }
  
  const renderMenuList = ({ itemsParentRef, renderItem }) => {
    const doesQueryExist = currentQuery.length > 0;
    const renderedItems = doesQueryExist
      ? stateItems.map(renderItem).filter(item => item != null)
      : stateItems.map(renderItem);

    const renderNoItems = () => {
      if (allowCreate) {
        return (
          <MenuItem
            type={type}
            color={color}
            icon={<Icon icon="add" iconSize={ type === "dense" ? 16 : 20} />}
            text={`Create "${currentQuery}"`}
            onClick={() => { createNewItem(currentQuery); resetForm(); }}
            shouldDismissPopover={false}
          />
        )
      }
      return (
        <MenuItem
          type={type}
          view={view}
          color={color}
          disabled={true}
          text="No results."
        />
      )
    };

    return (
      <Menu
        type={type}
        view={view === "outlined" ? "raised" : view}
        color={color}
        ulRef={itemsParentRef}
        disabled={disabled}
        style={{
          maxHeight: "390px",
          overflow: "auto",
          width: matchTargetWidth ? `${targetWidth}px` : 'auto'
        }}
      >
        {renderedItems.length === 0 && renderNoItems()}
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

  const handleTagRemove = (itemTitle) => {
    deselectItem(selections.find(item => item.title === itemTitle));
  };

  const selectItem = item => {
    selectItems([item]);
  }

  const selectItems = itemsToSelect => {
    let nextCreatedItems = createdItems.slice();
    let nextItems = stateItems.slice();
    let nextSelections = selections.slice();

    itemsToSelect.forEach(item => {
        const results = maybeAddCreatedItemToArrays(nextItems, nextCreatedItems, item);
        nextSelections = results.selections;
        nextCreatedItems = results.createdItems;
        // Avoid re-creating an item that is already selected (the "Create
        // Item" option will be shown even if it matches an already selected
        // item).
        nextItems = !arrayContainsItem(nextItems, item) ? [...nextItems, item] : nextItems;
    });
    setCreatedItems(nextCreatedItems);
    setStateItems(nextItems);
    setSelections(nextSelections);
  }

  const deselectItem = item => {
    const { nextCreatedItems, nextStateItems } = maybeDeleteCreatedItemFromArrays(
        stateItems,
        createdItems,
        item
    );
    // Delete the item if the user manually created it.
    setCreatedItems(nextCreatedItems);
    setStateItems(nextStateItems);
    setSelections(selections.filter((i) => i.title !== item.title));
  }

  const maybeAddCreatedItemToArrays = (stateItems, createdItems, item) => {
    const isNewlyCreatedItem = !arrayContainsItem(stateItems, item);
    return {
        createdItems: isNewlyCreatedItem ? addItemToArray(createdItems, item) : createdItems,
        selections: addItemToArray(selections, item),
        // Add a created item to `stateItems` so that the item can be deselected.
        stateItems: isNewlyCreatedItem ? addItemToArray(stateItems, item) : stateItems,
    };
  }

  const maybeDeleteCreatedItemFromArrays = (stateItems, createdItems, item) => {
    const wasItemCreatedByUser = arrayContainsItem(createdItems, item);
    const nextCreatedItems = wasItemCreatedByUser ? deleteItemFromArray(createdItems, item) : createdItems;
    const nextStateItems = wasItemCreatedByUser ? deleteItemFromArray(stateItems, item) : stateItems;
    // Delete the item if the user manually created it.
    return { nextCreatedItems, nextStateItems };
  }

  const isItemSelected = itemToFind => {
    return selections.some((item) => item.title === itemToFind.title);
  }

  const handleItemSelect = item => {
    if (!isItemSelected(item)) {
        selectItem(item);
    } else {
        deselectItem(item);
    }
  };

  const arrayContainsItem = (array, itemToFind) => {
    return array.some((item) => item.title === itemToFind.title);
  }

  const addItemToArray = (array, itemToAdd) => {
    return [...array, itemToAdd];
  }

  const deleteItemFromArray = (array, itemToDelete) => {
    return array.filter(item => item !== itemToDelete);
  }

  const handleItemsPaste = (items) => {
    // On paste, don't bother with deselecting already selected values, just
    // add the new ones.
    selectItems([items]);
  };

  const handleClear = () => {
    setStateItems(items);
    setSelections([]);
  }

  const clearButtonMargin = () => type === "dense" ? "0.4rem 0.2rem 0.4rem 0.4rem" : "0.7rem 0.3rem 0.7rem 0.7rem";

  const clearButton =
    selections.length > 0
      ? (
        <Button
          type="default"
          dense={type === "dense"}
          color={color}
          view="flat"
          style={{ margin: clearButtonMargin() }}
          icon={
            <Icon
              icon="cross"
              iconSize={ type === "dense" ? 16 : 20}
            />
          }
          onClick={handleClear}
        />
      ) : undefined;

  const renderTag = item => item.title;

  const createNewItem = title => {
    const newItem = {
      id: stateItems.length + 1,
      title: newItemMap.title ? newItemMap.title(title) : title,
      label: newItemMap.label
    };
    selectItems([newItem]);
  };

  return (
    <ThemeContext.Consumer>
      {({ isDark }) => (
        <MultiSelectSource
          filterable={true}
          itemPredicate={filterItem}
          itemRenderer={renderItem}
          itemListRenderer={renderMenuList}
          tagRenderer={renderTag}
          items={stateItems}
          selectedItems={selections}
          fill={false}
          disabled={disabled}
          onItemSelect={handleItemSelect}
          onItemsPaste={handleItemsPaste}
          tagInputProps={{
            fill: true,
            disabled: disabled,
            placeholder: placeholder,
            onRemove: handleTagRemove,
            rightElement: clearButton,
            inputRef: el => inputRef = el,
            inputProps: {
              value: currentQuery,
              onChange: e => setCurrentQuery(e.target.value)
            },
            className: cx(
              Type[type],
              View[view],
              Color[color],
              disabled && View["disabled"]
            )
          }}
          popoverProps={{
            minimal: true,
            fill: fill,
            popoverClassName: cx(
              type === "dense" ? View["select-popover-dense"] : View["select-popover"],
              MenuView[view],
              MenuType[type],
              Color[color]
            )
          }}
          {...restProps}
        >
        </MultiSelectSource>
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
   * Whether target button text should be centered
   */
  centerAlign: PropTypes.bool,
  /**
   * If provided, allows new items to be created using the current query string.
   */
  allowCreate: PropTypes.bool,
    /**
   * If provided, allows new items to be created using the current query string.
   */
  // newItemMap: React.PropTypes.shape({
  //   title: React.PropTypes.any,
  //   label: React.PropTypes.any 
  // })
};

