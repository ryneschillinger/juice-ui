import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //HashRouter,

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import "./@juice-ui/styles/juice.css";
import "./@juice-ui/demo/styles/demo.css";
import DemoAppStyle from "./@juice-ui/demo/styles/style.module.css";

/**APP */
import { Link } from "react-router-dom";
import DemoAppBar from "./@juice-ui/demo/DemoAppBar.jsx";
import Logo from "./@juice-ui/assets/juice-ui-logo.png";
import Navbar from "./@juice-ui/core/Navbar";
import NavbarGroup from "./@juice-ui/core/Navbar/Group.jsx";
import NavbarHeading from "./@juice-ui/core/Navbar/Heading.jsx";
import LeftSideBar from "./@juice-ui/demo/LeftSidebar.jsx";
import * as ROUTES from "./@juice-ui/demo/constants/Routes.jsx";

import { ThemeContext } from "./@juice-ui/core/ThemeContext";
import { SidebarStateContext } from "./@juice-ui/demo/context/SidebarContext";
import { SidebarContainer } from "./@juice-ui/demo/components/SidebarContainer";
import { CustomScrollbar } from "./@juice-ui/demo/components/CustomScrollbar";

import { useDevice } from "./@juice-ui/demo/components/customHooks";

const App = () => {
  let device = useDevice();
  const [theme, setTheme] = useState(useContext(ThemeContext));
  const [isOpenSidebar, setOpenSidebar] = useState(
    useContext(SidebarStateContext)
  );
  const getLogoSize = deviceType => {
    if (deviceType === 'mobile') {
        return '28px';
    }
    if (deviceType === 'tablet') {
        return '34px';
    }
    return '40px';
  }

  const getNavBarSize = deviceType => {
    if (deviceType === 'mobile') {
        return '3rem';
    }
    if (deviceType === 'tablet') {
        return '3.5rem';
    }
    return '4.5rem';
  }

  return (
    <React.Fragment>
      <ThemeContext.Provider
        value={{ isDark: theme.isDark, setDark: setTheme }}
      >
        <SidebarStateContext.Provider
          value={{
            leftSidebarState: isOpenSidebar.left,
            rightSidebarState: isOpenSidebar.right,
            setSidebarState: setOpenSidebar
          }}
        >
          <Router basename="/">
            
            {/**CONTAINER */}
            <div className={DemoAppStyle.container}>
              <SidebarContainer left position="left">
                <div className={DemoAppStyle.sidebar} id="left-sidebar">
                  <SidebarStateContext.Consumer>
                    {({ leftSidebarState, rightSidebarState, setSidebarState }) => (
                      <div onClick={() => setSidebarState({ left: false, right: false })}>
                        <Navbar
                          view="filled"
                          color="primary"
                          type={device}
                          style={{
                            backgroundColor: "var(--color80)",
                            padding: "0 1.2rem"
                          }}
                        >
                          <NavbarGroup align="left">
                            <NavbarHeading>
                              {/**SITE LOGO*/}
                              <Link to={device === "desktop" ? "/docs/introduction" : "#"}>
                                <img
                                  src={Logo}
                                  alt="JuiceUI"
                                  className={DemoAppStyle.site_logo}
                                  style={{ height: getLogoSize(device) }}
                                  onClick={() =>
                                    setSidebarState({
                                      left: !leftSidebarState,
                                      right: rightSidebarState
                                    })
                                  }
                                />
                              </Link>
                            </NavbarHeading>
                          </NavbarGroup>
                        </Navbar>
                      </div>
                    )}
                  </SidebarStateContext.Consumer>
                  <CustomScrollbar
                    style={{ height: `calc(100% - ${getNavBarSize(device)}`}}
                    left
                  >
                    <LeftSideBar />
                  </CustomScrollbar>
                </div>
              </SidebarContainer>

              {/*CONTENT*/}

              <div className={DemoAppStyle.content}>
                <DemoAppBar device={device} />
                <CustomScrollbar
                  style={{ height: `calc(100% - ${getNavBarSize(device)}`}}
                  className={DemoAppStyle.main_content_container}
                  hideTracksWhenNotNeeded
                >
                  <Switch>
                    <Route exact path="/" component={ROUTES.DEMO_DOCS_INTRO} />
                    {/**DOCS ROUTES */}
                    <Route
                      path={ROUTES.DOCS_COLORS}
                      component={ROUTES.DEMO_DOCS_COLORS}
                    />
                    <Route
                      path={ROUTES.DOCS_ICONS}
                      component={ROUTES.DEMO_DOCS_ICONS}
                    />
                    <Route
                      path={ROUTES.DOCS_INTRO}
                      component={ROUTES.DEMO_DOCS_INTRO}
                    />
                    <Route
                      path={ROUTES.DOCS_GETTING_STARTED}
                      component={ROUTES.DEMO_DOCS_GETTING_STARTED}
                    />
                    <Route
                      path={ROUTES.DOCS_USAGE}
                      component={ROUTES.DEMO_DOCS_USAGE}
                    />
                    <Route
                      path={ROUTES.DOCS_PRINCIP}
                      component={ROUTES.DEMO_DOCS_PRINCIP}
                    />
                    {/**COMPONENTS ROUTES */}
                    <Route
                      path={ROUTES.TYPOGRAPHY}
                      component={ROUTES.DEMO_TYPOGRAPHY}
                    />
                    <Route
                      path={ROUTES.BUTTON}
                      component={ROUTES.DEMO_BUTTON}
                    />
                    <Route
                      path={ROUTES.TIME_PICKER}
                      component={ROUTES.DEMO_TIME_PICKER}
                    />
                    <Route
                      path={ROUTES.DATE_PICKER}
                      component={ROUTES.DEMO_DATE_PICKER}
                    />
                      <Route
                      path={ROUTES.DATE_RANGE_PICKER}
                      component={ROUTES.DEMO_DATE_RANGE_PICKER}
                    />
                    <Route
                      path={ROUTES.BUTTON_GROUP}
                      component={ROUTES.DEMO_BUTTON_GROUP}
                    />
                    <Route
                      path={ROUTES.CHECKBOX}
                      component={ROUTES.DEMO_CHECKBOX}
                    />
                    <Route path={ROUTES.RADIO} component={ROUTES.DEMO_RADIO} />
                    <Route
                      path={ROUTES.SWITCH}
                      component={ROUTES.DEMO_SWITCH}
                    />
                    <Route path={ROUTES.CHIP} component={ROUTES.DEMO_CHIP} />
                    <Route path={ROUTES.TREE} component={ROUTES.DEMO_TREE} />
                    <Route
                      path={ROUTES.TOOLTIP}
                      component={ROUTES.DEMO_TOOLTIP}
                    />
                    <Route
                      path={ROUTES.CALLOUT}
                      component={ROUTES.DEMO_CALLOUT}
                    />
                    <Route path={ROUTES.MENU} component={ROUTES.DEMO_MENU} />
                    <Route
                      path={ROUTES.PROGRESS_BAR}
                      component={ROUTES.DEMO_PROGRESS_BAR}
                    />
                    <Route
                      path={ROUTES.SLIDER}
                      component={ROUTES.DEMO_SLIDER}
                    />
                    <Route
                      path={ROUTES.SPINNER}
                      component={ROUTES.DEMO_SPINNER}
                    />
                    <Route path={ROUTES.TOAST} component={ROUTES.DEMO_TOAST} />
                    <Route
                      path={ROUTES.NAVBAR}
                      component={ROUTES.DEMO_NAVBAR}
                    />
                    <Route path={ROUTES.TABS} component={ROUTES.DEMO_TABS} />
                    <Route
                      path={ROUTES.DEFAULT_INPUT}
                      component={ROUTES.DEMO_DEFAULT_INPUT}
                    />
                    <Route
                      path={ROUTES.SEARCH_INPUT}
                      component={ROUTES.DEMO_SEARCH_INPUT}
                    />
                    <Route path={ROUTES.TABLE} component={ROUTES.DEMO_TABLE} />
                    <Route path={ROUTES.CARD} component={ROUTES.DEMO_CARD} />
                    <Route
                      path={ROUTES.COUNTERS}
                      component={ROUTES.DEMO_COUNTERS}
                    />
                    <Route
                      path={ROUTES.DRAWER}
                      component={ROUTES.DEMO_DRAWER}
                    />
                    <Route
                      path={ROUTES.BADGE}
                      component={ROUTES.DEMO_BADGE}
                    />
                    <Route
                      path={ROUTES.SELECT_DEFAULT}
                      component={ROUTES.DEMO_SELECT_DEFAULT}
                    />
                    <Route
                      path={ROUTES.SELECT_MULTI}
                      component={ROUTES.DEMO_SELECT_MULTI}
                    />
                    <Route
                      path={ROUTES.BREADCRUMBS}
                      component={ROUTES.DEMO_BREADCRUMBS}
                    />
                    <Route
                      path={ROUTES.DIVIDER}
                      component={ROUTES.DEMO_DIVIDER}
                    />
                    <Route
                      path={ROUTES.DIALOG}
                      component={ROUTES.DEMO_DIALOG}
                    />
                    <Route
                      path={ROUTES.HAMBURGER}
                      component={ROUTES.DEMO_HAMBURGER}
                    />
                    {/* PRINCIPLES ROUTES */}
                    <Route
                      path={ROUTES.PATTERNS_RADIO}
                      component={ROUTES.DEMO_PATTERNS_RADIO}
                    />
                  </Switch>
                </CustomScrollbar>
              </div>
            </div>
          </Router>
        </SidebarStateContext.Provider>
      </ThemeContext.Provider>
    </React.Fragment>
  );
};

export default App;
