import React from "react";
import { Overview } from "../../OverviewComponent";
import { OverviewTemplate } from "../../OverviewText";

export const API = props => {
  const { type, view, name, color, isSec, isMsec, useAmPm, isArrow } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
    {
      prop: "color",
      type: (
        <>
          string = <i>default</i>
        </>
      ),
      desc: (
        <>
          {" "}
          This prop set the color of the component. Possible states:{" "}
          <b>
            {" "}
            default | primary | warning | danger | success | primary_alt |
            warning_alt | danger_alt | success_alt{" "}
          </b>
          . The default state is <b>default</b>.
        </>
      )
    },
    {
      prop: "precision",
      type: (
        <>
          string = <i>MINUTE</i>
        </>
      ),
      desc: (
        <>
          The precision of time the user can set. Possible states:
          <b>MINUTE | SECOND | MILLISECOND</b>. The default state is{" "}
          <b>MINUTE</b>.
        </>
      )
    },
    {
      prop: "showArrowButtons",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Whether to show arrows buttons for changing the time.</>
    },
    {
      prop: "useAmPm",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Whether to use a 12 hour format with an AM/PM select.</>
    },
    {
      prop: "value",
      type: <>Date</>,
      desc: (
        <>
          The currently set time. If this prop is provided, the component acts
          in a controlled manner.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">TimePicker</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">precision</span>="<span class="val">${isSec ? "SECOND" : (isMsec ? "MILLISECOND" : "MINUTE")}</span>"
  ${isArrow ? `<span class="attr">showArrowButtons</span>` : ''}
  ${useAmPm ? `<span class="attr">useAmPm</span>` : ''}
/&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
