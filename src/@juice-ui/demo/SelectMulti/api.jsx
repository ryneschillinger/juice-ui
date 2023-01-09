import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const {
    name,
    type,
    view,
    color,
    disabled,
    fill,
    matchTargetWidth,
    allowCreate,
  } = props;

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
          <b> filled | smooth | outlined | raised </b>. The default state is{" "}
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
      prop: "text",
      type: "string",
      desc: <>Select button text.</>
    },
    {
      prop: "dense",
      type: "boolean",
      desc: <>Whether this button should use minimal styles.</>
    },
    {
      prop: "position = 'bottom-left'",
      type: "string ",
      desc: (
        <>
          The position (relative to the target) at which the popover should
          appear. The default value is <b>bottom-left</b>. Possible values:{" "}
          <b>
            "bottom-left" | "auto" | "auto-end" | "auto-start" | "bottom" |
            "bottom-right" | "left" | "left-bottom" | "left-top" | "right" |
            "right-bottom" | "right-top" | "top" | "top-left" | "top-right"
          </b>
        </>
      )
    },
    {
      prop: "content",
      type: <>string | Element</>,
      desc: (
        <>
          The content displayed inside the popover. This can instead be provided
          as the second element in children (first is target).
        </>
      )
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** COMPONENT EXAMPLE ***/</span><br />
&lt;<span class="el">Select</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">items</span>={<span class="js">TOP_100_FILMS</span>}
  <span class="attr">placeholder</span>="<span class="val">Select a film...</span>"
  <span class="attr">onActiveItemChange</span>={() => <span class="act">doSomething</span>()}
  ${fill ? `<span class="attr">fill</span>` : ''}
  ${matchTargetWidth ? `<span class="attr">matchTargetWidth</span>` : ''}
  ${disabled ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
  ${allowCreate ? `<span class="attr">allowCreate</span>` : ''}
  ${allowCreate ? `<span class="attr">newItemMap</span>={<span class="js">newItemObjMap</span>}` : ''}
/&gt;<br/>
<span class="cmnt">/*** JS DATA ***/</span><br />
<span class="js">const</span> <span class="el">TOP_100_FILMS</span> = [
  <span class="cmnt">// 'title' is the only required property</span>
  { <span class="attr">id</span>: <span class="num">1</span>, <span class="attr">title</span>: <span class="val">"The Shawshank Redemption"</span>, <span class="attr">label</span>: <span class="num">1994</span> },
  { <span class="attr">id</span>: <span class="num">2</span>, <span class="attr">title</span>: <span class="val">"The Godfather"</span>, <span class="attr">label</span>: <span class="num">1972</span> },
  <span class="cmnt">...</span>
];
${allowCreate ? `
<span class="cmnt">// You can supply custom methods for formatting
// the title and/or label of newly-added items</span>
<span class="js">const</span> <span class="el">capitalizeWords</span> = <span class="js">title</span> => (
  <span class="js">title.</span><span class="act">toLowerCase</span>()<span class="act">.replace</span>(<span class="val">/(^\w{1})|(\s{1}\w{1})/g</span>, <span class="js">match</span> => <span class="js">match.</span><span class="act">toUpperCase()</span>)
);
<span class="js">const</span> <span class="el">newItemObjMap</span> = {
  <span class="attr">title</span>: <span class="act">capitalizeWords</span>,
  <span class="attr">label</span>: <span class="js">new</span> <span class="el">Date</span>()<span class="act">.getFullYear</span>()
};
` : ''}
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
