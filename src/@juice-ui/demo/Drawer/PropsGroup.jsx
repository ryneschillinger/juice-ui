import React, { useCallback } from "react";

import { RadioGroup } from "@blueprintjs/core";
import { Label } from "@blueprintjs/core";
import Radio from "../../core/Radio";
import Checkbox from "../../core/CheckBox";

import StyleGrid from "../styles/style.module.css";

const PropsGroup = props => {
  const {
    position,
    setPosition,
    backdrop,
    setBackdrop,
    margin,
    size,
    setSize,
    canClickOutside,
    setCanClickOutside,
    escapeKeyToClose,
    setEscapeKeyToClose,
    isCloseButtonShown,
    setIsCloseButtonShown
  } = props;
  const handleClick = useCallback(e => setPosition(e.target.value), [
    setPosition
  ]);
  const handleSetSize = useCallback(e => setSize(e.target.value), [
    setSize
  ]);
  return (
    <div className={StyleGrid["demo-props"]}>
      <Label>Props:</Label>
      <div className="demo-props">
        <Checkbox
          type="dense"
          color={backdrop ? "primary" : "default"}
          checked={backdrop}
          label="Backdrop"
          onChange={() => setBackdrop(!backdrop)}
          margin={margin}
          fill
        />
        <Checkbox
          type="dense"
          color={isCloseButtonShown ? "primary" : "default"}
          checked={isCloseButtonShown}
          label="Show Close Button"
          onChange={() => setIsCloseButtonShown(!isCloseButtonShown)}
          margin={margin}
          fill
          style={{ lineHeight: 1 }}
        />
        <Checkbox
          type="dense"
          color={canClickOutside && isCloseButtonShown ? "primary" : "default"}
          checked={canClickOutside}
          disabled={!isCloseButtonShown}
          label="Click Outside to Close"
          onChange={() => setCanClickOutside(!canClickOutside)}
          margin={margin}
          fill
          style={{ lineHeight: 1 }}
        />
        <Checkbox
          type="dense"
          color={escapeKeyToClose && isCloseButtonShown ? "primary" : "default"}
          checked={escapeKeyToClose}
          disabled={!isCloseButtonShown}
          label="Escape Key to Close"
          onChange={() => setEscapeKeyToClose(!escapeKeyToClose)}
          margin={margin}
          fill
          style={{ lineHeight: 1 }}
        />
        <div style={{ paddingTop: "0.5rem" }}>
          <RadioGroup
            inline={false}
            label="Position:"
            name="Type group"
            onChange={() => null}
            selectedValue={position}
            className="demo-type-group"
          >
            <Radio
              type="dense"
              color={"right" === position ? "primary" : "default"}
              label="Right"
              value="right"
              onClick={handleClick}
              alignIndicator="left"
              checked={"right" === position && true}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"left" === position ? "primary" : "default"}
              label={"Left"}
              value="left"
              onClick={handleClick}
              alignIndicator="left"
              checked={"left" === position && true}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"top" === position ? "primary" : "default"}
              label="Top"
              value="top"
              onClick={handleClick}
              alignIndicator="left"
              checked={"top" === position && true}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"bottom" === position ? "primary" : "default"}
              label={"Bottom"}
              value="bottom"
              onClick={handleClick}
              alignIndicator="left"
              checked={"bottom" === position && true}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
          </RadioGroup>
        </div>
        <div>
          <RadioGroup
            inline={false}
            label="Size:"
            name="Size group"
            onChange={() => null}
            selectedValue={size}
            className="demo-type-group"
          >
            <Radio
              type="dense"
              color={"default" === size ? "primary" : "default"}
              label="Default"
              value="default"
              onClick={handleSetSize}
              alignIndicator="left"
              checked={size === "default"}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"small" === size ? "primary" : "default"}
              label="Small"
              value="small"
              onClick={handleSetSize}
              alignIndicator="left"
              checked={size === "small"}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"large" === size ? "primary" : "default"}
              label="Large"
              value="large"
              onClick={handleSetSize}
              alignIndicator="left"
              checked={size === "large"}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"580px" === size ? "primary" : "default"}
              label="Custom px"
              value="580px"
              onClick={handleSetSize}
              alignIndicator="left"
              checked={size === "580px"}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
            <Radio
              type="dense"
              color={"72%" === size ? "primary" : "default"}
              label="Custom %"
              value="72%"
              onClick={handleSetSize}
              alignIndicator="left"
              checked={size === "72%"}
              style={{ margin: "2px" }}
              onChange={() => null}
              fill
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default PropsGroup;
