import React from "react";
import cx from "classnames";
import { Icon } from "@blueprintjs/core";
import Typo from "../../../core/Typography";
import Toaster from "../../../core/Toast/Toaster.jsx";
import { useDevice } from "../../components/customHooks";

import styles from "./style.module.css";
import Color from "../../../styles/color.module.css";

export const Palette = ({ color = "grey", name = "charcoal", alias = "default", ...props }) => {
  const colors_array = [0, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  let device = useDevice();

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
    device !== "mobile" &&
      (document.execCommand("copy") && toastRef.show(SuccessToast));
    textField.remove();
  };

  const getAccessibilityResult = colorStep => {
    switch (true) {
      case (colorStep <= 20):
        return "✅ AAA";
        break;
      case (colorStep <= 40):
        return "👍 AA";
        break;
      case (colorStep === 60 && (color === "grey" || color === "purple")):
        return "👍 AA";
        break;
      case (colorStep <= 60):
        return "🚫 FAIL";
        break;
      case (colorStep <= 70 && color === "yellow"):
        return "🚫 FAIL";
        break;
      case (colorStep <= 70):
        return "👍 AA";
        break;
      case (colorStep === 80 && color == "yellow"):
        return "👍 AA";
        break;
      case (colorStep <= 100):
        return "✅ AAA";
        break;
      default:
        return "🚫 FAIL";
    }
  }

  return (
    <>
      <section>
        {colors_array.map((color_step, i) => (
          <div
            className={cx(styles.color_item, Color[alias])}
            key={i}
            style={{
              background: `var(--${color + color_step})`
            }}
            onClick={() =>
              copyToClipboard(
                window
                  .getComputedStyle(document.getElementById("root"), null)
                  .getPropertyValue("--" + color + color_step),
                color + color_step
              )
            }
          >
            <Typo
              large
              colorStep={color_step < 50 ? 90 : 0}
              color={alias}
              className={styles.color_name}
              data-color={name + " " + color_step}
            />
            <div className={styles.color_details}>
              <Typo
                type="overline"
                colorStep={color_step < 50 ? 90 : 0}
                color={alias}
                className={styles.color_hex}
              >
                {window
                  .getComputedStyle(document.getElementById("root"), null)
                  .getPropertyValue("--" + color + color_step)}
              </Typo>
              <Typo
                type="overline"
                colorStep={color_step < 50 ? 90 : 0}
                color={alias}
                className={styles.color_accessibility}
              >
                {getAccessibilityResult(color_step)}
              </Typo>
            </div>
          </div>
        ))}
      </section>
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
