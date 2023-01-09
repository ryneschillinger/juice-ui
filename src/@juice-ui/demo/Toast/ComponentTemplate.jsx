import React from "react";

/* Import component props */
import PropsGroup from "./PropsGroup.jsx";
import SelectColorGroup from "../SelectColorGroup.jsx";
import SelectViewGroup from "../SelectViewGroup.jsx";
import SelectPositionGroup from "../SelectPositionGroup.jsx";
import DemoAppStyle from "../styles/style.module.css";
import { Icon } from "@blueprintjs/core";

import Typography from "../../core/Typography";
import { SidebarContainer } from "../components/SidebarContainer";

/**Import demo component body*/
import { DEMO } from "./DemoComponent.jsx";
/**Import usage & API  of component*/
import { API } from "./api.jsx";

/**SETTINGS OF THIS DEMO*/
/*Set component data (variables)*/
const Props = {
  name: "Toaster",
  desc:
    "A toast is a lightweight, ephemeral notice from an application in direct response to a user's action.",
  /**default value*/
  timeout: 5000,
  position: "bottom",
  view: "filled",
  color: "primary"
};
/**Available variants of TYPES & VIEWS (variables)*/
const positions = [
  ["Bottom", "bottom"],
  ["Bottom Left", "bottom-left"],
  ["Bottom Right", "bottom-right"],
  ["Top", "top"],
  ["Top Left", "top-left"],
  ["Top Right", "top-right"]
];
const views = [
  ["Filled", "filled"],
  ["Smooth", "smooth"],
  ["Outlined", "outlined"],
  ["Raised", "raised"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [isIcon, setIcon] = React.useState(true);
  const [isAction, setAction] = React.useState(false);
  const [isClose, setClose] = React.useState(true);
  const [position, setPosition] = React.useState(Props.position);
  const [timeout, setTimeout] = React.useState(Props.timeout);
  const [view, setView] = React.useState(Props.view);
  const [color, setColor] = React.useState(Props.color);

  React.useEffect(() => {
    document.title = `Juice React UI System: Component ${Props.name}`;
    document.getElementsByTagName("META")["description"].content = `Demo ${
      Props.name
    } component for React Juice UI Design System with possible props. ${
      Props.desc
    }`;
  });

  const DemoToast = {
    message: "Just a toast!",
    icon: isIcon ? <Icon icon="info-sign" iconSize={24} /> : null,
    timeout: timeout,
    action: isAction
      ? {
          href: "https://procatinator.com/",
          target: "_blank",
          text: <strong>Do something.</strong>
        }
      : null
  };

  /** */
  return (
    <div className={DemoAppStyle["content-container"]}>
      <div className={DemoAppStyle["content-component"]}>
        {/*COMPONENT*/}
        {/*NAME*/}
        <Typography type="h3" className="demo-name">
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
            position={position}
            color={color}
            isIcon={isIcon}
            DemoToast={DemoToast}
            isClose={isClose}
            timeout={timeout}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            view={view}
            position={position}
            color={color}
            isIcon={isIcon}
            DemoToast={DemoToast}
            isClose={isClose}
            isAction={isAction}
            timeout={timeout}
          />
        </div>
      </div>
      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          {/**Set this Props component */}
          <div className={DemoAppStyle["demo-props"]}>
            <PropsGroup
              isIcon={isIcon}
              setIcon={setIcon}
              isAction={isAction}
              setAction={setAction}
              isClose={isClose}
              setClose={setClose}
              timeout={timeout}
              setTimeout={setTimeout}
              margin="4px"
            />
            <SelectPositionGroup position={position} setPosition={setPosition} positions={positions} />
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
