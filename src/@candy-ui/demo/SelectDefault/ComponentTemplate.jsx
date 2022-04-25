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
  name: "Default Select",
  desc: "Selects display lists of interactive items.",
  /**default value*/
  type: "def",
  view: "outlined",
  color: "primary"
};
/**Available variants of TYPES & VIEWS (variables)*/
const shapes = [["Default", "def"], ["Dense", "dense"]];
const views = [
  ["Outlined", "outlined"],
  ["Smooth", "smooth"],
  ["Raised", "raised"],
  ["Filled", "filled"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [shape, setShape] = React.useState(Props.type);
  const [icon, setIcon] = React.useState(true);
  const [dense, setDense] = React.useState(false);
  const [fill, setFill] = React.useState(false);
  const [centerAlign, setCenterAlign] = React.useState(false);
  const [filterable, setFilterable] = React.useState(true);
  const [disabled, setDisabled] = React.useState(false);
  const [matchTargetWidth, setMatchTargetWidth] = React.useState(false);
  const [view, setView] = React.useState(Props.view);
  const [color, setColor] = React.useState(Props.color);

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
            type={shape}
            view={view}
            color={color}
            icon={icon}
            dense={dense}
            fill={fill}
            centerAlign={centerAlign}
            disabled={disabled}
            filterable={filterable}
            matchTargetWidth={matchTargetWidth}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            type={shape}
            view={view}
            color={color}
            icon={icon}
            dense={dense}
            fill={fill}
            centerAlign={centerAlign}
            disabled={disabled}
            filterable={filterable}
            matchTargetWidth={matchTargetWidth}
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
              icon={icon}
              setIcon={setIcon}
              dense={dense}
              setDense={setDense}
              disabled={disabled}
              fill={fill}
              centerAlign={centerAlign}
              setCenterAlign={setCenterAlign}
              setFill={setFill}
              setDisabled={setDisabled}
              filterable={filterable}
              setFilterable={setFilterable}
              matchTargetWidth={matchTargetWidth}
              setMatchTargetWidth={setMatchTargetWidth}
              margin="2px"
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
