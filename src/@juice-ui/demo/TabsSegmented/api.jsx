import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";
import OverviewAPI from "../OverviewAPI.jsx";

export const API = props => {
  const {
    //name,
    type,
    view,
    color,
    isIcon,
  } = props;

  const OptionalApi = [
    {
      prop: "id",
      type: <>string | number</>,
      desc: (
        <>
          Unique identifier for this Tabs container. This will be combined with
          the id of each Tab child to generate ARIA accessibility attributes.
          IDs are required and should be unique on the page to support
          server-side rendering. Required.
        </>
      )
    },
    {
      prop: "title",
      type: <>string | element</>,
      desc: (
        <>
          Content of tab title element, rendered in a list above the active
          panel.
        </>
      )
    },
    {
      prop: "panel",
      type: <>element</>,
      desc: (
        <>
          Panel content, rendered by the parent Tabs when this tab is active. If
          omitted, no panel will be rendered for this tab.
        </>
      )
    }
  ];

  const optionalText = (
    <>
      Tabs is the top-level component responsible for rendering the tab list and
      coordinating selection.
      <br />
      Children of the <b>Tabs</b> are rendered in order in the tab list, which
      is a flex container.
      <br />
      <b>Tab</b> children are managed by the component; clicking one will change
      selection.
      <br />
      <pre>import {"{ Tab }"} from "@blueprintjs/core";</pre>
      <b>Tab API description:</b>
      <OverviewAPI data={OptionalApi} />
    </>
  );

  /**Overview */
  const OverviewText = (
    <OverviewTemplate name={"Tabs/Segmented"} text={optionalText} />
  );

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
          string = <i>filled</i>
        </>
      ),
      desc: (
        <>
          This prop set the view of the component. Possible states:
          <b> filled | flat | smooth | outlined | raised </b>. The default state
          is
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
      prop: "id",
      type: <>string | number</>,
      desc: (
        <>
          Unique identifier for this Tabs container. This will be combined with
          the id of each Tab child to generate ARIA accessibility attributes.
          IDs are required and should be unique on the page to support
          server-side rendering.Required.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="val">Tabs</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">id</span>="<span class="val">DemoTabs</span>"
&gt;
  &lt;<span class="val">Tab</span>
    <span class="attr">id</span>="<span class="val">1</span>"
    <span class="attr">title</span>=${isIcon ? `{&lt;<span class="val">Icon</span> <span class="attr">icon</span>="<span class="val">sort-alphabetical</span>" /&gt;}` : `"<span class="val">Tab 1</span>"`}
    <span class="attr">panel</span>={<span class="cmnt">
      /*** HTML content goes here ***/
    </span>}
  &gt;
  &lt;<span class="val">Tab</span>
    <span class="attr">id</span>="<span class="val">2</span>"
    <span class="attr">title</span>=${isIcon ? `{&lt;<span class="val">Icon</span> <span class="attr">icon</span>="<span class="val">sort-alphabetical-desc</span>" /&gt;}` : `"<span class="val">Tab 2</span>"`}
    <span class="attr">panel</span>={<span class="cmnt">
      /*** HTML content goes here ***/
    </span>}
  &gt;
  &lt;<span class="val">Tab</span>
    <span class="attr">id</span>="<span class="val">3</span>"
    <span class="attr">title</span>=${isIcon ? `{&lt;<span class="val">Icon</span> <span class="attr">icon</span>="<span class="val">sort-asc</span>" /&gt;}` : `"<span class="val">Tab 3</span>"`}
    <span class="attr">panel</span>={<span class="cmnt">
      /*** HTML content goes here ***/
    </span>}
  &gt;
  &lt;<span class="val">Tab</span>
    <span class="attr">id</span>="<span class="val">4</span>"
    <span class="attr">title</span>=${isIcon ? `{&lt;<span class="val">Icon</span> <span class="attr">icon</span>="<span class="val">sort-desc</span>" /&gt;}` : `"<span class="val">Tab 4</span>"`}
    <span class="attr">panel</span>={<span class="cmnt">
      /*** HTML content goes here ***/
    </span>}
  &gt;
&lt;/<span class="val">Tabs</span>&gt;       
`;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
