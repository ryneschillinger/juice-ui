import React from "react";
//import cx from "classnames";
import Typo from "../../../core/Typography";
import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";
import * as ROUTES from "../../constants/Routes.jsx";
import Img01 from "./01_action_green_800.gif";
import Img02 from "./02_red_segment_800.gif";
import Img03 from "./03_raised_btn_800.gif";
import Img04 from "./04_menu_800.gif";

const DemoStart = props => {
  React.useEffect(() => {
    document.title = `React Design System 2.0 | Introduction`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Ready-to-use React JS componentsfor save your time.`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component-full-width"]}>
        <Typo type="h2" color="primary" colorStep={80}>
          Candy UI kit
        </Typo>
        <Typo type="h4" className={styles.h4_title}>
          Introduction
        </Typo>
      </div>
    </div>
  );
};

export default DemoStart;
