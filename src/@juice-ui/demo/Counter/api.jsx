import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, type, view, color, vertical, dis, dense } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
    {
      prop: "type",
      type: (
        <>
          string = <i>default</i>
        </>
      ),
      desc: (
        <>
          This prop set the shape of the component. Possible states:{" "}
          <b> default | square</b>. The default state is <b>default</b>.
        </>
      )
    },
    {
      prop: "view",
      type: (
        <>
          string = <i>filled</i>
        </>
      ),
      desc: (
        <>
          {" "}
          This prop set the view of the component. Possible states:{" "}
          <b> filled | flat | smooth | outlined | raised </b>. The default state
          is <b>filled</b>.
        </>
      )
    },
    {
      prop: "leftColor",
      type: (
        <>
          string = <i>default</i>
        </>
      ),
      desc: (
        <>
          {" "}
          This prop set the color of the left button. Possible states:{" "}
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
      prop: "value",
      type: <>number</>,
      desc: <>This prop set a value of the component.</>
    },
    {
      prop: "rightColor",
      type: (
        <>
          string = <i>default</i>
        </>
      ),
      desc: (
        <>
          This prop set a color of the right button. Default state is{" "}
          <b>default</b>.
        </>
      )
    },
    {
      prop: "leftIcon",
      type: <>string | element</>,
      desc: (
        <>
          Icon of the left button. Name of a Blueprint UI icon (or an icon
          element) to render before the text. For example, <b>"tick"</b> or{" "}
          <b>{`<Icon icon="tick" iconSize={24} />`}</b>
        </>
      )
    },
    {
      prop: "rightIcon",
      type: <>string | element</>,
      desc: <>Icon of the right button. </>
    },
    {
      prop: "dense",
      type: <>boolean</>,
      desc: <>Whether this button should use minimal styles.</>
    },
    {
      prop: "vertical",
      type: <>boolean</>,
      desc: <>Set a vertical position of buttons.</>
    },
    {
      prop: "disabled",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the button will be disabled. The default state is{" "}
          <b>false</b>
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Counter</span>
  <span class="attr">type</span>="<span class="val">${type}</span>" 
  <span class="attr">view</span>="<span class="val">${view}</span>" 
  <span class="attr">leftColor</span>="<span class="val">default</span>"
  <span class="attr">rightColor</span>="<span class="val">${color}</span>"
  <span class="attr">value</span>={<span class="num">0</span>}
  <span class="attr">leftIcon</span>="<span class="val">${vertical ? "chevron-down" : "minus"}</span>"
  <span class="attr">rightIcon</span>="<span class="val">${vertical ? "chevron-up" : "plus"}</span>"
  <span class="attr">dense</span>={<span class="bool">${dense ? "true" : "false"}</span>}
  <span class="attr">vertical</span>={<span class="bool">${vertical ? "true" : "false"}</span>}
  <span class="attr">disabled</span>={<span class="bool">${dis ? "true" : "false"}</span>}
/&gt;`
  ;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
