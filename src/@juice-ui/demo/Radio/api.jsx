import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, type, color, inline, dis, help, rtl, right, os } = props;

  const optionalText = (
    <>
      Also you can use the <b>RadioGroup</b> component with a series of Radio
      children.
      <br />
      You need import component to your code (сheck component path is right):
      <pre>{`import { RadioGroup } from "../../core/RadioGroup";`}</pre>
    </>
  );

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} text={optionalText} />;

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
          <b> flat | smooth | outlined | raised</b>. The default state is{" "}
          <b>flat</b>.
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
      desc: "Text label for the control."
    },
    {
      prop: "value",
      type: <>string</>,
      desc: "Value of this radio."
    },
    {
      prop: "helperText",
      type: <>string</>,
      desc: "Second line text."
    },
    {
      prop: "inline",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether the radio buttons are to be displayed inline horizontally. The
          default state is <b>false</b>.
        </>
      )
    },
    {
      prop: "checked",
      type: <>boolean</>,
      desc: "Whether the control is checked."
    },
    {
      prop: "rightPosition",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: "Alignment of the indicator within container."
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
      desc: "Event handler invoked when input value is changed."
    },
    {
      prop: "rtl",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: 'Set the text direction to "right-to-right".'
    }
  ];

  /** Code source */
  const Code = `
&lt;<span class="el">RadioGroup</span> <span class="attr">label</span>="<span class="val">Select platform:</span>" <span class="attr">name</span>="<span class="val">Demo group</span>"&gt;
  &lt;<span class="el">Radio</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">value</span>="<span class="val">win</span>"
    <span class="attr">label</span>="<span class="val">Windows</span>"
    <span class="attr">style</span>={{ <span class="attr">margin</span>: <span class="val">"0.5rem"</span> }}
    <span class="attr">onClick</span>={() <span class="js">=></span> <span class="act">setOS(</span><span class="val">"win"</span><span class="act">)</span>}
    <span class="attr">onChange</span>={() <span class="js">=></span> <span class="act">doSomething()</span>}
    <span class="attr">checked</span>={<span class="js">os</span> === "<span class="val">win</span>"}
    ${inline ? `<span class="attr">inline</span>` : ''}
    ${help ? `<span class="attr">helperText</span>="<span class="val">Optional subcaption</span>"` : ''}
    ${right ? `<span class="attr">rightPosition</span>` : ''}
    ${rtl ? `<span class="attr">rtl</span>` : ''}
    ${dis ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
  /&gt;
  &lt;<span class="el">Radio</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">value</span>="<span class="val">lin</span>"
    <span class="attr">label</span>="<span class="val">Linux</span>"
    <span class="attr">style</span>={{ <span class="attr">margin</span>: <span class="val">"0.5rem"</span> }}
    <span class="attr">onClick</span>={() <span class="js">=></span> <span class="act">setOS(</span><span class="val">"lin"</span><span class="act">)</span>}
    <span class="attr">onChange</span>={() <span class="js">=></span> <span class="act">doSomething()</span>}
    <span class="attr">checked</span>={<span class="js">os</span> === "<span class="val">lin</span>"}
    ${inline ? `<span class="attr">inline</span>` : ''}
    ${help ? `<span class="attr">helperText</span>="<span class="val">Optional subcaption</span>"` : ''}
    ${right ? `<span class="attr">rightPosition</span>` : ''}
    ${rtl ? `<span class="attr">rtl</span>` : ''}
    ${dis ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
  /&gt;
  &lt;<span class="el">Radio</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">value</span>="<span class="val">and</span>"
    <span class="attr">label</span>="<span class="val">Android</span>"
    <span class="attr">style</span>={{ <span class="attr">margin</span>: <span class="val">"0.5rem"</span> }}
    <span class="attr">onClick</span>={() <span class="js">=></span> <span class="act">setOS(</span><span class="val">"and"</span><span class="act">)</span>}
    <span class="attr">onChange</span>={() <span class="js">=></span> <span class="act">doSomething()</span>}
    <span class="attr">checked</span>={<span class="js">os</span> === "<span class="val">and</span>"}
    ${inline ? `<span class="attr">inline</span>` : ''}
    ${help ? `<span class="attr">helperText</span>="<span class="val">Optional subcaption</span>"` : ''}
    ${right ? `<span class="attr">rightPosition</span>` : ''}
    ${rtl ? `<span class="attr">rtl</span>` : ''}
    ${dis ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
  /&gt;
&lt;/<span class="el">RadioGroup</span>&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
