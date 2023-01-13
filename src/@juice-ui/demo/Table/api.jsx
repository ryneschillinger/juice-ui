import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { type, view, color, isCheckbox, isPagination } = props;

  /**Overview */
  const OverviewText = <OverviewTemplate name={"Table"} folder="Table/" />;

  /**API */
  const APIData = [
    {
      prop: "type",
      type: <>string</>,
      desc: (
        <>
          This prop set the shape of the component. Possible states:{" "}
          <b> def | dense </b>.
        </>
      )
    },
    {
      prop: "view",
      type: <>string</>,
      desc: (
        <>
          {" "}
          This prop set the view of the component. Possible states:{" "}
          <b> filled | flat | smooth | raised </b>.
        </>
      )
    },
    {
      prop: "color",
      type: <>string</>,
      desc: (
        <>
          {" "}
          This prop set the color of the component. Possible states:{" "}
          <b>
            {" "}
            default | primary | warning | danger | success | primary_alt |
            warning_alt | danger_alt | success_alt{" "}
          </b>
          .
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
      prop: "name",
      type: <>array</>,
      desc: <>Array of Head names. See an example in the demo folder.</>
    },
    {
      prop: "data",
      type: <>array</>,
      desc: <>Array of data. See an example in the demo folder.</>
    },
    {
      prop: "position",
      type: <>string</>,
      desc: (
        <>
          Set the text-align on the table cell content. Possible states:{" "}
          <b> left | right | center</b>
        </>
      )
    },
    {
      prop: "pages",
      type: <>boolean</>,
      desc: <>Use or not pagination.</>
    },
    {
      prop: "checkboxes",
      type: <>boolean</>,
      desc: <>Use or not checkboxes.</>
    },
    {
      prop: "labelRowsPerPage",
      type: <>string</>,
      desc: <>Customize the rows per page label.</>
    },
    {
      prop: "rowsPerPageOptions",
      type: <>array</>,
      desc: (
        <>
          Customizes the options of the rows per page select field. If less than
          two options are available, no select field will be displayed.
        </>
      )
    },
    {
      prop: "defRows",
      type: <>number</>,
      desc: <>A Default value of the rows per page select field.</>
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** COMPONENT EXAMPLE ***/</span>

&lt;<span class="el">Table</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">name</span>={<span class="js">array_Head</span>}
  <span class="attr">data</span>={<span class="js">array_Data</span>}
  <span class="attr">position</span>="<span class="val">left</span>"
  <span class="attr">pages</span>={<span class="bool">${isPagination ? "true" : "false"}</span>}
  <span class="attr">labelRowsPerPage</span>="<span class="val">Rows per page:</span>"
  <span class="attr">rowsPerPageOptions</span>={[<span class="num">5</span>, <span class="num">8</span>, <span class="num">20</span>]}
  <span class="attr">defRows</span>={<span class="num">8</span>}
  ${isCheckbox ? `<span class="attr">checkboxes</span>` : ''}
/&gt;


<span class="cmnt">/*** JS DATA ***/</span>

<span class="js">const</span> array_Head = [
  { <span class="attr">id</span>: <span class="val">"no"</span>, <span class="attr">label</span>: <span class="val">"No."</span> },
  { <span class="attr">id</span>: <span class="val">"customer"</span>, <span class="attr">label</span>: <span class="val">"Customer"</span> },
  { <span class="attr">id</span>: <span class="val">"company"</span>, <span class="attr">label</span>: <span class="val">"Company"</span> },
  { <span class="attr">id</span>: <span class="val">"date"</span>, <span class="attr">label</span>: <span class="val">"Date"</span> },
  { <span class="attr">id</span>: <span class="val">"status"</span>, <span class="attr">label</span>: <span class="val">"Status"</span> },
  { <span class="attr">id</span>: <span class="val">"address"</span>, <span class="attr">label</span>: <span class="val">"Address"</span> }
];

<span class="js">const</span> array_Data = [
  <span class="cmnt">// example of single table row</span>
  {
    <span class="attr">id</span>: <span class="num">1</span>,
    <span class="attr">no</span>: <span class="num">2134</span>,
    <span class="attr">customer</span>: <span class="val">"Daniel Webster"</span>,
    <span class="attr">company</span>: <span class="val">"Y-Corp"</span>,
    <span class="attr">date</span>: <span class="val">"07/14/1984"</span>,
    <span class="attr">status</span>: (
      &lt;<span class="el">Chip</span>
        <span class="attr">type</span>="<span class="val">dense</span>"
        <span class="attr">view</span>="<span class="val">${view === "filled" ? "filled" : "smooth"}</span>"
        <span class="attr">color</span>="<span class="val">success</span>"
        <span class="attr">tag</span>="<span class="val">OK</span>"
        <span class="attr">round</span>={<span class="bool">false</span>}
      /&gt;
    ),
    <span class="attr">address</span>: <span class="val">"Ulrike-Günther-Platz 145, 18410 Guben"</span>
  }
];
</span>`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");
  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
