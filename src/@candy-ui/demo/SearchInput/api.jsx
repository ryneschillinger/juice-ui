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
  const Code = `&lt;<span class="val">SearchInput</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">placeholder</span>="<span class="val">Placeholder</span>"
  <span class="attr">value</span>="<span class="val">Value</span>"
  <span class="attr">fill</span>={<span class="bool">${isFill ? "true" : "false"}</span>}
  <span class="attr">onSearch</span>={<span class="js">() => someFunc()</span>}
/&gt;`;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
