import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const {
    name,
    type,
    color,
    isDemo,
    dis,
    indet,
    help,
    right,
    fill,
    rtl
  } = props;

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
          This prop set the shape of the component. Possible states:
          <b> def | dense </b>. The default state is <b>def</b>.
        </>
      )
    },
    {
      prop: "view",
      type: (
        <>
          string = <i>flat</i>
        </>
      ),
      desc: (
        <>
          This prop set the view of the component. Possible states:{" "}
          <b> flat </b>. The default state is <b>flat</b>.
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
      type: <>string</>,
      desc:
        "A space-delimited list of class names to pass along to a child element."
    },
    {
      prop: "label",
      type: <>string</>,
      desc: <>Text label for the control.</>
    },
    {
      prop: "helperText",
      type: <>string</>,
      desc: <>Second line text</>
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
    },
    {
      prop: "checked",
      type: <>boolean</>,
      desc: <>Whether the control is checked.</>
    },
    {
      prop: "right",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Alignment of the indicator within container.</>
    },
    {
      prop: "indeterminate",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether this checkbox is indeterminate, or "partially checked." The
          checkbox will appear with a small dash instead of a tick to indicate
          that the value is not exactly true or false. The default state is
          <b>false</b>
        </>
      )
    },
    {
      prop: "disabled",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the component will be disabled. The default state is
          <b>false</b>
        </>
      )
    },
    {
      prop: "onChange",
      type: <>func</>,
      desc: <>Event handler invoked when input value is changed.</>
    },
    {
      prop: "rtl",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: <>Set the text direction to "right-to-left".</>
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Checkbox</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">label</span>="${rtl ? '<span class="val">خانة الاختيار</span>' : '<span class="val">Checkbox</span>'}"
  <span class="attr">checked</span>={${isDemo ? '<span class="bool">true</span>' : '<span class="bool">false</span>'}}
  ${indet ? `<span class="attr">indeterminate</span>={<span class="js">indetCondition</span>}` : ''}
  ${help
    ? `<span class="attr">helperText</span>=${
      rtl
        ? '"<span class="val">تسمية توضيحية اختيارية</span>"'
        : '"<span class="val">Optional subcaption</span>"'
      }`
    : ''
  }
  ${right || rtl ? `<span class="attr">right</span>` : ''}
  ${rtl ? `<span class="attr">rtl</span>` : ''}
  ${fill ? `<span class="attr">fill</span>` : ''}
  ${dis ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
  <span class="attr">onChange</span>={() <span class="js">=></span> <span class="act">doSomething()</span></span>}
/&gt;`
;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
