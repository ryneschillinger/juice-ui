import React from "react";
import { Overview } from "../OverviewComponent";
import { OverviewTemplate } from "../OverviewText";
import OverviewAPI from "../OverviewAPI.jsx";

export const API = props => {
  const {
    name,
    isClose,
    view,
    color,
    position,
    isIcon,
    isAction,
    timeout
  } = props;

  const ToasterAPI = [
    {
      prop: "autoFocus",
      type: <>boolean</>,
      desc: (
        <>
          Whether a toast should acquire application focus when it first opens. This is disabled by default so that toasts do not interrupt the user's flow. Note that <b>enforceFocus</b> is always disabled for Toasters.
        </>
      )
    },
    {
      prop: "canEscapeKeyClear",
      type: <>boolean</>,
      desc: (
        <>
          Whether pressing the esc key should clear all active toasts.
        </>
      )
    },
    {
      prop: "classname",
      type: <>string</>,
      desc: (
        <>
          A space-delimited list of class names to pass along to a child element.
        </>
      )
    },
    {
      prop: "maxToasts",
      type: <>number</>,
      desc: (
        <>
          The maximum number of active toasts that can be displayed at once. When the limit is about to be exceeded, the oldest active toast is removed.
        </>
      )
    },
    {
      prop: "position",
      type: <>string</>,
      desc: (
        <>
          Position of Toaster within its container. Possible states: <b>bottom | bottom-left | bottom-right | top | top-left | top-right</b>.
        </>
      )
    },
  ];

  const toastAPIDescription = (
    <>
      <br />
      <br />
      <b>Toast</b> is an array and has its own specific API.
    </>
  );

  const optionalText = (
    <>
      The way to use the <b>Toaster</b> component is{" "}
      <b>{"<Toaster ref={ref => ref.show({ ...toast })}/> "}</b>
      <br />
      Render a <b>Toaster</b> element and use the ref prop to access its
      instance methods.
      <br />
      <OverviewAPI title="Toaster" data={ToasterAPI} additionalText={toastAPIDescription} />
    </>
  );

  /**Overview */
  const OverviewText = <OverviewTemplate name={name} text={optionalText} />;

  /**API */
  const ToastAPI = [
    {
      prop: "action",
      type: <>element</>,
      desc: (
        <>
          Action rendered as a Button. The toast is dismissed automatically when
          the user clicks the action button. Omit this prop to omit the action
          button. Options: <b> href target text </b>. For example,{" "}
          {
            " { href: 'https://gum.co/figma2react', target: '_blank', text: <strong>Yum.</strong> }"
          }
          .
        </>
      )
    },
    {
      prop: "classname",
      type: <>string</>,
      desc: (
        <>
          A space-delimited list of class names to pass along to a child element.
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
      prop: "icon",
      type: <>string | element</>,
      desc: (
        <>
          Name of a Blueprint UI icon (or an icon element) to render before the
          message.
        </>
      )
    },
    {
      prop: "message",
      type: <>string</>,
      desc: <>Message to display in the body of the toast. Required.</>
    },
    {
      prop: "onDismiss",
      type: <>func</>,
      desc: (
        <>
          Callback invoked when the toast is dismissed, either by the user or by
          the timeout. The value of the argument indicates whether the toast was
          closed because the timeout expired.
        </>
      )
    },
    {
      prop: "setRef",
      type: <>func</>,
      desc: <>Function to store ref of Toaster</>
    },
    {
      prop: "timeout",
      type: (
        <>
          number = <i>5000</i>
        </>
      ),
      desc: (
        <>
          Milliseconds to wait before automatically dismissing toast. Providing
          a value less than or equal to 0 will disable the timeout (this is
          discouraged).
        </>
      )
    },
    {
      prop: "withoutClose",
      type: <>boolean </>,
      desc: <>To show or not Close button.</>
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
          <b> filled | smooth | outlined | raised </b>. The default state is{" "}
          <b>filled</b>.
        </>
      )
    }
  ];

  /** Code source */
  const Code = `<span class="cmnt">/*** COMPONENT EXAMPLES ***/</span>
&lt;<span class="el">Button</span>
  <span class="attr">type</span>="<span class="val">filled</span>"
  <span class="attr">color</span>="<span class="val">primary</span>"
  <span class="attr">text</span>="<span class="val">Toast me</span>"
  <span class="attr">onClick</span>={() => <span class="js">myRef</span><span class="act">.show</span></span>(<span class="js">DemoToast</span>)</span>}
/&gt;
&lt;<span class="el">Toaster</span>
  <span class="attr">position</span>="<span class="val">${position}</span>"
  <span class="attr">view</span>="<span class="val">${view}</span>"
  <span class="attr">color</span>="<span class="val">${color}</span>"
  <span class="attr">setRef</span>={<span class="act">setRef</span>}
  <span class="attr">withoutClose</span>={<span class="bool">${!isClose}</span>}
  <span class="attr">maxToasts</span>={<span class="num">2</span>}
/&gt;
<br />
<span class="cmnt">/*** TOAST DATA ***/</span>
<span class="js">const</span> <span class="el">DemoToast</span> = {
  <span class="attr">message</span>: <span class="val">"Just a toast!"</span>,
  ${isIcon ? `<span class="attr">icon</span>: &lt;<span class="val">Icon</span> <span class="attr">icon</span>="<span class="val">info-sign</span>" <span class="attr">iconSize</span>={<span class="num">24</span>} /&gt;,` : ''}
  <span class="attr">timeout</span>: <span class="num">${timeout}</span>,
  ${isAction? `
  <span class="attr">action</span>: 
    {
      <span class="attr">href</span>: <span class="val">"https://procatinator.com/"</span>,
      <span class="attr">target</span>: <span class="val">"_blank"</span>,
      <span class="attr">text</span>: &lt;<span class="el">strong</span>&gt;Do something.&lt;/<span class="el">strong</span>&gt;,
    }
  ` : ''}
};
<span class="js">const</span> [<span class="js">myRef</span>, <span class="act">setRef</span>] = <span class="el">React</span><span class="act">.useState</span>(<span class="bool">null</span>);
`;

  const trimCode = code => code.replace(/(^[ \t]*\n)/gm, "");

  return <Overview title="Toast" overview={OverviewText} apidata={ToastAPI} code={trimCode(Code)} />;
};
