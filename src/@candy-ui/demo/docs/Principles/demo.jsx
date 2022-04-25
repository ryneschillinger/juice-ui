import React from "react";
//import cx from "classnames";
import Typo from "../../../core/Typography";
import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";
import Img01 from "./Flat.png";
import Img02 from "./Outlined.png";
import Img03 from "./Filled.png";
import Img04 from "./Raised.png";

const DemoStart = props => {
  React.useEffect(() => {
    document.title = `React Design System 2.0 | Principles`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Ready-to-use React JS components.`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component-full-width"]}>
        <Typo type="h3" className={styles.h4_title}>
          Design principles
        </Typo>
        <Typo large className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sem augue, suscipit ac augue ac, mollis bibendum augue. Morbi mollis pellentesque nisl ut auctor. Donec erat lorem, ornare vitae efficitur eu, elementum at lacus. Donec vel suscipit quam. 
        </Typo>
      </div>
    </div>
  );
};

export default DemoStart;
