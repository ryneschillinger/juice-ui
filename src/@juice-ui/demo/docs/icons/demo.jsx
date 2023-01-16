import React, { useState, useEffect } from "react";
import Typo from "../../../core/Typography";
import InputGroup from "../../../core/Inputs/SearchInput";
import Select from "../../../core/Select/Select";
import { SidebarContainer } from "../../components/SidebarContainer";
import SelectColorGroup from "../../SelectColorGroup.jsx";
import { Section } from "./section";
import PropsGroup from "./PropsGroup.jsx";
import { useDevice } from "../../components/customHooks";

import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";
import Color from "../../../styles/color.module.css";

const DemoIcons = props => {
  React.useEffect(() => {
    document.title = `Juice React UI System: Icons`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Demo Icons component for React Juice UI Design System with possible props.`;
  });
  let device = useDevice();
  const [color, setColor] = React.useState("default");
  const [iconSize, setIconSize] = React.useState(device !== "mobile" ? 40 : 32);
  const items = [
    { title: "All icons" },
    { title: "Action" },
    { title: "Data" },
    { title: "Editor" },
    { title: "File" },
    { title: "Interface" },
    { title: "Media" },
    { title: "Miscellaneous" },
    { title: "Table" }
  ];
  const colors = {
    "default": "grey",
    "primary": "blue",
    "warning": "yellow",
    "danger": "red",
    "success": "green",
    "primary_alt": "purple",
    "warning_alt": "orange",
    "danger_alt": "pink",
    "success_alt": "teal",
  }
  const [query, setQuery] = useState();
  const [selectedIconGroup, setSelectedIconGroup] = React.useState(items[0]);
  const onSearch = val => {
    setQuery(val);
  };

  const iconExample = `&lt;<span class="el">Icon</span> <span class="attr">icon</span>="<span class="val">add</span>" <span class="attr">iconSize</span>={<span class="num">${iconSize}</span>} <span class="attr">color</span>="<span class="val">var(--${colors[color]}70)</span>" /&gt;`

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component"]}>
        <Typo type="h3">Icons</Typo>

        <Typo large className={styles.text}>
          Juice UI provides over 300 vector UI icons in multiple sizes and formats. It's easy to change their color or
          apply effects like text shadows via standard SVG or CSS properties.
        </Typo>
        <Typo large className={styles.text}>
          Many Juice UI components support an icon prop which accepts an icon
          name (such as "history") or a JSX element to use as the icon. For
          example:
        </Typo>
        <div
          className="source-code-block"
          style={{ borderRadius: "0.3rem", margin: "1.5rem 0 1rem 0" }}
        >
          {<pre style={{ padding: "0 0.5rem" }}>
            <code style={{ paddingBottom: "0.2rem" }} 
              dangerouslySetInnerHTML={{
                __html: iconExample
              }}
            />
          </pre>}
        </div>
        <div className={styles["icon-search-controls"]}>
          <Select
            type="def"
            view="outlined"
            color="default"
            items={items}
            selectedItem={selectedIconGroup}
            disabled={false}
            onItemSelect={setSelectedIconGroup}
            fill
            segmented="left"
            // onActiveItemChange={() => doSomething()}
          />
          <InputGroup
            type="def"
            view="outlined"
            color="default"
            placeholder="Find an icon..."
            segmented="right"
            // fill={isFill}
            onSearch={onSearch}
          />
        </div>
        <Section
          className={Color[color]}
          iconSize={iconSize}
          device={device}
          iconExample={iconExample}
          searchQuery={query}
          selectedIconGroup={selectedIconGroup.title}
        />
      </div>
      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          <div className={DemoAppStyle["demo-props"]}>
            {/**Set this Props component */}
            <PropsGroup iconSize={iconSize} setIconSize={setIconSize} />
            <SelectColorGroup color={color} setColor={setColor} />
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
};

export default DemoIcons;
