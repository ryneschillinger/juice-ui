import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, view, color, isTitle, isIcon, type, isCustomWidth } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
    {
      prop: "dense",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          This prop set the dense shape of the component. The default state is{" "}
          <b>false</b>.
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
      prop: "title",
      type: <>string</>,
      desc: <>String content of optional title element.</>
    },
    {
      prop: "icon",
      type: <>string</>,
      desc: <>Name of a Blueprint UI icon to render on the left side.</>
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Callout</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  ${isIcon ? `<span class="attr">icon</span>="<span class="val">info-sign</span>"` : ''}
  ${isTitle ? `<span class="attr">title</span>="<span class="val">Visually important content</span>"` : ''}
  ${isCustomWidth ? `<span class="attr">style</span>={{ <span class="attr">maxWidth</span>: <span class="val">"450px"</span> }}` : ''}
&gt; 
  The component is a simple wrapper around the CSS API that provides props
  for modifiers and optional title element. Any additional HTML props will
  be spread to the rendered &lt;div&gt; element.
&lt;/<span class="el">Callout</span>&gt;
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
