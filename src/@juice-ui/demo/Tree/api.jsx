import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";
import OverviewAPI from "../OverviewAPI.jsx";

export const API = props => {
  const { type, name, color } = props;

  const TreeNodeApi = [
    {
      prop: "id",
      type: <>string | number</>,
      desc: <>An unique identifier for the node. Required.</>
    },
    {
      prop: "label",
      type: <>string | element</>,
      desc: <>The main label for the node. Required.</>
    },
    {
      prop: "hasCaret",
      type: <>boolean</>,
      desc: (
        <>
          Whether the caret to expand/collapse a node should be shown. If not
          specified, this will be true if the node has children and false
          otherwise.
        </>
      )
    },
    {
      prop: "icon",
      type: <>name | element</>,
      desc: (
        <>
          The name of a Blueprint icon (or an icon element) to render next to
          the node's label.
        </>
      )
    },
    {
      prop: "isExpanded",
      type: <>boolean</>,
      desc: <>A Default state of node.</>
    },
    {
      prop: "secondaryLabel",
      type: <>string | element</>,
      desc: (
        <>
          A secondary label/component that is displayed at the right side of the
          node.
        </>
      )
    },
    {
      prop: "isSelected",
      type: (
        <>
          boolean = <i>false</i>
        </>
      ),
      desc: (
        <>
          Whether this node is selected. The default state is <b>false</b>.
        </>
      )
    },
    {
      prop: "disabled",
      type: <>boolean</>,
      desc: (
        <>
          Whether this tree node is non-interactive. Enabling this prop will
          ignore mouse event handlers (in particular click, down, enter, leave).
        </>
      )
    },
    {
      prop: "childNodes",
      type: <>array</>,
      desc: <>Child tree nodes of this node.</>
    }
  ];

  const optionalText = (
    <>
      Tree node objects determine the contents, appearance, and state of each
      node in the tree.
      <br />
      For example, <b>icon</b> controls the icon displayed for the node, and{" "}
      <b>isExpanded</b> determines whether the node's children are shown.
      <br />
      <b>TreeNode API description:</b>
      <OverviewAPI data={TreeNodeApi} />
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
          <b> def | dense</b>. The default state is <b>def</b>.
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
          {" "}
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
      type: <>string</>,
      desc:
        "A space-delimited list of class names to pass along to a child element."
    },
    {
      prop: "contents",
      type: <>array</>,
      desc: (
        <>
          The data specifying the contents and appearance of the tree. Required.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** COMPONENT EXAMPLE ***/</span></br>
&lt;<span class="el">Tree</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">contents</span>={<span class="js">Data</span>}
/&gt;
</br>
<span class="cmnt">/*** JS DATA ***/</span></br>
<span class="js">const</span> Data = [
  {
    <span class="attr">id</span>: <span class="num">0</span>,
    <span class="attr">hasCaret</span>: <span class="bool">true</span>,
    <span class="attr">isExpanded</span>: <span class="bool">false</span>,
    <span class="attr">label</span>: <span class="val">"Folder 0"</span>,
    
    <span class="attr">childNodes</span>: [
      {
        <span class="attr">id</span>: <span class="num">2</span>,
        <span class="attr">icon</span>: <span class="val">"document"</span>,
        <span class="attr">label</span>: <span class="val">"Item 0"</span>
      },
      {
        <span class="attr">id</span>: <span class="num">3</span>,
        <span class="attr">icon</span>: <span class="val">"tag"</span>,
        <span class="attr">label</span>: <span class="val">"Item 1"</span>
      }
    ]
  },
  {
    <span class="attr">id</span>: <span class="num">1</span>,
    <span class="attr">hasCaret</span>: <span class="bool">true</span>,
    <span class="attr">isExpanded</span>: <span class="bool">true</span>,
    <span class="attr">label</span>: <span class="val">"Folder (Level 1)"</span>,
    <span class="attr">childNodes</span>: [
      {
        <span class="attr">id</span>: <span class="num">2</span>,
        <span class="attr">icon</span>: <span class="val">"document"</span>,
        <span class="attr">label</span>: <span class="val">"Item with second icon"</span>,
        <span class="attr">secondaryLabel</span>: <<span class="el">Icon</span> <span class="attr">icon</span>="<span class="val">eye-open</span>" />
      },
      {
        <span class="attr">id</span>: <span class="num">3</span>,
        <span class="attr">icon</span>: <span class="val">"tag"</span>,
        <span class="attr">isSelected</span>: <span class="bool">true</span>,
        <span class="attr">label</span>: <span class="val">"Just an item"</span>
      },
      {
        <span class="attr">id</span>: <span class="num">4</span>,
        <span class="attr">hasCaret</span>: <span class="bool">true</span>,
        <span class="attr">isExpanded</span>: <span class="bool">true</span>,
        <span class="attr">label</span>: <span class="val">"Folder (Level 2)"</span>,
        <span class="attr">childNodes</span>: [
          { <span class="attr">id</span>: <span class="num">5</span>, <span class="attr">label</span>: <span class="val">"No-icon Item"</span> },

          {
            <span class="attr">id</span>: <span class="num">6</span>,
            <span class="attr">hasCaret</span>: <span class="bool">true</span>,
            <span class="attr">label</span>: <span class="val">"Folder disabled"</span>,
            <span class="attr">disabled</span>: <span class="bool">true</span>,
            <span class="attr">isExpanded</span>: <span class="bool">true</span>,
            <span class="attr">childNodes</span>: [
              {
                <span class="attr">id</span>: <span class="num">7</span>,
                <span class="attr">icon</span>: <span class="val">"disable"</span>,
                <span class="attr">disabled</span>: <span class="bool">true</span>,
                <span class="attr">label</span>: <span class="val">"Item disabled"</span>
              }
            ]
          },
          {
            <span class="attr">id</span>: <span class="num">8</span>,
            <span class="attr">hasCaret</span>: <span class="bool">true</span>,
            <span class="attr">isExpanded</span>: <span class="bool">true</span>,
            <span class="attr">label</span>: (
              &lt;<span class="el">div</span> <span class="attr">with-secondary-label</span>="<span class="bool">true</span>">
                Folder With Label<<span class="el">div</span>>secondary label&lt;/<span class="el">div</span>>
              &lt;/<span class="el">div</span>>
            ),
            <span class="attr">childNodes</span>: [
              { <span class="attr">id</span>: <span class="num">9</span>, <span class="attr">icon</span>: <span class="val">"document"</span>, <span class="attr">label</span>: <span class="val">"Item 0"</span> },
              { <span class="attr">id</span>: <span class="num">10</span>, <span class="attr">icon</span>: <span class="val">"tag"</span>, <span class="attr">label</span>: <span class="val">"Item 1"</span> },
              {
                <span class="attr">id</span>: <span class="num">11</span>,
                <span class="attr">icon</span>: <span class="val">"disable"</span>,
                <span class="attr">disabled</span>: <span class="bool">true</span>,
                <span class="attr">label</span>: (
                  <<span class="el">div</span> <span class="attr">with-secondary-label</span>="<span class="bool">true</span>">
                    Item disabled
                    <<span class="el">div</span>>
                      Items out of stock <<span class="el">Icon</span> <span class="attr">icon</span>="thumbs-down" />
                    &lt;/<span class="el">div</span>>
                  &lt;/<span class="el">div</span>>
                )
              }
            ]
          }
        ]
      }
    ]
  }
];
  `;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
