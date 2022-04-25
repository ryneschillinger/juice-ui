import React from "react";

/* Import component props */
import SelectColorGroup from "../SelectColorGroup.jsx";
import DemoAppStyle from "../styles/style.module.css";

import Typography from "../../core/Typography";
import { SidebarContainer } from "../components/SidebarContainer";
import { CustomScrollbar } from "../components/CustomScrollbar";

/**Import demo component body*/
import { DEMO } from "./DemoComponent.jsx";
/**Import usage & API  of component*/
import { API } from "./api.jsx";
import PropsGroup from "./PropsGroup.jsx";
import SelectViewGroup from "../SelectViewGroup.jsx";

/**SETTINGS OF THIS DEMO*/
/*Set component data (variables)*/
const Props = {
  name: "Spinner",
  desc: "Spinners indicate system progress in a circular fashion.",
  /**default value*/
  view: "smooth",
  color: "primary"
};

const views = [["Smooth", "smooth"], ["Filled", "filled"]];
/**Demo template*/
const Content = props => {
  /*Set states of props*/

  const [color, setColor] = React.useState(Props.color);
  const [size, setSize] = React.useState(50);
  const [value, setValue] = React.useState(false);
  const [valueAmount, setValueAmount] = React.useState(30);
  const [view, setView] = React.useState(Props.view);

  React.useEffect(() => {
    document.title = `React Design System: component ${Props.name}`;
    document.getElementsByTagName("META")[
      "description"
    ].content = `Demo ${Props.name} component for React Setproduct Design System with possible props. ${Props.desc}`;
  });

  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component"]}>
        {/*COMPONENT*/}
        {/*NAME*/}
        <Typography type="h4" className="demo-name">
          {Props.name}
        </Typography>
        {/*Description */}
        <Typography type="h6" colorStep={60} className="demo-desc">
          {Props.desc}
        </Typography>
        {/*Content*/}
        <div className="demo-content-component">
          <DEMO
            view={view}
            color={color}
            size={size}
            value={value ? valueAmount/100 : null}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            size={size}
            view={view}
            name={Props.name}
            color={color}
            value={value}
            valueAmount={valueAmount}
          />
        </div>
      </div>

      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          <div className={DemoAppStyle["demo-props"]}>
            {/**Set this Props component */}
            <PropsGroup
              // shape={shape}
              size={size}
              setSize={setSize}
              setValue={setValue}
              value={value}
              valueAmount={valueAmount}
              setValueAmount={setValueAmount}
              margin="2px"
            />
            <SelectViewGroup view={view} setView={setView} views={views} />
            <SelectColorGroup color={color} setColor={setColor} />
          </div>
        </div>
      </SidebarContainer>
      {/***** */}
    </div>
  );
};

export default Content;
