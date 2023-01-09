import React from "react";

import { Label } from "@blueprintjs/core";
import Checkbox from "../../core/CheckBox";

import StyleGrid from "../styles/style.module.css";

const PropsGroup = props => {
  const {
    fill,
    setFill,
    margin,
    isVertical,
    setIsVertical,
    alignText,
    setAlignText,
  } = props;

  const toggleSetAlignText = (curAlign, newAlign) => {
    if (curAlign !== newAlign) {
      return newAlign
    } return "center";
  };

  return (
    <div className={StyleGrid["demo-props"]}>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={fill ? "primary" : "default"}
          checked={fill}
          label="Fill"
          onChange={() => setFill(!fill)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={isVertical ? "primary" : "default"}
          checked={isVertical}
          label="Vertical"
          onChange={() => setIsVertical(!isVertical)}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={alignText === "left" ? "primary" : "default"}
          checked={alignText === "left"}
          label="Align Text Left"
          onChange={() => setAlignText(toggleSetAlignText(alignText, "left"))}
          fill
          margin={margin}
        />
        <Checkbox
          type="dense"
          color={alignText === "right" ? "primary" : "default"}
          checked={alignText === "right"}
          label="Align Text Right"
          onChange={() => setAlignText(toggleSetAlignText(alignText, "right"))}
          fill
          margin={margin}
        />
      </div>
    </div>
  );
};

export default PropsGroup;
