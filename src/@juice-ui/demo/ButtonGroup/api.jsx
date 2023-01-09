import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const {
    name,
    type,
    view,
    color,
    fill,
    right,
    isVertical,
    alignText
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
          <b> default | dense </b>. The default state is <b>default</b>.
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
          is <b>flat</b>.
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
            {" "}
            default | primary | warning | danger | success | primary_alt |
            warning_alt | danger_alt | success_alt{" "}
          </b>
          . The default state is <b>default</b>.
        </>
      )
    },
    {
      prop: "alignText",
      type: (
        <>
          string = <i>center</i>
        </>
      ),
      desc: (
        <>
          Text alignment within button. By default, icons and text will be centered within the button. Passing "<strong>left</strong>" or "<strong>right</strong>" will align the button text to that side and push icon and rightIcon to either edge. Passing "<strong>center</strong>" will center the text and icons together.
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
      prop: "data",
      type: "object",
      desc: (
        <>
          {" "}
          Data object can have next keys:
          {`{ 
        id:  number,  
        text: string,
        icon: string | element,
        rightIcon: string | element,
        isActive: boolean,
        onClick: function
        }`}
          .
        </>
      )
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
          Whether this ButtonGroup should expand to fill its container. The
          default state is <b>false</b>.
        </>
      )
    },
    {
      prop: "vertical",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether the button group should appear with vertical styling.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** COMPONENT EXAMPLE ***/</span><br />
&lt;<span class="el">ButtonGroup</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">items</span>={<span class="js">ButtonItems</span>}
  ${fill ? `<span class="attr">fill</span>` : ''}
  ${isVertical ? `<span class="attr">vertical</span>` : ''}
  ${alignText !== "center" ? `<span class="attr">alignText</span>="<span class="val">${alignText}</span>"` : ''}
/&gt;
<br />
<span class="cmnt">/*** JS DATA ***/</span><br />
<span class="js">const</span> <span class="el">ButtonItems</span> = [
  {
    <span class="attr">id</span>: <span class="num">0</span>,
    <span class="attr">icon</span>: <span class="val">"sort-alphabetical"</span>,
    <span class="attr">isActive</span>: <span class="bool">true</span>,
    <span class="act">onClick</span>: () <span class="js">=></span> <span class="act">handleClick(</span><span class="num">0</span><span class="act">)</span>
  },
  {
    <span class="attr">id</span>: <span class="num">1</span>,
    <span class="attr">icon</span>: <span class="val">"sort-alphabetical-desc"</span>,
    <span class="act">onClick</span>: () <span class="js">=></span> <span class="act">handleClick(</span><span class="num">1</span><span class="act">)</span>
  },
  {
    <span class="attr">id</span>: <span class="num">2</span>,
    <span class="attr">text</span>: <span class="val">"Third"</span>,
    <span class="attr">icon</span>: <span class="val">"sort-asc"</span>,
    <span class="act">onClick</span>: () <span class="js">=></span> <span class="act">handleClick(</span><span class="num">2</span><span class="act">)</span>
  },
  {
    <span class="attr">id</span>: <span class="num">3</span>,
    <span class="attr">text</span>: <span class="val">"Fourth"</span>,
    <span class="attr">rightIcon</span>: <span class="val">"sort-desc"</span>,
    <span class="act">onClick</span>: () <span class="js">=></span> <span class="act">handleClick(</span><span class="num">3</span><span class="act">)</span>
  }
];<br />

<span class="js">const</span> [<span class="el">currentData</span>, <span class="act">setNewData</span>] = <span class="el">React</span><span class="act">.useState(</span><span class="js">ButtonItems</span><span class="act">)</span>;<br />

<span class="js">const</span> <span class="act">handleClick</span> = (<span class="js">id</span>) <span class="js">=></span> {
  <span class="act">setNewData</span>(
    <span class="el">currentData</span><span class="act">.map</span>(<span class="js">item =>
      item.id</span> === <span class="js">id</span>
        ? { <span class="js">...item</span>, <span class="attr">isActive</span>: <span class="bool">true</span> }
        : { <span class="js">...item</span>, <span class="attr">isActive</span>: <span class="bool">false</span> }
    )
  );
}
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview overview={OverviewText} apidata={APIData} code={trimCode(Code)} />;
};
