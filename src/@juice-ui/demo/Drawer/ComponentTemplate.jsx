import React from "react";

/* Import component props */
import PropsGroup from "./PropsGroup.jsx";
import DemoAppStyle from "../styles/style.module.css";

import Typography from "../../core/Typography";
import { SidebarContainer } from "../components/SidebarContainer";

/**Import demo component body*/
import { DEMO } from "./DemoComponent.jsx";
/**Import usage & API  of component*/
import { API } from "./api.jsx";

/**SETTINGS OF THIS DEMO*/
/*Set component data (variables)*/
const Props = {
  name: "Drawer",
  desc:
    "Drawers overlay content over existing parts of the UI and are anchored to the edge of the screen.",
  /**default value*/
  type: "default",
  view: "smooth",
  color: "default",
  title: "This is a drawer",
  icon: "info-sign"
};
/**Available variants of SIZE (variables)*/
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [isOpen, setOpen] = React.useState(false);
  const [position, setPosition] = React.useState("right");
  const [backdrop, setBackdrop] = React.useState(true);
  const [size, setSize] = React.useState("default");
  const [canClickOutside, setCanClickOutside] = React.useState(false);
  const [escapeKeyToClose, setEscapeKeyToClose] = React.useState(false);
  const [isCloseButtonShown, setIsCloseButtonShown] = React.useState(true);

  React.useEffect(() => {
    document.title = `Juice React UI System: Component ${Props.name}`;
    document.getElementsByTagName("META")["description"].content = `Demo ${
      Props.name
    } component for React Juice UI Design System with possible props. ${
      Props.desc
    }`;
  });

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
            isOpen={isOpen}
            setOpen={setOpen}
            position={position}
            backdrop={backdrop}
            title={Props.title}
            icon={Props.icon}
            size={size}
            canClickOutside={canClickOutside}
            escapeKeyToClose={escapeKeyToClose}
            isCloseButtonShown={isCloseButtonShown}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            position={position}
            isOpen={isOpen}
            backdrop={backdrop}
            title={Props.title}
            icon={Props.icon}
            size={size}
            canClickOutside={canClickOutside}
            escapeKeyToClose={escapeKeyToClose}
            isCloseButtonShown={isCloseButtonShown}
          />
        </div>
      </div>
      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          {/**Set this Props component */}
          <PropsGroup
            position={position}
            setPosition={setPosition}
            backdrop={backdrop}
            canClickOutside={canClickOutside || !isCloseButtonShown}
            setCanClickOutside={setCanClickOutside}
            setBackdrop={setBackdrop}
            escapeKeyToClose={escapeKeyToClose || !isCloseButtonShown}
            setEscapeKeyToClose={setEscapeKeyToClose}
            isCloseButtonShown={isCloseButtonShown}
            setIsCloseButtonShown={setIsCloseButtonShown}
            size={size}
            setSize={setSize}
            margin="8px"
          />
        </div>
      </SidebarContainer>
      {/***** */}
    </div>
  );
};

export default Content;
