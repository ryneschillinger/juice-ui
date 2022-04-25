import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";

export const API = props => {
  const { name, type, view, color, isOpen, opacity } = props;

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
          This prop set the shape of the component. Possible states:
          <b> default | dense</b>. The default state is <b>default</b>.
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
          <b> filled | smooth | raised </b>. The default state is
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
      type: "string",
      desc:
        "A space-delimited list of class names to pass along to a child element."
    },
    {
      prop: "icon",
      type: "string ",
      desc: (
        <>
          Name of a icon to render in the dialog's header. Note that the header
          will only be rendered if title is provided. For example,
          <b>"tick"</b>
        </>
      )
    },
    {
      prop: "title",
      type: "string",
      desc: <>A title of the dialog.</>
    },
    {
      prop: "text",
      type: "string",
      desc: <>Action text. Haven't default state.</>
    },
    {
      prop: "backdropOpacity",
      type: "number = 20",
      desc: (
        <>
          Opacity of backdrop. From 0 to 100 with step 10. The default state is{" "}
          <b>20</b>.
        </>
      )
    },
    {
      prop: "leftButton",
      type: "element",
      desc: <>A Left button of a dialog.</>
    },
    {
      prop: "rightButton",
      type: "element",
      desc: <>A Right button of a dialog.</>
    },
    {
      prop: "isOpen",
      type: <>boolean</>,
      desc: (
        <>
          Toggles the visibility of the overlay and its children. This prop is
          required because the component is controlled.
        </>
      )
    },
    {
      prop: "onClose",
      type: "func",
      desc: (
        <>
          A callback that is invoked when user interaction causes the overlay to
          close, such as clicking on the overlay or pressing the esc key.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `&lt;<span class="val">Button</span>
  <span class="attr">view</span>="<span class="val">filled</span>"
  <span class="attr">color</span>="<span class="val">primary</span>"
  <span class="attr">text</span>="<span class="val">Open Dialog</span>"
  <span class="attr">onClick</span>={<span class="js">() => setOpen(true)</span>}
/&gt
&lt;<span class="val">Dialog</span>
  <span class="attr">type</span>="<span class="val">${type}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">icon</span>="<span class="val">info-sign</span>"
  <span class="attr">title</span>="<span class="val">This is a dialog</span>"
  <span class="attr">text</span>="<span class="val">text</span>"
  <span class="attr">backdropOpacity</span>={<span class="num">${opacity}</span>}
  <span class="attr">leftButton</span>={
    &lt;<span class="val">Button</span>
      <span class="attr">type</span>="<span class="val">default</span>"
      <span class="attr">view</span>="<span class="val">${
        view === "filled"
          ? "filled"
          : view === "raised"
          ? "flat"
          : "outlined"
      }</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">dense</span>={<span class="bool">${type === "dense" ? true : false}</span>}
      <span class="attr">onClick</span>={<span class="js">() =&gt setOpen(false)</span>}
      <span class="attr">text</span>="<span class="val">Maybe next time</span>"
    /&gt
  }
  <span class="attr">rightButton</span>={
    &lt;<span class="val">Button</span>
      <span class="attr">type</span>="<span class="val">default</span>"
      <span class="attr">view</span>="<span class="val">${
        view === "filled"
          ? "raised"
          : view === "raised"
          ? "smooth"
          : "filled"
      }</span>"
      <span class="attr">color</span>="<span class="val">${color}</span>"
      <span class="attr">dense</span>={<span class="bool">${type === "dense" ? true : false}</span>}
      <span class="attr">onClick</span>={<span class="js">() =&gt setOpen(false)</span>}
      <span class="attr">text</span>="<span class="val">Sure, continue!</span>"
    / &gt
  }
  <span class="attr">isOpen</span>={<span class="bool">${isOpen}</span>}
  <span class="attr">onClose</span>={<span class="js">() =&gt setOpen(false)</span>}
/&gt`
  ;

  return <Overview overview={OverviewText} apidata={APIData} code={Code} />;
};
