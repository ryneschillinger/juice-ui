import React from "react";

/**Import core component (variable)*/
import { RadioGroup } from "@blueprintjs/core";
import Radio from "../../core/Radio";

export const DEMO = props => {
  const { type, view, color, os, rtl, help, dis, setOS, inline, right } = props;
  return (
    <RadioGroup label="Select platform:" name="Demo group">
      <Radio
        type={type}
        view={view}
        color={color}
        value="win"
        checked={os === "win" && true}
        onClick={() => setOS("win")}
        label={rtl ? "الخريف" : "Windows"}
        rightPosition={right}
        rtl={rtl}
        disabled={dis}
        helperText={
          help ? (rtl ? "الطبيعة تأتي في الحياة" : "Optional subcaption") : null
        }
        inline={inline}
        style={{ margin: "0.5rem" }}
        onChange={() => {}}
      />
      <Radio
        type={type}
        view={view}
        color={color}
        value="lin"
        checked={os === "lin" && true}
        onClick={() => setOS("lin")}
        label={rtl ? "الخريف" : "Linux"}
        rightPosition={right}
        rtl={rtl}
        disabled={dis}
        helperText={
          help ? (rtl ? "الطبيعة تأتي في الحياة" : "Optional subcaption") : null
        }
        inline={inline}
        style={{ margin: "0.5rem" }}
        onChange={() => {}}
      />
      <Radio
        type={type}
        view={view}
        color={color}
        value="and"
        checked={os === "and" && true}
        onClick={() => setOS("and")}
        label={rtl ? "الخريف" : "Android"}
        rightPosition={right}
        rtl={rtl}
        disabled={dis}
        helperText={
          help ? (rtl ? "الطبيعة تأتي في الحياة" : "Optional subcaption") : null
        }
        inline={inline}
        style={{ margin: "0.5rem" }}
        onChange={() => {}}
      />
    </RadioGroup>
  );
};
