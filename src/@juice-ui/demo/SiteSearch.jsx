import React, { useState, useCallback } from "react";
import { Link } from 'react-router-dom';
import { HashLink } from "react-router-hash-link";
import cx from "classnames";
import { Suggest } from "@blueprintjs/select";
import { Icon } from "@blueprintjs/core";
import { ReactComponent as HashIcon } from "../assets/hash-icon.svg";
import SiteSearchIndex  from "./constants/SiteSearchIndex";
// import { MenuItem, minimal } from "@blueprintjs/core";
import Menu from "../core/Menu/Menu";
import MenuItem from "../core/Menu/MenuItem";
import MenuDivider from "../core/Menu/MenuDivider";
import View from "../core/Select/Select/_view.module.css";
import Type from "../core/Select/Select/_type.module.css";
import SearchType from "../core/Inputs/SearchInput/_type.module.css";
import SearchView from "../core/Inputs/SearchInput/_view.module.css";
import MenuType from "../core/Menu/_type.module.css";
import MenuView from "../core/Menu/_view.module.css";
import Color from "../styles/color.module.css";
import DemoAppStyle from "./styles/style.module.css";

export default function SiteSearch(props) {
  const [value, setValue] = useState(SiteSearchIndex.title);

  const doesMatchQuery = (item, query) => {
    const Query = query.toLowerCase().split(" ").filter(i => i !== "");
    const Item = item.toLowerCase();
    return Query.some(word => Item.includes(word))
  };

  const handleItemRenderer = (group, { handleClick, modifiers, query }) => {
    let renderedSections = [];
    let renderedMenuItems = [];
    // Check whether section has been added already
    renderedSections.indexOf(group.groupTitle) === -1 &&
      renderedMenuItems.push(
      <MenuDivider title={group.groupTitle} type="def" view="smooth" color="primary" />
    ) &&
    // Add item to renderedSections 
    renderedSections.push(group.groupTitle)
    // Add the section's corresponding pages 
    group.pages.map(page => {
      // Check whether page title contains the search query
      doesMatchQuery(page.title, query) && renderedMenuItems.push(
        <Link
          to={page.path}
          style={{
            color: 'inherit',
            fontWeight: 'var(--font_weight_body_bold)'
          }}
        >
          <MenuItem
            type="def"
            view="raised"
            color="primary"
            icon={<Icon icon="document" color="var(--grey60)" />}
            text={highlightText(page.title, query)}
            onClick={handleClick}
          />
        </Link>
      )
      page.sections && page.sections.map(section => 
        doesMatchQuery(section.title, query) && renderedMenuItems.push(
          <HashLink to={`${page.path}#${section.hash}`} style={{ color: 'inherit' }}>
            <MenuItem
              type="def"
              view="raised"
              color="primary"
              icon={
                doesMatchQuery(page.title, query)
                  ? [
                  <Icon icon="nest" style={{ marginLeft: "1.25rem"}} color="var(--grey30)" />,
                  <HashIcon className={DemoAppStyle.hash_icon} />
                  ]
                  : <HashIcon className={DemoAppStyle.hash_icon} />
              }
              label={
                !doesMatchQuery(page.title, query) && [
                  <span style={{ color: 'var(--grey60)', fontSize: 'var(--font_size_caption'}}>in </span>,
                  <strong style={{ color: 'var(--grey60)', fontSize: 'var(--font_size_caption'}}>{page.title}</strong>
                ]
              }
              text={highlightText(section.title, query)}
              onClick={handleClick}
            />
          </HashLink>
        )
    )})
    // Filter out empty groups
    if (renderedMenuItems.length > 1) { return renderedMenuItems };
  };
  
  const handleInputValueRenderer = (inputValue) => inputValue.title;

  const handleFilterItems = (query, item, index, exactMatch) => {
    const Title = item.groupTitle.toLowerCase();
    const Query = query.toLowerCase();

    if (exactMatch) {
      return Title === query;
    } else {
      return Title.indexOf(Query) >= 0;
    }
  };

  const renderMenuList = ({ items, itemsParentRef, query, renderItem }) => {
    const Query = query.toLowerCase().split(" ").filter(i => i !== "");
    if (Query && Query.length > 0) {
      const renderedItemGroups = items
        .map(renderItem)
        .filter(item => item != null);
      return (
        <Menu
          type={props.device === 'mobile' ? 'dense' : 'default' }
          view="raised"
          color="primary"
          ulRef={itemsParentRef}
          style={{ maxHeight: "500px", overflow: "auto" }}
        >
          {Query && Query.length > 0 && renderedItemGroups.length === 0 && 
            <MenuItem
              type={props.device === 'mobile' ? 'dense' : 'default' }
              view="raised"
              color="primary"
              disabled={true}
              text="No results."
            />
          }
          {renderedItemGroups}
        </Menu>
      )
    }
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
      tokens.push(
        <strong
          key={lastIndex}
          style={{color: "var(--color60)"}}
        >
          {match[0]}
        </strong>
      );
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
    <Suggest
      inputValueRenderer={handleInputValueRenderer}
      items={SiteSearchIndex}
      itemListRenderer={renderMenuList}
      itemRenderer={handleItemRenderer}
      itemPredicate={handleFilterItems}
      onItemSelect={(value) => setValue(value)}
      closeOnSelect
      resetOnSelect
      inputProps={{
        fill: true,
        placeholder: "Search guidelines...",
        leftIcon:
          <Icon
            icon={"search"}
            iconSize={props.device === 'mobile' ? 16 : 20 }
            className={SearchView["searchButton"]}
            style={{ margin: props.device === 'mobile' ? '0.35rem' : '0.65rem' }}
          />,
        className: cx(
          props.device === 'mobile' ? SearchType["dense"] : SearchType["def"],
          SearchView["smooth"],
          Color["primary"]
        )
      }}
      popoverProps={{
        minimal: true,
        popoverClassName: cx(
          View["select-popover"],
          // filterable && View["select-popover-filterable"],
          MenuView["raised"],
          props.device === 'mobile' ? MenuType["dense"] : MenuType["def"],
          Color["primary"]
        ),
        style: { width: "400px" }
      }}
    />
  );
}