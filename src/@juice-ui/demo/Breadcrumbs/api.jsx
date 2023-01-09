import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, color, from } = props;

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
      prop: "collapseFrom",
      type: (
        <>
          string = <i>start</i>
        </>
      ),
      desc: (
        <>
          Which direction the breadcrumbs should collapse from: start or end.
          Possible states: <b>start | end</b>
        </>
      )
    },
    {
      prop: "items",
      type: <>array</>,
      desc: (
        <>
          All breadcrumbs to display. Breadcrumbs that do not fit in the
          container will be rendered in an overflow menu instead.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Breadcrumbs</span>
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">collapseFrom</span>="<span class="val">${from}</span>"
  <span class="attr">items</span>={<span class="js">CrumbsItems</span>}
/&gt;

<span class="cmnt">/*** JS DATA ***/</span>
<span class="js">const</span> <span class="el">CrumbsItems</span> = [
  { <span class="attr">href</span>: <span class="val">"#"</span>, <span class="attr">icon</span>: <span class="val">"folder-close"</span>, <span class="attr">text</span>: <span class="val">"Home"</span> },
  { <span class="attr">href</span>: <span class="val">"#"</span>, <span class="attr">icon</span>: <span class="val">"folder-close"</span>, <span class="attr">text</span>: <span class="val">"Program Files"</span> },
  { <span class="attr">href</span>: <span class="val">"#"</span>, <span class="attr">icon</span>: <span class="val">"folder-close"</span>, <span class="attr">text</span>: <span class="val">"Common Files"</span> },
  { <span class="attr">href</span>: <span class="val">"#"</span>, <span class="attr">icon</span>: <span class="val">"folder-close"</span>, <span class="attr">text</span>: <span class="val">"Services"</span> },
  { <span class="attr">href</span>: <span class="val">"#"</span>, <span class="attr">icon</span>: <span class="val">"folder-close"</span>, <span class="attr">text</span>: <span class="val">"Payout"</span> },
  { <span class="attr">icon</span>: <span class="val">"document"</span>, <span class="attr">text</span>: <span class="val">"Invoice.txt"</span>, <span class="attr">current</span>: <span class="bool">true</span> }
];
`;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
