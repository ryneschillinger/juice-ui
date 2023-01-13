import React from "react";
import cx from "classnames";
import Typo from "../../../core/Typography";
import { Palette } from "./palette";
import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";

const DemoColors = props => {
  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component-full-width"]}>
        <Typo type="h3">Colors</Typo>
        
        <Typo type="h6" colorStep={60} className={styles.sub_title}>
          JuiceUI serves a delicious palette based on 12 color tokens.
        </Typo>

        <Typo type="h5" className={styles.h4_title} id="core-colors">
          Core Colors
        </Typo>
        <Typo large className={styles.text}>
          The charcoal and blueberry scales should be used or the main UI frame: containers, headers, sections, boxes, etc. If you need to call attention to a particular element (buttons, icons, tooltips, etc.), use one of the core or status colors.
        </Typo>
        <div className={styles.main_colors}>
          <div className={styles.colors_array}>
            <Palette alias="default" color="grey" name="🪨 Charcoal" />
          </div>
          <div className={styles.space_between} />
          <div className={styles.colors_array}>
            <Palette alias="primary" color="blue" name="🫐 Blueberry" />
          </div>
        </div>

        <Typo type="h5" className={styles.h4_title} id="status-colors">
          Status Colors
        </Typo>
        <Typo large className={styles.text}>
          Use green to indicate successful messages or experiences, yellow for attention, and red for
          warning/danger statements.
        </Typo>
        <div className={styles.action_colors}>
          <div className={styles.colors_array}>
            <Palette alias="success" color="green" name="🥝 Kiwi" />
          </div>
          <div className={styles.space_between} />
          <div className={styles.colors_array}>
            <Palette alias="warning" color="yellow" name="🍌 Banana" />
          </div>
          <div className={styles.colors_array}>
            <Palette alias="danger" color="red" name="🍒 Cherry" />
          </div>
        </div>

        <Typo type="h5" className={styles.h4_title} id="alternative-colors">
          Alternative Colors
        </Typo>
        <Typo large className={styles.text}>
          You can replace the primary and/or any of the Action Colors with one of these alternatives.
        </Typo>
        <div className={styles.alt_colors}>
          <div className={styles.colors_array}>
            <Palette alias="primary_alt" color="purple" name="🍇 Grape" />
          </div>
          <div className={styles.space_between} />
          <div className={styles.colors_array}>
            <Palette alias="success_alt" color="teal" name="🌿 Mint" />
          </div>
          <div className={styles.colors_array}>
            <Palette alias="warning_alt" color="orange" name="🍊 Tangerine" />
          </div>
          <div className={styles.space_between} />
          <div className={styles.colors_array}>
            <Palette alias="danger_alt" color="pink" name="🍉 Watermelon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoColors;
