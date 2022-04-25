import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const {
    isDense,
    isPass,
    view,
    isClear,
    isSuccess,
    isError,
    isFill
  } = props;

  /**Overview */
  const OverviewText = (
    <OverviewTemplate name={"DefaultInput"} folder="Inputs/" />
  );

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
          <b> primary | default</b>. The default state is <b>primary</b>.
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
      prop: "label",
      type: <>string</>,
      desc: <>Label text.</>
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
      prop: "errorHelperText",
      type: <>string</>,
      desc: <>Helper text.</>
    },
    {
      prop: "clearButton",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Use or not clear button (cross icon) to clear value.</>
    },
    {
      prop: "success",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Component success state.</>
    },
    {
      prop: "error",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Component error state.</>
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
  const Code = `&lt;<span class="val">Input</span>
  <span class="attr">type</span>="<span class="val">${isPass ? "password" : "text"}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">dense</span>={<span class="bool">${isDense ? "true" : "false"}</span>}
  <span class="attr">color</span>="<span class="val">primary</span>"
  <span class="attr">label</span>="<span class="val">Label</span>"
  <span class="attr">value</span>="<span class="val">Value</span>"
  <span class="attr">placeholder</span>="<span class="val">Placeholder</span>"
  <span class="attr">clearButton</span>={<span class="bool">${isClear ? "true" : "false"}</span>}
  <span class="attr">success</span>={<span class="bool">${isSuccess ? "true" : "false"}</span>}
  <span class="attr">error</span>={<span class="bool">${isError ? "true" : "false"}</span>}
  <span class="attr">fill</span>={<span class="bool">${isFill ? "true" : "false"}</span>}
  <span class="attr">errorHelperText</span>=${
    isError ? '"<span class="val">This person does not exist</span>"' : '{<span class="bool">null</span>}'
  }
/&gt;`
  ;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
