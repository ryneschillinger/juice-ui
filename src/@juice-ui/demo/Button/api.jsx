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
    rightIcon,
    fill,
    dis,
    isLoad,
    dense
  } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
    {
      prop: "type",
      type: (
        <>
          string = <i>default</i>
        </>
      ),
      desc: (
        <>
          This prop set the shape of the component. Possible states:{" "}
          <b> default | card | action | circle | icon</b>. The default state is{" "}
          <b>default</b>.
        </>
      )
    },
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
          <b> filled | flat | smooth | outlined | raised </b>. The default state
          is <b>filled</b>.
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
      desc: <>Action text. Haven't default state.</>
    },
    {
      prop: "dense",
      type: "boolean",
      desc: <>Whether this button should use minimal styles.</>
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
      prop: "icon",
      type: "string ",
      desc: (
        <>
          Name of a Blueprint UI icon to render before the text. For example,{" "}
          <b>"tick"</b>
        </>
      )
    },
    {
      prop: "rightIcon",
      type: "string | element",
      desc: (
        <>
          Name of a Blueprint UI icon (or an icon element) to render before the
          text.
        </>
      )
    },
    {
      prop: "loading",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          If set to true, the button will display a centered loading spinner
          instead of its contents. The width of the button is not affected by
          the value of this prop. The default state is <b>false</b>
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
          If set to true, the button will be disabled. The default state is{" "}
          <b>false</b>
        </>
      )
    },
    {
      prop: "onClick",
      type: "func",
      desc: <>Click event handler.</>
    },
    {
      prop: "elementRef",
      type: "any",
      desc: (
        <>
          A ref handler that receives the native HTML element backing this
          component.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Button</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  ${type !== "circle" && type !== "icon" ? `<span class="attr">text=</span>"<span class="val">${type[0].toUpperCase() + type.substring(1)}</span>"` : ''}
  <span class="attr">onClick</span>={() <span class="js">=></span> <span class="act">doSomething()</span></span>}
  ${dense ? `<span class="attr">dense</span>` : ''}
  ${fill ? `<span class="attr">fill</span>` : ''}
  ${type === "circle" || type === "icon" || icon === true
    ? '<span class="attr">icon</span>="<span class="val">plus</span>"</span>'
    : ''}
  ${
    type !== "circle" &&
    type !== "card" &&
    type !== "icon" &&
    rightIcon === true
      ? '<span class="attr">rightIcon</span>="<span class="val">cross</span>"</span>'
      : ''
  }
  ${isLoad ? `<span class="attr">loading</span>` : ''}
  ${dis ? `<span class="attr">disabled</span>={<span class="js">disableCondition</span>}` : ''}
/&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
