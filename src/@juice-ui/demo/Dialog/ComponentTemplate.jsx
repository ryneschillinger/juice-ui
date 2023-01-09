import React from "react";

/* Import component props */
import PropsGroup from "./PropsGroup.jsx";
import SelectShapeGroup from "../SelectShapeGroup.jsx";
import SelectColorGroup from "../SelectColorGroup.jsx";
import SelectViewGroup from "../SelectViewGroup.jsx";
import DemoAppStyle from "../styles/style.module.css";

import Typography from "../../core/Typography";
import { SidebarContainer } from "../components/SidebarContainer";
import { CustomScrollbar } from "../components/CustomScrollbar";

/**Import demo component body*/
import { DEMO } from "./DemoComponent.jsx";
/**Import usage & API  of component*/
import { API } from "./api.jsx";

/**SETTINGS OF THIS DEMO*/
/*Set component data (variables)*/
const Props = {
  name: "Dialog",
  desc: "Dialogs present content overlaid over other parts of the UI.",
  /**default value*/
  type: "default",
  view: "smooth",
  color: "primary",
  footer: true,
  showCloseButton: true,
  canOutsideClickClose: false,
  canEscapeKeyClose: false
};
/**Available variants of TYPES & VIEWS (variables)*/
const shapes = [["Default", "default"], ["Dense", "dense"]];
const views = [
  ["Filled", "filled"],
  ["Smooth", "smooth"],
  ["Raised", "raised"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [isOpen, setOpen] = React.useState(false);
  const [opacity, setOpacity] = React.useState(50);
  const [shape, setShape] = React.useState(Props.type);
  const [view, setView] = React.useState(Props.view);
  const [color, setColor] = React.useState(Props.color);
  const [footer, setFooter] = React.useState(Props.footer);
  const [showCloseButton, setShowCloseButton] = React.useState(Props.showCloseButton);
  const [canEscapeKeyClose, setCanEscapeKeyClose] = React.useState(Props.canEscapeKeyClose);
  const [canOutsideClickClose, setCanOutsideClickClose] = React.useState(Props.canOutsideClickClose);

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
            type={shape}
            view={view}
            color={color}
            isOpen={isOpen}
            setOpen={setOpen}
            opacity={opacity}
            footer={footer}
            setFooter={setFooter}
            showCloseButton={showCloseButton}
            setShowCloseButton={setShowCloseButton}
            canEscapeKeyClose={canEscapeKeyClose || !showCloseButton}
            setCanEscapeKeyClose={setCanEscapeKeyClose}
            canOutsideClickClose={canOutsideClickClose || !showCloseButton}
            setCanOutsideClickClose={setCanOutsideClickClose}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            type={shape}
            view={view}
            color={color}
            isOpen={isOpen}
            opacity={opacity}
            footer={footer}
            showCloseButton={showCloseButton}
            canOutsideClickClose={canOutsideClickClose || !showCloseButton}
            canEscapeKeyClose={canEscapeKeyClose || !showCloseButton}
          />
        </div>
      </div>

      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          <CustomScrollbar
            autoHide
            autoHideTimeout={2000}
            hideTracksWhenNotNeeded
            renderThumbHorizontal={() => {
              return <div />;
            }}
            renderTrackHorizontal={() => <div />}
          >
            {/**Set this Props component */}
            <PropsGroup
              // shape={shape}
              opacity={opacity}
              setOpacity={setOpacity}
              margin="8px"
              footer={footer}
              setFooter={setFooter}
              showCloseButton={showCloseButton}
              setShowCloseButton={setShowCloseButton}
              canEscapeKeyClose={canEscapeKeyClose || !showCloseButton}
              setCanEscapeKeyClose={setCanEscapeKeyClose}
              canOutsideClickClose={canOutsideClickClose || !showCloseButton}
              setCanOutsideClickClose={setCanOutsideClickClose}
            />
            <SelectShapeGroup
              shape={shape}
              setShape={setShape}
              shapes={shapes}
            />
            <SelectViewGroup view={view} setView={setView} views={views} />
            <SelectColorGroup color={color} setColor={setColor} />
          </CustomScrollbar>
        </div>
      </SidebarContainer>
      {/***** */}
    </div>
  );
};

export default Content;
