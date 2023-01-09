import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { type, view, isFill, color, placeholder } = props;

  /**Overview */
  const OverviewText = (
    <OverviewTemplate name={"SearchInput"} folder="Inputs/" />
  );

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
          This prop set the shape of the component. Possible states:
          <b> def | dense </b>. the default state is <b>def</b>.
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
          This prop set the view of the component. Possible states:
          <b> smooth | outlined | raised | filled </b>. The default state is{" "}
          <b>smooth</b>.
        </>
      )
    },
    {
      prop: "color",
      type: (
        <>
          string = <i>primary</i>
        </>
      ),
      desc: (
        <>
          This prop set the color of the component. Possible states:
          <b> primary </b>. The default state is <b>primary</b>.
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
      prop: "value",
      type: <>string</>,
      desc: <>Form value of the input, for controlled usage.</>
    },
    {
      prop: "placeholder",
      type: <>string</>,
      desc: <>Placeholder text in the absence of any value.</>
    },
    {
      prop: "onSearch",
      type: <>func</>,
      desc: <>Search function</>
    },
    {
      prop: "fill",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether this button should expand to fill its container. The default
          state is <b>false</b>.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** COMPONENT EXAMPLE ***/</span>
&lt;<span class="el">SearchInput</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">value</span>="<span class="val">Value</span>"
  <span class="attr">placeholder</span>="<span class="val">Search for something...</span>"
  <span class="attr">onSearch</span>={<span class="act">searchFunc</span>}
  ${isFill ? `<span class="attr">fill</span>` : ""}
/&gt;<br />
<span class="cmnt">/*** SEARCH FUNCTION EXAMPLE ***/</span>
<span class="js">const</span> searchFunc = () <span class="js">=></span> {
  <span class="js">const</span> DemoToast = {
    <span class="attr">message</span>: &grave;<span class="val">Sorry, we can't find anything about "</span><span style="color: white">$</span>{<span class="js">value</span>}<span class="val">"</span>.&grave;,
    <span class="attr">icon</span>: <<span class="el">Icon</span> <span class="attr">icon</span>="<span class="val">error</span>" <span class="attr">iconSize</span>={<span class="num">24</span>} />
  };
  <span class="js">isRef</span><span class="act">.show(</span><span class="js">DemoToast</span><span class="act">)</span>;
};
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");
  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
