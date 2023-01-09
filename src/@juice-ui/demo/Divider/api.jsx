import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, size, color, colorStep } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} />;

  /**API */
  const APIData = [
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
      type: "string",
      desc:
        "A space-delimited list of class names to pass along to a child element."
    },
    {
      prop: "colorStep",
      type: (
        <>
          integer = <i>100</i>
        </>
      ),
      desc: (
        <>
          A Color depth. Step is 10. Min value is 0, max value is 100. The
          default value is 20.
        </>
      )
    },
    {
      prop: "size",
      type: "integer",
      desc: <>Height of the divider in px. The default value is 2.</>
    },
    {
      prop: "style",
      type: "object",
      desc: <>Inline CSS style</>
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">Divider</span>  
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">size</span>={<span class="num">${size}</span>}    
  <span class="attr">colorStep</span>={<span class="num">${colorStep}</span>} 
/&gt;`
  ;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
