import React from "react";
import Typography from "../core/Typography";

export const OverviewTemplate = props => (
  <>
    <Typography type="h4" style={{ marginTop: "4rem" }}>Overview</Typography>
    <Typography type="body" large>
      <p style={{ marginTop: "1rem" }}>
        First, you need to import a component into your code (сheck that the component path
        is right):
      </p>
      <pre>
        import {props.name} from "../../core/{props.folder}
        {props.name}";
      </pre>{" "}
      <p>
        {" "}
        To use the component, copy and paste an example from the CODE tab.
        <br /> Default props of component can be omitted, they are applied
        automatically. For example, you can skip the prop <b>type='def'</b>,
        because 'def' is the default value of prop 'type'.
      </p>
      {props.text}
    </Typography>
  </>
);
