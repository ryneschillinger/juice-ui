import React from "react";

/* Import component props */
import PropsGroup from "./PropsGroup.jsx";
import SelectColorGroup from "../SelectColorGroup.jsx";
import SelectViewGroup from "../SelectViewGroup.jsx";
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
  name: "Default Input",
  desc: "A Default Input let users enter and edit text.",
  /**default value*/
  //type: "def",
  view: "outlined",
  color: "primary"
};
/**Available variants of TYPES & VIEWS (variables)*/
//const shapes = [["Default", "def"], ["Dense", "dense"]];
const views = [
  ["Smooth", "smooth"],
  ["Outlined", "outlined"],
  ["Raised", "raised"],
  ["Filled", "filled"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [isError, setError] = React.useState(false);
  const [isSuccess, setSuccess] = React.useState(false);
  const [isClear, setClear] = React.useState(false);
  const [isFill, setFill] = React.useState(false);
  const [isDense, setDense] = React.useState(false);
  const [isPass, setPass] = React.useState(false);

  // const [shape, setShape] = React.useState(Props.type);
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
            //type={shape}
            view={view}
            color={isError ? "danger" : color}
            isSuccess={isSuccess}
            isError={isError}
            isClear={isClear}
            isFill={isFill}
            isDense={isDense}
            isPass={isPass}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            color={isError ? "danger" : color}
            view={view}
            isSuccess={isSuccess}
            isError={isError}
            isClear={isClear}
            isFill={isFill}
            isDense={isDense}
            isPass={isPass}
          />
        </div>
      </div>
      {/* Props*/}
      <SidebarContainer>
        <div className={DemoAppStyle["right_sidebar"]}>
          <div className={DemoAppStyle["demo-props"]}>
            <PropsGroup
              isError={isError}
              setError={setError}
              isSuccess={isSuccess}
              setSuccess={setSuccess}
              isClear={isClear}
              setClear={setClear}
              isFill={isFill}
              setFill={setFill}
              isDense={isDense}
              setDense={setDense}
              isPass={isPass}
              setPass={setPass}
              margin="2px"
            />
            {/*}   <SelectShapeGroup
              shape={shape}
              setShape={setShape}
              shapes={shapes}
  />*/}
            <SelectViewGroup view={view} setView={setView} views={views} />
            <SelectColorGroup
              color={isError ? "danger" : color}
              setColor={setColor}
              disabled={isError}
            />
          </div>
        </div>
      </SidebarContainer>
      {/***** */}
    </div>
  );
};

export default Content;
