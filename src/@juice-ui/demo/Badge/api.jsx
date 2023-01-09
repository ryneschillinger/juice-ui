import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, view, color, isHide, isDot, isLeft, isBottom, dense } = props;
  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
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
          <b> filled | smooth | outlined </b>. The default state is{" "}
          <b>filled</b>.
        </>
      )
    },
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
      prop: "className",
      type: "string",
      desc:
        "A space-delimited list of class names to pass along to a child element."
    },
    {
      prop: "value",
      type: "string",
      desc: <>Badge value. Haven't default state.</>
    },
    {
      prop: "dense",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Whether this badge should use minimal styles.</>
    },
    {
      prop: "hide",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the badge will be hidden. The default state is{" "}
          <b>false</b>
        </>
      )
    },
    {
      prop: "dot",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the badge form will be "dot". The default state is{" "}
          <b>false</b>
        </>
      )
    },
    {
      prop: "left",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the badge position will be "left". The default
          position of badge is on the right. The default state is <b>false</b>
        </>
      )
    },
    {
      prop: "bottom",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the badge position will be "bottom". The default
          position of badge is on the top. The default state is <b>false</b>
        </>
      )
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** DEMO #1 ***/</span>
&lt;<span class="el">Badge</span>
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">view</span>="<span class="val">New</span>"
  ${dense ? `<span class="attr">dense</span>` : ''}
  ${isDot ? `<span class="attr">dot</span>` : ''}
  ${isLeft ? `<span class="attr">left</span>` : ''}
  ${isBottom ? `<span class="attr">bottom</span>` : ''}
  ${isHide ? `<span class="attr">hide</span>={<span class="js">hideCondition</span>}` : ''}
&gt;
  &lt;<span class="el">Button</span> <span class="attr">text</span>="<span class="val">Button</span>" <span class="attr">view</span>="<span class="val">outlined</span>" /&gt;
&lt;/<span class="el">Badge</span>&gt;<br />
<span class="cmnt">/*** DEMO #2 ***/</span>
&lt;<span class="el">Badge</span>
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">view</span>="<span class="val">9</span>"
  <span class="attr">style</span>={{ <span class="attr">marginLeft</span>: <span class="val">"4rem"</span> }}
  ${dense ? `<span class="attr">dense</span>` : ''}
  ${isDot ? `<span class="attr">dot</span>` : ''}
  ${isLeft ? `<span class="attr">left</span>` : ''}
  ${isBottom ? `<span class="attr">bottom</span>` : ''}
  ${isHide ? `<span class="attr">hide</span>={<span class="js">hideCondition</span>}` : ''}
&gt;
  &lt;<span class="el">Button</span> <span class="attr">text</span>="<span class="val">A</span>" <span class="attr">type</span>="<span class="val">circle</span>" <span class="attr">dense</span> <span class="attr">view</span>="<span class="val">filled</span>" /&gt;
&lt;/<span class="el">Badge</span>&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
