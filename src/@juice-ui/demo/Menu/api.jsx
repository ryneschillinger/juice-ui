import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { type, view, name, color } = props;

  const optionalText = (
    <>
      The Menu API includes three stateless React components:{" "}
      <b>Menu, MenuItem, MenuDivider.</b>
      <pre>
        import MenuItem from "../../core/Menu/MenuItem"; <br />
        import MenuDivider from "../../core/Menu/MenuDivider";
      </pre>
      To add a submenu to a Menu, simply nest <b>MenuItem</b>'s within another{" "}
      <b>MenuItem</b>. The submenu opens to the right of it's parent by default,
      but will adjust and flip to the left if there is not enough room to the
      right.
      <br />
      <b>MenuItem</b> API look at the API tab. <b>Menu & MenuDivider</b>{" "}
      components API contains only <b>type, view, color</b> props. Type & View
      props can be omitted. <br />
      <b>MenuDivider</b> API additional contains <b>title</b> - an optional
      header title (string).
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
          This prop set the shape of the component. Possible states:{" "}
          <b> def </b>. The default state is <b>def</b>.
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
          This prop set the view of the component. Possible states:{" "}
          <b> smooth </b>. The default state is <b>smooth</b>.
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
      prop: "text",
      type: <>string</>,
      desc: <>An Item text, required for usability.</>
    },
    {
      prop: "disabled",
      type: <>boolean</>,
      desc: <>Whether this menu item is non-interactive.</>
    },
    {
      prop: "href",
      type: <>string</>,
      desc: <>A Link URL.</>
    },
    {
      prop: "target",
      type: <>string</>,
      desc: <>Link target attribute. Use "_blank" to open in a new window.</>
    },
    {
      prop: "icon",
      type: <>string | element</>,
      desc: (
        <>
          Name of a Blueprint UI icon (or an icon element) to render before the
          text.
        </>
      )
    },
    {
      prop: "label",
      type: <>string</>,
      desc: (
        <>Right-aligned label text content, useful for displaying hotkeys.</>
      )
    },
    {
      prop: "labelElement",
      type: <>element</>,
      desc:
        "Right-aligned label content, useful for displaying hotkeys. For example, labelElement={<Icon icon='share' />}"
    },
    {
      prop: "onClick",
      type: <>func</>,
      desc: <>Click event handler</>
    },
    {
      prop: "children",
      type: <>array</>,
      desc: (
        <>
          Children of this component will be rendered in a submenu that appears
          when hovering or clicking on this menu item.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `
<span class="cmnt">/*** DEMO #1 ***/</span>
&lt;<span class="el">Menu</span> <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">cog</span>"
    <span class="attr">text</span>="<span class="val">Custom SVG icon</span>"
    <span class="attr">label</span>="<span class="val">Label</span>"
  /&gt;
  &lt;<span class="el">MenuDivider</span> <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">import</span>"
    <span class="attr">text</span>="<span class="val">Import tasks</span>"
  /&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">notifications</span>"
    <span class="attr">text</span>="<span class="val">Email notifications</span>"
    <span class="attr">labelElement</span>={<span class="bool">4</span>}
  /&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">success</span>"
    <span class="attr">icon</span>="<span class="val">tick-circle</span>"
    <span class="attr">text</span>="<span class="val">Save as template</span>"
    <span class="attr">labelElement</span>={&lt;<span class="el">Icon</span> <span class="attr">icon</span>="<span class="val">new-link</span>" /&gt;}
  /&gt;
  &lt;<span class="el">MenuDivider</span> <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">danger</span>"
    <span class="attr">icon</span>="<span class="val">cog</span>"
    <span class="attr">text</span>="<span class="val">Settings...</span>"
    <span class="attr">labelElement</span>={&lt;<span class="el">Icon</span> <span class="attr">icon</span>="<span class="val">share</span>" /&gt;}
  /&gt;
&lt;/<span class="el">Menu</span>&gt;

<span class="cmnt">/*** DEMO #2 ***/</span>
&lt;<span class="el">Menu</span> <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;
  &lt;<span class="el">MenuDivider</span> <span class="attr">title</span>="<span class="val">Edit</span>" <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">cut</span>"
    <span class="attr">text</span>="<span class="val">Cut</span>"
    <span class="attr">labelElement</span>="<span class="val">⌘X</span>"
  /&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">copy</span>"
    <span class="attr">text</span>="<span class="val">Copy</span>"
    <span class="attr">labelElement</span>="<span class="val">⌘C</span>"
  /&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">paste</span>"
    <span class="attr">text</span>="<span class="val">Paste</span>"
    <span class="attr">labelElement</span>="<span class="val">⌘V</span>"
    <span class="attr">disabled</span>={<span class="js">disabledCondition</span>}
  /&gt;
  &lt;<span class="el">MenuDivider</span> <span class="attr">title</span>="<span class="val">Text</span>" <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">align-left</span>"
    <span class="attr">text</span>="<span class="val">Alignment</span>"
  &gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">align-left</span>"
      <span class="attr">text</span>="<span class="val">Left</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">align-center</span>"
      <span class="attr">text</span>="<span class="val">Center</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">align-right</span>"
      <span class="attr">text</span>="<span class="val">Right</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">align-justify</span>"
      <span class="attr">text</span>="<span class="val">Justify</span>"
    /&gt;
  &lt;/<span class="el">MenuItem</span>&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">style</span>"
    <span class="attr">text</span>="<span class="val">Style</span>"
  &gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">bold</span>"
      <span class="attr">text</span>="<span class="val">Bold</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">italic</span>"
      <span class="attr">text</span>="<span class="val">Italic</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">underline</span>"
      <span class="attr">text</span>="<span class="val">Underline</span>"
    /&gt;
  &lt;/<span class="el">MenuItem</span>&gt;
  &lt;<span class="el">MenuItem</span>
    <span class="attr">type</span>="<span class="val">${type}</span>"
    <span class="attr">view</span>="<span class="val">${view}</span>"
    <span class="attr">color</span>="<span class="val">${color}</span>"
    <span class="attr">icon</span>="<span class="val">asterisk</span>"
    <span class="attr">text</span>="<span class="val">Miscellaneous</span>"
  &gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">briefcase</span>"
      <span class="attr">text</span>="<span class="val">Briefcase</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">calculator</span>"
      <span class="attr">text</span>="<span class="val">Calculator</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">dollar</span>"
      <span class="attr">text</span>="<span class="val">Dollar</span>"
    /&gt;
    &lt;<span class="el">MenuItem</span>
      <span class="attr">type</span>="<span class="val">${type}</span>"
      <span class="attr">view</span>="<span class="val">${view}</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">icon</span>="<span class="val">dot</span>"
      <span class="attr">text</span>="<span class="val">Shapes</span>"
    &gt;
      &lt;<span class="el">MenuItem</span>
        <span class="attr">type</span>="<span class="val">${type}</span>"
        <span class="attr">view</span>="<span class="val">${view}</span>"
        <span class="attr">color</span>="<span class="val">success</span>"
        <span class="attr">icon</span>="<span class="val">full-circle</span>"
        <span class="attr">text</span>="<span class="val">Success Circle</span>"
      &gt;
      &lt;<span class="el">MenuItem</span>
        <span class="attr">type</span>="<span class="val">${type}</span>"
        <span class="attr">view</span>="<span class="val">${view}</span>"
        <span class="attr">color</span>="<span class="val">danger</span>"
        <span class="attr">icon</span>="<span class="val">heart</span>"
        <span class="attr">text</span>="<span class="val">Danger Heart</span>"
      /&gt;
      &lt;<span class="el">MenuItem</span>
        <span class="attr">type</span>="<span class="val">${type}</span>"
        <span class="attr">view</span>="<span class="val">${view}</span>"
        <span class="attr">color</span>="<span class="val">warning</span>"
        <span class="attr">icon</span>="<span class="val">ring</span>"
        <span class="attr">text</span>="<span class="val">Warning Ring</span>"
      /&gt;
      &lt;<span class="el">MenuItem</span>
        <span class="attr">type</span>="<span class="val">${type}</span>"
        <span class="attr">view</span>="<span class="val">${view}</span>"
        <span class="attr">color</span>="<span class="val">primary</span>"
        <span class="attr">icon</span>="<span class="val">shopping-cart</span>"
        <span class="attr">text</span>="<span class="val">GETDISCOUNT</span>"
        <span class="attr">onClick</span>={() <span class="js">=></span> <span class="act">copyToClipboard(</span><span class="val">"COUPONCODE"</span><span class="act">)</span>}
      /&gt;
    &lt;/<span class="el">MenuItem</span>&gt;
  &lt;/<span class="el">MenuItem</span>&gt;
&lt;/<span class="el">Menu</span>&gt;

`;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} collapsed />;
};
