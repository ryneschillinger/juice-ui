import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const {
    name,
    type,
    view,
    color,
    icon,
    disabled,
    fill,
    matchTargetWidth,
    centerAlign,
    filterable
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
  ${icon ? `<span class="attr">icon</span>="<span class="val">film</span>"` : ''}
  ${fill ? `<span class="attr">fill</span>` : ''}
  ${centerAlign ? `<span class="attr">centerAlign</span>` : ''}
  ${matchTargetWidth ? `<span class="attr">matchTargetWidth</span>` : ''}
  ${filterable ? `<span class="attr">filterable</span>` : ''}
  ${disabled ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
  <span class="attr">selectedItem</span>={<span class="js">item</span>}
  <span class="attr">onItemSelect</span>={<span class="act">setItem</span>}
  <span class="attr">onActiveItemChange</span>={() => <span class="act">doSomething</span>()}
/&gt;<br/>
<span class="cmnt">/*** JS DATA ***/</span><br />
<span class="js">const</span> <span class="el">TOP_100_FILMS</span> = [
  <span class="cmnt">// 'title' is the only required property</span>
  { <span class="attr">id</span>: <span class="num">1</span>, <span class="attr">title</span>: <span class="val">"The Shawshank Redemption"</span>, <span class="attr">label</span>: <span class="num">1994</span> },
  { <span class="attr">id</span>: <span class="num">2</span>, <span class="attr">title</span>: <span class="val">"The Godfather"</span>, <span class="attr">label</span>: <span class="num">1972</span> },
  <span class="cmnt">...</span>
];
<span class="js">const</span> [<span class="js">item</span>, <span class="act">setItem</span>] = <span class="el">React</span><span class="act">.useState</span>();
<span class="js">const</span> <span class="act">doSomething</span> = () => {
  <span class="cmnt">// Control the active item value and listen
  // for updates via the onActiveItemChange prop</span>
}
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
