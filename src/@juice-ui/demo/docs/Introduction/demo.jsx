import React from "react";
//import cx from "classnames";
import Typo from "../../../core/Typography";
import Card from "../../../core/Card";
import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";
import * as ROUTES from "../../constants/Routes.jsx";
import Img01 from "./01_action_green_800.gif";
import Img02 from "./02_red_segment_800.gif";
import Img03 from "./03_raised_btn_800.gif";
import Img04 from "./04_menu_800.gif";

const DemoStart = props => {
  React.useEffect(() => {
    document.title = `Juice React UI System 1.0 | Introduction`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Ready-to-use React JS componentsfor save your time.`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component-full-width"]}>
        <Typo type="h2" color="primary" colorStep={80} style={{ margin: "0.8rem 0 0.2rem 0" }}>
          Juice UI Kit
        </Typo>
        <Typo large className={styles.text} style={{ marginBottom: "1rem" }}>
          Juice is unlike any other React UI kit. It takes the
          <a
            href="https://blueprintjs.com/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            BlueprintJS library
          </a>
          &nbsp;and 
          <a
            href={ROUTES.FIGMA_DEMO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Figma design assets
          </a>
           and blends them together into a refreshing UI library that helps you build and scale a variety of tasty apps faster than ever before.
        </Typo>
        <Typo large className={styles.text}>
          <span>The library provides </span>
          <span
            className={styles.text_command}
            style={{ color: "var(--green90)", background: "var(--green5)" }}
          >
            flat
          </span><span>, </span>
          <span
            className={styles.text_command}
            style={{ color: "var(--red90)", background: "var(--red5)" }}
          >
            filled
          </span><span>, </span>
          <span
            className={styles.text_command}
            style={{ color: "var(--blue90)", background: "var(--blue5)" }}
          >
            smooth
          </span><span>, </span>
          <span
            className={styles.text_command}
            style={{ color: "var(--yellow90)", background: "var(--yellow5)" }}
          >
            outlined
          </span><span>, and </span>
          <span
            className={styles.text_command}
            style={{ color: "var(--purple90)", background: "var(--purple5)" }}
          >
            raised
          </span> <span>instances for every component, UI widget or template.
          Want to go simple and data-first for enterprise applications? Try the flat style. Are you a fan of Material UI? The raised style might be the flavor for you. You can even mix-and-match if you'd like! Whatever you're in the mood for, Juice has you covered by making it easier than ever to swap between React and Figma on the fly.</span>
        </Typo>
        
        {/* Promo images */}
        <div className={styles.promo_group}>
          <div className={styles.promo_item}>
            <Card
              view="flat"
              color="success"
              elevation={2}
              style={{ blockSize: "fit-content", overflow: "hidden" }}
            >
              <img className={styles.item_img} src={Img01} alt="Action button" />
            </Card>
            <Typo color="success" colorStep={70} className={styles.sub_title}>
                Mix UI themes by swapping between custom props and Figma instances.
            </Typo>
          </div>
          <div className={styles.promo_item}>
            <Card
              view="flat"
              color="danger"
              elevation={2}
              style={{ blockSize: "fit-content", overflow: "hidden" }}
            >
              <img className={styles.item_img} src={Img02} alt="Segment" />
            </Card>
            <Typo color="danger" colorStep={70} className={styles.sub_title}>
              Craft vibrant interfaces with a variety of hovers, timings, and animations.
            </Typo>
          </div>
          <div className={styles.promo_item}>
            <Card
              view="flat"
              color="primary"
              elevation={2}
              style={{ blockSize: "fit-content", overflow: "hidden" }}
            >
              <img className={styles.item_img} src={Img03} alt="Raised button" />
            </Card>
            <Typo color="primary" colorStep={70} className={styles.sub_title}>
              Cook quicker with states that are neatly maintained for components to interact with.
            </Typo>
          </div>
          <div className={styles.promo_item}>
            <Card
              view="flat"
              color="warning"
              elevation={2}
              style={{ blockSize: "fit-content", overflow: "hidden" }}
            >
              <img className={styles.item_img} src={Img04} alt="Menu" />
            </Card>
            <Typo color="warning" colorStep={70} className={styles.sub_title}>
              Get inspired by playing with all of the crisp polished component templates.
            </Typo>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoStart;
