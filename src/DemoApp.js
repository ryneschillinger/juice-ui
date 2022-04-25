import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"; //HashRouter,

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import "./@candy-ui/styles/setproduct.css";
import "./@candy-ui/demo/styles/demo.css";
import DemoAppStyle from "./@candy-ui/demo/styles/style.module.css";

/**APP */
import DemoAppBar from "./@candy-ui/demo/DemoAppBar.jsx";
import LeftSideBar from "./@candy-ui/demo/LeftSidebar.jsx";
import * as ROUTES from "./@candy-ui/demo/constants/Routes.jsx";

import { ThemeContext } from "./@candy-ui/core/ThemeContext";
import { SidebarStateContext } from "./@candy-ui/demo/context/SidebarContext";
import { SidebarContainer } from "./@candy-ui/demo/components/SidebarContainer";
import { CustomScrollbar } from "./@candy-ui/demo/components/CustomScrollbar";

import { useDevice } from "./@candy-ui/demo/components/customHooks";

const App = () => {
  let device = useDevice();
  const [theme, setTheme] = useState(useContext(ThemeContext));
  const [isOpenSidebar, setOpenSidebar] = useState(
    useContext(SidebarStateContext)
  );

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

              {/**HEADER */}
              <div className={DemoAppStyle.header}>
                <DemoAppBar device={device} />
              </div>

              {/**LEFT SIDEBAR */}

              <SidebarContainer left position="left">
                <div className={DemoAppStyle.sidebar} id="left-sidebar">
                  <CustomScrollbar left>
                    <LeftSideBar />
                  </CustomScrollbar>
                </div>
              </SidebarContainer>

              {/*CONTENT*/}

              <div className={DemoAppStyle.content}>
                <CustomScrollbar
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
                    <Route path={ROUTES.CHIPS} component={ROUTES.DEMO_CHIPS} />
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
                      path={ROUTES.TABS_SEGMENTED}
                      component={ROUTES.DEMO_TABS_SEGMENTED}
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
