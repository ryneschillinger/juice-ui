import React from "react";

import { Label } from "@blueprintjs/core";
import Slider from "../../core/Slider";
import Checkbox from "../../core/CheckBox";
import StyleGrid from "../styles/style.module.css";

const PropsGroup = props => {
  const {
    opacity,
    setOpacity,
    footer,
    setFooter,
    margin,
    showCloseButton,
    setShowCloseButton,
    canOutsideClickClose,
    setCanOutsideClickClose,
    canEscapeKeyClose,
    setCanEscapeKeyClose,
  } = props;
  return (
    <div className={StyleGrid["demo-props"]}>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={footer ? "primary" : "default"}
          checked={footer}
          label="Footer Buttons"
          onChange={() => setFooter(!footer)}
          margin={margin}
          fill
        />
        <Checkbox
          type="dense"
          color={showCloseButton ? "primary" : "default"}
          checked={showCloseButton}
          label="Show Close Button"
          onChange={() => setShowCloseButton(!showCloseButton)}
          margin={margin}
          style={{ lineHeight: 1 }}
          fill
        />
        <Checkbox
          type="dense"
          color={canOutsideClickClose && showCloseButton ? "primary" : "default"}
          checked={canOutsideClickClose || !showCloseButton}
          disabled={!showCloseButton}
          label="Click Outside to Close"
          onChange={() => setCanOutsideClickClose(!canOutsideClickClose)}
          margin={margin}
          style={{ lineHeight: 1 }}
          fill
        />
        <Checkbox
          type="dense"
          color={canEscapeKeyClose && showCloseButton ? "primary" : "default"}
          checked={canEscapeKeyClose || !showCloseButton}
          disabled={!showCloseButton}
          label="Escape Key to Close"
          onChange={() => setCanEscapeKeyClose(!canEscapeKeyClose)}
          margin={margin}
          style={{ lineHeight: 1 }}
          fill
        />
      </div>
      <div className="demo-props">
        <Label>Backdrop Opacity</Label>
        <Slider
          view="filled"
          color={"default"}
          labelStepSize={50}
          min={0}
          max={100}
          onChange={value => setOpacity(value)}
          stepSize={10}
          showTrackFill={true}
          value={opacity}
          className="demo-slider"
        />
      </div>
    </div>
  );
};

export default PropsGroup;
