import React from "react";

/* Import component props */
import PropsGroup from "./PropsGroup.jsx";
import SelectColorGroup from "../../SelectColorGroup.jsx";
import SelectViewGroup from "../../SelectViewGroup.jsx";
import DemoAppStyle from "../../styles/style.module.css";

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
  name: "Date Range Picker",
  desc:
    "A DateRangePicker shows two sequential month calendars and lets the user select a single range of days",
  /**default value*/
  view: "flat",
  color: "primary",
  shortcuts: true,
  allowSingleDayRange: false
};
/**Available variants of TYPES & VIEWS (variables)*/
const views = [
  ["Flat", "flat"],
  ["Smooth", "smooth"],
  ["Raised", "raised"]
];
/**END OF SETTINGS*/

/**Demo template*/
const Content = props => {
  /*Set states of props*/
  const [dense, setDense] = React.useState(false);
  const [fill, setFill] = React.useState(false);
  const [dis, setDis] = React.useState(false);
  const [icon, setIcon] = React.useState(false);
  const [rightIcon, setRightIcon] = React.useState(false);
  const [view, setView] = React.useState(Props.view);
  const [color, setColor] = React.useState(Props.color);
  const [shortcuts, setShowShortcuts] = React.useState(Props.shortcuts);
  const [allowSingleDayRange, setSingleDayRange] = React.useState(Props.allowSingleDayRange);

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
            view={view}
            color={color}
            fill={fill}
            dis={dis}
            icon={icon}
            rightIcon={rightIcon}
            dense={dense}
            shortcuts={shortcuts}
            allowSingleDayRange={allowSingleDayRange}
          />
        </div>
        <div className="BodyBig demo-api">
          <API
            name={Props.name}
            view={view}
            color={color}
            fill={fill}
            dis={dis}
            icon={icon}
            rightIcon={rightIcon}
            dense={dense}
            shortcuts={shortcuts}
            allowSingleDayRange={allowSingleDayRange}
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
              fill={fill}
              setFill={setFill}
              dis={dis}
              setDis={setDis}
              icon={icon}
              setIcon={setIcon}
              rightIcon={rightIcon}
              setRightIcon={setRightIcon}
              dense={dense}
              setDense={setDense}
              shortcuts={shortcuts}
              setShowShortcuts={setShowShortcuts}
              allowSingleDayRange={allowSingleDayRange}
              setSingleDayRange={setSingleDayRange}
              margin="2px"
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
