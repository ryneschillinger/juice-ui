import React from "react";
import { withRouter } from "react-router";

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
  name: "Navbar",
  desc:
    "The Navbar presents useful navigation controls at the top of an application.",
  /**default value*/
  type: "desktop",
  view: "smooth",
  color: "primary",
  navType: "menu"
};
/**Available variants of TYPES & VIEWS (variables)*/
const shapes = [
  ["Desktop", "desktop"],
  ["Tablet", "tablet"],
  ["Mobile", "mobile"]
];
const views = [
  ["Flat", "flat"],
  ["Filled", "filled"],
  ["Smooth", "smooth"],
  ["Raised", "raised"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = withRouter(props => {
  const { location } = props;
  /*Set states of props*/

  const [shape, setShape] = React.useState(Props.type);
  const [view, setView] = React.useState(Props.view);
  const [color, setColor] = React.useState(Props.color);
  const [navType, setNavType] = React.useState(Props.navType);

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
            location={location}
            navType={navType}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            type={shape}
            view={view}
            color={color}
            navType={navType}
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
            <div className={DemoAppStyle["demo-props"]}>
              <PropsGroup
                navType={navType}
                setNavType={setNavType}
                margin="8px"
              />
              <SelectShapeGroup
                shape={shape}
                setShape={setShape}
                shapes={shapes}
              />
              <SelectViewGroup view={view} setView={setView} views={views} />
              <SelectColorGroup color={color} setColor={setColor} />
            </div>
          </CustomScrollbar>
        </div>
      </SidebarContainer>
      {/***** */}
    </div>
  );
});

export default Content;
