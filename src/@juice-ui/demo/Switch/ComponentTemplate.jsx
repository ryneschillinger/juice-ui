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
  name: "Switch",
  desc:
    "A switch is simply an alternate appearance for a checkbox that simulates on/off instead of checked/unchecked.",
  /**default value*/
  type: "def",
  view: "flat",
  color: "primary"
};
/**Available variants of TYPES & VIEWS (variables)*/
const shapes = [["Default", "def"], ["Dense", "dense"]];
const views = [
  ["Flat", "flat"],
  ["Smooth", "smooth"],
  ["Outlined", "outlined"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [indet, setIndet] = React.useState(false);
  const [dis, setDis] = React.useState(false);
  const [help, setHelp] = React.useState(false);
  const [rtl, setRtl] = React.useState(false);
  const [right, setRight] = React.useState(false);
  const [isDemo, setDemo] = React.useState(true);
  const [fill, setFill] = React.useState(false);
  const [iOS, setIOS] = React.useState(false);

  const [shape, setShape] = React.useState(Props.type);
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
            isDemo={isDemo}
            setDemo={setDemo}
            dis={dis}
            help={help}
            rtl={rtl}
            right={right}
            fill={fill}
            iOS={iOS}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            type={shape}
            color={color}
            isDemo={isDemo}
            dis={dis}
            help={help}
            rtl={rtl}
            right={right}
            fill={fill}
            iOS={iOS}
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
                shape={shape}
                indet={indet}
                setIndet={setIndet}
                dis={dis}
                setDis={setDis}
                help={help}
                setHelp={setHelp}
                rtl={rtl}
                setRtl={setRtl}
                right={right}
                setRight={setRight}
                fill={fill}
                setFill={setFill}
                iOS={iOS}
                setIOS={setIOS}
                margin="4px"
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
};

export default Content;
