import React from "react";
import cx from "classnames";
import Typo from "../../../core/Typography";
import { Icon } from "@blueprintjs/core";
import IconJson from "@blueprintjs/icons/icons.json";
import Toaster from "../../../core/Toast/Toaster.jsx";

import styles from "./style.module.css";

export const Section = props => {
  const [toastRef, setRef] = React.useState(null);
  /**Success toast */
  const SuccessToast = {
    message: "Copied to clipboard",
    timeout: 2000,
    icon: <Icon icon="tick" iconSize={24} />
  };
  /**Copy function */
  const copyToClipboard = source => {
    const textField = document.createElement("textarea");
    textField.innerHTML = source;
    document.body.appendChild(textField);
    textField.select();
    props.device !== "mobile" &&
      (document.execCommand("copy") && toastRef.show(SuccessToast));
    textField.remove();
  };

  let selectedIconGroup = props.selectedIconGroup.toLowerCase();

  let groupArray = [
    ...new Set(Object(IconJson).map(name => name.group))
  ]
  .filter(group => selectedIconGroup === 'all icons' || group === selectedIconGroup)
  .sort();

  const groupIcons = group => {
    let items = Object(IconJson)
      .filter(name => name.group === group)
      .sort();
    let icons_name = items.map(item => item.iconName).sort();
    let icons_display_name = items.map(item => item.displayName).sort();
    let icons_tags = items.map(item => item.tags).sort();

    return (
      <>
        {icons_name
          .map((item, i) => (
            <div
              className={cx(styles.icon_item, props.className)}
              key={i}
              onClick={() => copyToClipboard(props.iconExample.replace(/<[^>]+>/g, '').replace('add', icons_name[i]))}
            >
              <div className={styles.icon_item_container}>
                <div className={styles.icon_svg}>
                  <Icon icon={item} iconSize={props.iconSize} />
                </div>

                <Typo
                  large
                  colorStep={40}
                  data-name={icons_display_name[i]}
                  className={styles.icon_name}
                  tags={icons_tags[i]}
                />
              </div>
            </div>
          ))
          .filter((item, i) =>
            !props.searchQuery
            || props.searchQuery === ""
            || icons_name[i].includes(props.searchQuery)
          )
          .sort()}
      </>
    );
  };

  return (
    <>
      {groupArray.map((item, i) => {
        const iconsList = groupIcons(item);
        const meetsSearchQuery = iconsList.props.children.length > 0
        if (meetsSearchQuery) { 
          return <div key={i}>
            <Typo type="h5" colorStep={100} className={styles.section_title} id={item.toLowerCase()}>
              {item}
            </Typo>
            <div className={styles.icons_section}>{iconsList}</div>
          </div>
        }
      })}
      <Toaster
        view="filled"
        color="success"
        usePortal={false}
        position="bottom"
        setRef={setRef}
        withoutClose={true}
      />
    </>
  );
};
