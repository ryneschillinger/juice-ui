import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, type, view, color, navType } = props;

  const optionalText = (
    <>
      The Navbar API includes three stateless React components:{" "}
      <b>NavbarGroup NavbarHeading NavbarDivider</b>
      <pre>
        import NavbarGroup from "../../core/Navbar/group.jsx"; <br />
        import NavbarHeading from "../../core/Navbar/heading.jsx";
        <br />
        import NavbarDivider from "../../core/Navbar/divider.jsx";
      </pre>
      These components are simple containers for their children. Each of them
      supports the full range of HTML <b>div</b> props.
      <br />
      <b>NavbarGroup, NavbarHeading & NavbarDivider</b> components API contains
      only <b>className</b> prop.
      <br />
      <b>NavbarGroup</b> API additional contains <b>align</b> - the side of the
      navbar on which the group should appear (string, can be left, right,
      center ).
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
          string = <i>desktop</i>
        </>
      ),
      desc: (
        <>
          This prop set the shape of the component. Possible states:{" "}
          <b> desktop | tablet | mobile </b>. The default state is{" "}
          <b>desktop</b>.
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
          <b> filled | raised </b>. The default state is <b>filled</b>.
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
      prop: "fixedToTop",
      type: <>boolean</>,
      desc: (
        <>
          Whether this navbar should be fixed to the top of the viewport (using
          CSS position: fixed).
        </>
      )
    }
  ];

  /** Code source */
  const Code = `
&lt;<span class="el">Navbar</span> <span class="attr">type</span>="<span class="val">${type}</span>" <span class="attr">view</span>="<span class="val">${view}</span>" <span class="attr">color</span>="<span class="val">${color}</span>"&gt;

  <span class="cmnt">// Menu Button</span>
  &lt;<span class="el">NavbarGroup</span> <span class="attr">align</span>="<span class="val">left</span>"&gt;
    &lt;<span class="el">NavbarHeading</span>&gt;
    ${navType === "menu" ? (
    `  &lt;<span class="el">Hamburger</span>
        <span class="attr">type</span>="<span class="val">circle</span>"
        <span class="attr">view</span>="<span class="val">${view === "smooth" ? "outlined" : "smooth"}</span>"
        <span class="attr">color</span>="<span class="val">${color}</span>"
        <span class="attr">size</span>={<span class="num">${type === "desktop" ? 20 : (type === "tablet" ? 14 : 12)}</span>}
        <span class="attr">variant</span>="<span class="val">slider</span>"
        <span class="attr">isOpen</span>={<span class="js">isOpenCondition</span>}
        <span class="attr">setOpen</span>={() <span class="js">=></span> <span class="act">someFunc()</span>}
      /&gt;`
    ) : (
    `  &lt;<span class="el">img</span>
        <span class="attr">src</span>={<span class="js">logoFilePath</span>}
        <span class="attr">alt</span>="<span class="val">JuiceUI</span>"
        <span class="attr">style</span>={{
          <span class="attr">height</span>: <span class="act">getLogoSize(</span><span class="js">deviceType</span><span class="act">)</span>,
          <span class="attr">marginRight</span>: <span class="val">"0.35rem"</span>
        }}
      /&gt;`
    )}
    &lt;/<span class="el">NavbarHeading</span>&gt;
  &lt;/<span class="el">NavbarGroup</span>&gt;

  <span class="cmnt">// Primary Nav Buttons</span>
  &lt;<span class="el">NavbarGroup</span> <span class="attr">align</span>="<span class="val">center</span>" <span class="attr">style</span>={{ <span class="attr">marginLeft</span>: <span class="val">"1.5rem"</span> }}&gt;
    &lt;<span class="el">Link</span> <span class="attr">to</span>="<span class="val">/dashboard</span>"&gt;
      &lt;<span class="el">Button</span>
        <span class="attr">type</span>="<span class="val">default</span>"
        <span class="attr">view</span>="<span class="val">${view === "smooth" ? view : "flat"}</span>"
        <span class="attr">color</span>="<span class="val">${color}</span>"
        <span class="attr">text</span>="<span class="val">Dashboard</span>"
        <span class="attr">active</span>={<span class="js">location.pathname</span><span class="act">.match(</span><span class ="val">"dashboard"</span><span class="act">)</span>}
        <span class="attr">dense</span>={<span class="js">type</span> !== <span class="val">"desktop"</span>}
      /&gt;
    &lt;/<span class="el">Link</span>&gt;
    &lt;<span class="el">Link</span> <span class="attr">to</span>="<span class="val">/messages</span>"&gt;
      &lt;<span class="el">Button</span>
        <span class="attr">type</span>="<span class="val">default</span>"
        <span class="attr">view</span>="<span class="val">${view === "smooth" ? view : "flat"}</span>"
        <span class="attr">color</span>="<span class="val">${color}</span>"
        <span class="attr">text</span>="<span class="val">Messages</span>"
        <span class="attr">active</span>={<span class="js">location.pathname</span><span class="act">.match(</span><span class ="val">"messages"</span><span class="act">)</span>}
        <span class="attr">dense</span>={<span class="js">type</span> !== <span class="val">"desktop"</span>}
      /&gt;
    &lt;/<span class="el">Link</span>&gt;
    &lt;<span class="el">Link</span> <span class="attr">to</span>="<span class="val">/notifications</span>"&gt;
      &lt;<span class="el">Button</span>
        <span class="attr">type</span>="<span class="val">default</span>"
        <span class="attr">view</span>="<span class="val">${view === "smooth" ? view : "flat"}</span>"
        <span class="attr">color</span>="<span class="val">${color}</span>"
        <span class="attr">text</span>="<span class="val">Notifications</span>"
        <span class="attr">active</span>={<span class="js">location.pathname</span><span class="act">.match(</span><span class ="val">"notifications"</span><span class="act">)</span>}
        <span class="attr">dense</span>={<span class="js">type</span> !== <span class="val">"desktop"</span>}
      /&gt;
    &lt;/<span class="el">Link</span>&gt;
  &lt;/<span class="el">NavbarGroup</span>&gt;

  <span class="cmnt">// Action Buttons</span>
  &lt;<span class="el">NavbarGroup</span> <span class="attr">align</span>="<span class="val">right</span>"&gt;
    &lt;<span class="el">Link</span> <span class="attr">to</span>="<span class="val">/sign-in</span>"&gt;
      &lt;<span class="el">Button</span>
        <span class="attr">type</span>="<span class="val">default</span>"
        <span class="attr">view</span>="<span class="val">${view === "smooth" ? view : "outlined"}</span>"
        <span class="attr">color</span>="<span class="val">${color}</span>"
        <span class="attr">text</span>="<span class="val">Sign In</span>"
        <span class="attr">style</span>={{ <span class="attr">marginLeft</span>: <span class="val">"1.5rem"</span> }}
        <span class="attr">active</span>={<span class="js">location.pathname</span><span class="act">.match(</span><span class ="val">"sign-in"</span><span class="act">)</span>}
        <span class="attr">dense</span>={<span class="js">type</span> !== <span class="val">"desktop"</span>}
      /&gt;
    &lt;/<span class="el">Link</span>&gt;
    &lt;<span class="el">Link</span> <span class="attr">to</span>="<span class="val">/register</span>"&gt;
      &lt;<span class="el">Button</span>
        <span class="attr">type</span>="<span class="val">default</span>"
        <span class="attr">view</span>="<span class="val">filled</span>"
        <span class="attr">color</span>="<span class="val">${color}</span>"
        <span class="attr">text</span>="<span class="val">Register</span>"
        <span class="attr">style</span>={{ <span class="attr">marginLeft</span>: <span class="val">"1rem"</span> }}
        <span class="attr">active</span>={<span class="js">location.pathname</span><span class="act">.match(</span><span class ="val">"register"</span><span class="act">)</span>}
        <span class="attr">dense</span>={<span class="js">type</span> !== <span class="val">"desktop"</span>}
      /&gt;
    &lt;/<span class="el">Link</span>&gt;
  &lt;/<span class="el">NavbarGroup</span>&gt;
&lt;/<span class="el">Navbar</span>&gt;
 `;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} collapsed />;
};
