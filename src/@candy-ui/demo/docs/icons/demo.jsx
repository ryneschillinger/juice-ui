import React from "react";
import Typo from "../../../core/Typography";
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
    document.title = `React Design System: Icons`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Demo Icons component for React Candy UI Design System with possible props.`;
  });
  let device = useDevice();
  const [color, setColor] = React.useState("default");
  const [iconSize, setIconSize] = React.useState(device !== "mobile" ? 40 : 32);

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component"]}>
        <Typo type="h3">Icons</Typo>

        <Typo large className={styles.text}>
          Candy UI provides over 300 vector UI icons in two sizes (16px and 20px)
          and two formats (SVG and fonts). It's easy to change their color or
          apply effects like text shadows via standard SVG or CSS properties.
        </Typo>
        <Typo large className={styles.text}>
          Many Candy UI components support an icon prop which accepts an icon
          name (such as "history") or a JSX element to use as the icon. For
          example: {<pre>{`<Icon icon="add" iconSize={24} />`}</pre>}
        </Typo>
        <Section className={Color[color]} iconSize={iconSize} device={device} />
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
