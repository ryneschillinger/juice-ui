import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, view, color, isInter, isCustomWidth } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
    {
      prop: "type",
      type: (
        <>
          string = <i>def</i>
        </>
      ),
      desc: (
        <>
          This prop set the shape of the component. Possible states:{" "}
          <b> def </b>. The default state is <b>def</b>.
        </>
      )
    },
    {
      prop: "view",
      type: (
        <>
          string = <i>smooth</i>
        </>
      ),
      desc: (
        <>
          This prop set the view of the component. Possible states:{" "}
          <b> filled | smooth | outlined| raised </b>. The default state is{" "}
          <b>smooth</b>.
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
          This prop set the color of the component. Possible states:{" "}
          <b>
            default | primary | warning | danger | success | primary_alt |
            warning_alt | danger_alt | success_alt{" "}
          </b>
          . The default state is <b>default</b>.
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
      prop: "interactive",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether the card should respond to user interactions. If set to true,
          hovering over the card will increase the card's elevation and change
          the mouse cursor to a pointer.
        </>
      )
    },
    {
      prop: "onClick",
      type: <>func</>,
      desc: (
        <>
          Callback invoked when the card is clicked. Recommended when
          interactive is true.
        </>
      )
    },
    {
      prop: "children",
      type: <>any</>,
      desc: <>Card content.</>
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Card</span>
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  ${isCustomWidth ? `<span class="attr">style</span>={{ <span class="attr">maxWidth</span>: <span class="val">"450px"</span> }}` : ''}
  ${isInter ? `<span class="attr">interactive</span>` : ''}
  ${isInter ? `<span class="attr">onClick</span>={() <span class="js">=> doSomething()</span>)</span>}` : ''}
&gt;
  <span class="cmnt">{/* Card content goes here */}</span>
  &lt;<span class="el">Typography</span> <span class="attr">type</span>="<span class="val">h6</span>" <span class="attr">large</span> <span class="attr">style</span>={{ <span class="attr">paddingBottom</span>: <span class="val">"1rem"</span> }} <span class="attr">colorStep</span>={${view === 'filled' ? '<span class="num">0</span>' : '<span class="num">100</span>'}}&gt;
    Card component example
  &lt;/<span class="el">Typography</span>&gt;
  &lt;<span class="el">Typography</span> <span class="attr">colorStep</span>={${view === 'filled' ? '<span class="num">0</span>' : '<span class="num">100</span>'}}&gt;
    You can put any content in this area here, including customized components and HTML elements.
  &lt;/<span class="el">Typography</span>&gt;
&lt;/<span class="el">Card</span>&gt;`
;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
