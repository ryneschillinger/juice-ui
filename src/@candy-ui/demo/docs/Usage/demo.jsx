import React from "react";
//import cx from "classnames";
import Typo from "../../../core/Typography";
import styles from "./style.module.css";
import DemoAppStyle from "../../styles/style.module.css";

const DemoStart = props => {
  React.useEffect(() => {
    document.title = `React Design System 2.0 | Usage`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Ready-to-use React JS componentsfor save your time. Installation guide.`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component-full-width"]}>
        <Typo type="h3" className={styles.h4_title}>
          Usage
        </Typo>
        <Typo type="h6" className={styles.h6_title}>
          Starting a new project
        </Typo>
        <Typo large className={styles.text}>
          After installing the dependencies with the npm install command, you can
          start developing a new project. You will discover design system
          components in the folder:{" "}
          <span className={styles.text_warning}>src\@candy-ui\core</span>.
          For the documentation stored locally refer to a folder:{" "}
          <span className={styles.text_warning}>src\@candy-ui\demo</span>.
          Style files are available here:{" "}
          <span className={styles.text_warning}>src\@candy-ui\styles</span>.
          Before you get started with development, you need to include styles in
          your main application file, for example,{" "}
          <span className={styles.text_warning}>App.js</span>. To perform this,
          insert the import code:
        </Typo>
        <div className={styles.text_command__code}>
          import "normalize.css/normalize.css"; <br />
          import "@blueprintjs/core/lib/css/blueprint.css"; <br />
          import "./@candy-ui/styles/setproduct.css";
        </div>
        <Typo large className={styles.text}>
          For the proper usage of components in your project, apply the sample
          code and component's API from the component documentation page. The{" "}
          <span className={styles.text_warning}>Button</span> import example:
        </Typo>
        <div className={styles.text_command__code}>
          {`import Button from "./@candy-ui/core/Button";`}
          <br />
          {`const App = () => { return <Button color="primary" text="BUTTON"/>; };`}
          <br />
          {`export default App;`}
        </div>

        <Typo type="h6" className={styles.h6_title}>
          Existing project integration
        </Typo>
        <Typo large className={styles.text}>
          Copy the <span className={styles.text_warning}>@candy-ui</span>{" "}
          folder from the archive into the{" "}
          <span className={styles.text_warning}>src</span> folder of your project.
          Include styles in your primary application file, for example,{" "}
          <span className={styles.text_warning}>App.js</span>. To perform this,
          insert the import code:
        </Typo>
        <div className={styles.text_command__code}>
          import "normalize.css/normalize.css"; <br />
          import "@blueprintjs/core/lib/css/blueprint.css"; <br />
          import "./@candy-ui/styles/setproduct.css";
        </div>
        <Typo large className={styles.text}>
          For the proper usage of components in your project, apply the sample
          code and component's API from the component documentation page. The{" "}
          <span className={styles.text_warning}>Button</span> import example:
        </Typo>
        <div className={styles.text_command__code}>
          {`import Button from "./@candy-ui/core/Button";`}
          <br />
          {`const App = () => { return <Button color="primary" text="BUTTON"/>; };`}
          <br />
          {`export default App;`}
        </div>
        <br />
      </div>
    </div>
  );
};

export default DemoStart;
