import React from "react";

/* Import component props */
import PropsGroup from "./PropsGroup.jsx";
import SelectShapeGroup from "../../SelectShapeGroup.jsx";
import SelectColorGroup from "../../SelectColorGroup.jsx";
import DemoAppStyle from "../../styles/style.module.css";
import SelectViewGroup from "../../SelectViewGroup.jsx";
import Typography from "../../../core/Typography";
import { SidebarContainer } from "../../components/SidebarContainer";
import { CustomScrollbar } from "../../components/CustomScrollbar";

/**Import demo component body*/
import { DEMO } from "./DemoComponent.jsx";
/**Import usage & API  of component*/
import { API } from "./api.jsx";

/**SETTINGS OF THIS DEMO*/
/*Set component data (variables)*/
const Props = {
  name: "Time Picker",
  type: "def",
  view: "flat",
  desc: "A TimePicker allows the user to specify a time.",
  /**default value*/
  view: "outlined",
  color: "primary"
};

/**Available variants of TYPES & VIEWS (variables)*/
const shapes = [["Default", "def"], ["Dense", "dense"]];
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
  const [shape, setShape] = React.useState(Props.type);
  const [isArrow, setArrow] = React.useState(false);
  const [view, setView] = React.useState(Props.view);
  const [useAmPm, setAmPm] = React.useState(false);
  const [isSec, setSec] = React.useState(false);
  const [isMsec, setMsec] = React.useState(false);
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
            isArrow={isArrow}
            useAmPm={useAmPm}
            isSec={isSec}
            isMsec={isMsec}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            type={shape}
            view={view}
            color={color}
            isArrow={isArrow}
            useAmPm={useAmPm}
            isSec={isSec}
            isMsec={isMsec}
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
              isArrow={isArrow}
              setArrow={setArrow}
              useAmPm={useAmPm}
              setAmPm={setAmPm}
              isSec={isSec}
              isMsec={isMsec}
              setSec={setSec}
              setMsec={setMsec}
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
