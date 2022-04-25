import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, view, color, value, valueAmount, size } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
    {
      prop: "view",
      type: (
        <>
          string = <i>smooth</i>
        </>
      ),
      desc: (
        <>
          {" "}
          This prop set the view of the component. Possible states:{" "}
          <b> smooth, filled </b>. The default state is <b>smooth</b>.
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
      type: "undefined | number",
      desc: (
        <>
          A value between 0 and 1 (inclusive) representing how far along the
          operation is. Values below 0 or above 1 will be interpreted as 0 or 1
          respectively. Omitting this prop will result in an "indeterminate"
          spinner where the head spins indefinitely.
        </>
      )
    },
    {
      prop: "size",
      type: "undefined | number",
      desc: (
        <>
          Width and height of the spinner in pixels. The size cannot be less
          than 10px. Default size is 50px.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `  
&lt;<span class="el">Spinner</span>
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  ${value ? `<span class="attr">value</span>={<span class="num">${valueAmount/100}</span>}` : ''}
  <span class="attr">size</span>={<span class="num">${size}</span>}
/&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
