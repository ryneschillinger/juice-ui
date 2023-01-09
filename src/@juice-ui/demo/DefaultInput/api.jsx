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
    isFill,
    color
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
  const Code = `&lt;<span class="el">Input</span>
  <span class="attr">type</span>="<span class="val">${isPass ? "password" : "text"}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">label</span>="<span class="val">Label</span>"
  <span class="attr">value</span>="<span class="val">Value</span>"
  <span class="attr">placeholder</span>="<span class="val">Placeholder...</span>"
  ${isDense ? `<span class="attr">dense</span>` : ''}
  ${isFill ? `<span class="attr">fill</span>` : ''}
  ${isClear ? `<span class="attr">clearButton</span>` : ''}
  ${isSuccess ? `<span class="attr">success</span>={<span class="js">successCondition</span>}` : ''}
  ${isError ? `<span class="attr">error</span>={<span class="js">errorCondition</span>}` : ''}
  ${isError ? `<span class="attr">errorHelperText</span>="<span class="val">Error message goes here</span>"` : ''}
/&gt;`
  ;
  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");
  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
