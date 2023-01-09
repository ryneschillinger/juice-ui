import React from "react";
import { Link } from 'react-router-dom';
import cx from "classnames";
import Typo from "../../../core/Typography";
import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";

const DemoStart = props => {
  React.useEffect(() => {
    document.title = `Juice React UI System 1.0 | Getting Started`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Ready-to-use React JS componentsfor save your time. Installation guide.`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component-full-width"]}>
        <Typo type="h3" className={styles.h3_title}>
          Getting Started
        </Typo>
        <Typo type="h6" className={styles.h6_title} id="#installation-for-react">
          Installation for React
        </Typo>
        <Typo large className={styles.text}>
          Unzip the .zip archive, copy all files from the folder{" "}
          <span className={styles.text_warning}>
            "JuiceUIKit"
          </span>{" "}
          to your project folder and install the{" "}
          <span className={styles.text_warning}>package.json</span> dependencies:
        </Typo>
        <div className={cx(styles.text_command__warning)}>npm install</div>
        <Typo large className={styles.text}>
          To run an app:
        </Typo>
        <div className={styles.text_command__success}>npm start</div>

        <Typo type="h6" className={styles.h6_title} id="#installation-for-figma">
          Installation for Figma
        </Typo>
        <Typo large className={styles.text}>
          You can drag an extracted{" "}
          <span className={styles.text_warning}>.fig</span> file from a folder on
          your your Desktop right into Figma. This is available
          on both the Figma Desktop app and the Figma web app (browser-based). You
          can also drag and drop files into the File Browser or the Editor.{" "}
          <a
            href="https://www.youtube.com/watch?v=cpG3foCWX-E"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            See how it works
          </a>
        </Typo>
        
        <Link to="#might-be-helpful">
          <Typo type="h6" className={styles.h6_title}>
            Might be helpful
          </Typo>
        </Link>
        <Typo large className={styles.text}>
          All components are based on{" "}
          <a
            href="https://blueprintjs.com/docs/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            BlueprintJS components v.3
          </a>.
          All UI kit components are located in the folder{" "}
          <span className={styles.text_warning}>/src/@juice-ui/core</span>.
          A copy of DemoApp components is located in the folder&nbsp;
          <span className={styles.text_warning}>
            /src/@juice-ui/demo
          </span>{" "}
          and you can run it locally.
        </Typo>
      </div>
    </div>
  );
};

export default DemoStart;
