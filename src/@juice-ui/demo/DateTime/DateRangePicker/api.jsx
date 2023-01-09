import React from "react";
import { Overview } from "../../OverviewComponent";
import { OverviewTemplate } from "../../OverviewText";

export const API = props => {
  const {
    name,
    type,
    view,
    color,
    shortcuts,
    allowSingleDayRange
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
          This prop set shape of the component. Possible states:{" "}
          <b> default | card | action | circle | icon</b>. Default state is{" "}
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
          This prop set view of the component. Possible states:{" "}
          <b> filled | flat | smooth | outlined | raised </b>. Default state is{" "}
          <b>filled</b>.
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
          This prop set color of the component. Possible states:{" "}
          <b>
            {" "}
            default | primary | warning | danger | success | primary_alt |
            warning_alt | danger_alt | success_alt{" "}
          </b>
          . Default state is <b>default</b>.
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
      prop: "shortcuts",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether the left sidebar displaying a list of date range buttons should be shown.
        </>
      )
    },
    {
      prop: "allowSingleDayRange",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether the option to select the single day range of "Today" should be shown in the shortcuts list.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="el">DateRangePicker</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">shortcuts</span>={<span class="bool">${shortcuts}</span>}
  <span class="attr">allowSingleDayRange</span>={<span class="bool">${allowSingleDayRange}</span>}
/&gt;`
  ;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
