import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const {
    name,
    type,
    color,
    isAva,
    dis,
    isSelect,
    isIcon,
    isRIcon,
    isRemovable,
    isNumber,
    isRound
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
          string = <i>smooth</i>
        </>
      ),
      desc: (
        <>
          This prop set the view of the component. Possible states:
          <b> smooth | outlined </b>. The default state is <b>smooth</b>.
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
      prop: "tag",
      type: <>string</>,
      desc: <>Text label for the control.</>
    },
    {
      prop: "round",
      type: <>boolean = true</>,
      desc: <>Whether this tag should have rounded ends.</>
    },
    {
      prop: "removable",
      type: <>boolean</>,
      desc: <>Show remove button.</>
    },
    {
      prop: "onRemove",
      type: <>func</>,
      desc: <>Event handler for remove button.</>
    },
    {
      prop: "withTick",
      type: <>boolean</>,
      desc: <>Render Tick animation.</>
    },
    {
      prop: "withAvatar",
      type: <>string</>,
      desc: <>Render avatar image before the text.</>
    },
    {
      prop: "withNumber",
      type: <>string</>,
      desc: <>Render number before the text.</>
    },
    {
      prop: "icon",
      type: <>string | element</>,
      desc: (
        <>
          Name of a Blueprint UI icon (or an icon element) to render before the
          text. For example, <b>"tick"</b> or
          <b>{`<Icon icon="tick" iconSize={24} />`}</b>
        </>
      )
    },
    {
      prop: "rightIcon",
      type: <>string | element</>,
      desc: (
        <>
          Name of a Blueprint UI icon (or an icon element) to render before the
          text.
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
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Chip</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">tag</span>="<span class="val">${isAva ? "Brandon Daubel" : "Locate"}</span>"
  <span class="attr">withTick</span>={<span class="bool">${isSelect ? "true" : "false"}</span>}
  <span class="attr">icon</span>="<span class="val">${isIcon && "locate"}</span>"
  <span class="attr">rightIcon</span>=${isRIcon ? '"<span class="val">import</span>"' : '{<span class="bool">null</span>}'}
  <span class="attr">removable</span>={<span class="bool">${isRemovable ? "true" : "false"}</span>}
  <span class="attr">onRemove</span>=${isRemovable ? '{<span class="js">() => removeFunction()</span>}' : '{<span class="bool">null</span>}'}
  <span class="attr">disabled</span>={<span class="bool">${dis ? "true" : "false"}</span>}
  <span class="attr">round</span>={<span class="bool">${isAva ? "true" : isRound ? "true" : "false"}</span>}
  <span class="attr">withNumber</span>=${isNumber ? '<span class="num">123</span>' : '{<span class="bool">null</span>}'} 
  <span class="attr">withAvatar</span>={${isAva ? '<span class="js">Avatar_file.jpg</span>' : '<span class="bool">null</span>'}}
 />
 `;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
