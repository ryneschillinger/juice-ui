import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, color, value, vertical } = props;

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
          This prop set the color of the component. Possible states:
          <b>
            default | primary | warning | danger | success | primary_alt |
            warning_alt | danger_alt | success_alt
          </b>
          . The default state is <b>primary</b>.
        </>
      )
    },
    {
      prop: "className",
      type: <>string</>,
      desc:
        "A space-delimited list of class names to pass along to a child element."
    },
    {
      prop: "vertical",
      type: <>boolean</>,
      desc: <>Whether to show the slider in a vertical orientation.</>
    },
    {
      prop: "onChange",
      type: <>func</>,
      desc: <>Callback invoked when the value changes.</>
    },
    {
      prop: "value",
      type: <>number</>,
      desc: <>Value of slider.</>
    },
    {
      prop: "initialValue",
      type: <>number = 0</>,
      desc: (
        <>
          Initial value of the slider. This determines the other end of the
          track fill: from initialValue to value.
        </>
      )
    },
    {
      prop: "labelPrecision",
      type: <>number</>,
      desc: (
        <>
          Number of decimal places to use when rendering label value. Default
          value is the number of decimals used in the stepSize prop. This prop
          has no effect if you supply a custom labelRenderer callback.
        </>
      )
    },
    {
      prop: "labelStepSize",
      type: <>number</>,
      desc: <>Increment between successive labels. Must be greater than zero.</>
    },
    {
      prop: "labelRenderer",
      type: <>boolean | (value: number) =&gt; string | Element = true</>,
      desc: (
        <>
          Callback to render a single label. Useful for formatting numbers as
          currency or percentages. If true, labels will use number value
          formatted to labelPrecision decimal places. If false, labels will not
          be shown.
        </>
      )
    },
    {
      prop: "stepSize",
      type: <>number</>,
      desc: (
        <>
          Increment between successive values; amount by which the handle moves.
          Must be greater than zero.
        </>
      )
    },

    {
      prop: "min",
      type: <>number</>,
      desc: <>Minimum value of the slider.</>
    },
    {
      prop: "max",
      type: <>number</>,
      desc: <>Maximum value of the slider.</>
    }
  ];

  /** Code source */
  const Code = `  
&lt;<span class="el">Slider</span>
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">min</span>="<span class="val">${0}</span>"
  <span class="attr">max</span>="<span class="val">${100}</span>"
  <span class="attr">initialValue</span>="<span class="val">${0}</span>"
  <span class="attr">value</span>="<span class="val">${value}</span>"
  <span class="attr">stepSize</span>="<span class="val">${5}</span>"
  <span class="attr">labelPrecision</span>="<span class="val">${5}</span>"
  <span class="attr">labelStepSize</span>="<span class="val">${25}</span>"
  <span class="attr">onChange</span>={<span class="js">value =></span> <span class="act">setValue</span>(<span class="num">${value}</span>)</span>}
  <span class="attr">labelRender</span>={<span class="js">value =></span> <span class="num">${value}</span> + "<span class="val">%</span>"}
  ${vertical ? `<span class="attr">vertical</span>={<span class="bool">${vertical ? "true" : "false"}</span>}` : ''}
/&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
