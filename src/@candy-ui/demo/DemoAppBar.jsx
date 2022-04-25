import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Logo from "../assets/candy-ui-logo.svg";
import FigmaIcon from "../assets/figma-logo.svg";

import Button from "../core/Button";
import { CustomButton } from "./components/CustomButton";
import Navbar from "../core/Navbar";
import SearchInput from "../core/Inputs/SearchInput";
import NavbarGroup from "../core/Navbar/Group.jsx";
import NavbarHeading from "../core/Navbar/Heading.jsx";

import DemoAppStyle from "./styles/style.module.css";
import * as ROUTES from "./constants/Routes.jsx";

import { ThemeContext } from "../core/ThemeContext";
import { SidebarStateContext } from "./context/SidebarContext";

const AppBar = props => {
  const { device, location } = props;

  let showFabButton =
    location.pathname === "/docs/colors"
      ? false
      : location.pathname === "/docs/getting-started"
      ? false
      : location.pathname === "/docs/introduction"
      ? false
      : location.pathname === "/docs/usage"
      ? false
      : location.pathname === "/docs/principles"
      ? false
      : location.pathname === "/"
      ? false
      : true;

  return (
    <ThemeContext.Consumer>
      {({ isDark, setDark }) => (
        <SidebarStateContext.Consumer>
          {({ leftSidebarState, rightSidebarState, setSidebarState }) => (
            <React.Fragment>
              {showFabButton && (
                <div className={DemoAppStyle.props_button}>
                  <Button
                    type="circle"
                    view="filled"
                    icon={"cog"}
                    color="primary"
                    onClick={() =>
                      setSidebarState({
                        left: leftSidebarState,
                        right: !rightSidebarState
                      })
                    }
                  />
                </div>
              )}

              <Navbar type={device} view="filled" color="primary" fixedToTop>
                <NavbarGroup align="left">
                  <NavbarHeading>
                    {/**SITE LOGO*/}
                    <Link to={device === "desktop" ? "/docs/introduction" : "#"}>
                      <img
                        src={Logo}
                        alt="CandyUI"
                        className={DemoAppStyle.site_logo}
                        onClick={() =>
                          setSidebarState({
                            left: !leftSidebarState,
                            right: rightSidebarState
                          })
                        }
                      />
                    </Link>
                  </NavbarHeading>
                  {/**NAV BUTTONS*/}
                  <Link to={device === "desktop" ? "/docs/getting-started" : "#"}>
                    <CustomButton
                      view="flat"
                      color="primary"
                      text="Getting Started"
                      device={device}
                      active={location.pathname.match("getting-started") && true}
                      dense={device === "mobile" && true}
                    />
                  </Link>
                  <Link to={device === "desktop" ? "/docs/usage" : "#"}>
                    <CustomButton
                      view="flat"
                      color="primary"
                      text="Usage"
                      device={device}
                      active={location.pathname.match("usage") && true}
                      dense={device === "mobile" && true}
                    />
                  </Link>
                  <Link to={device === "desktop" ? "/docs/principles" : "#"}>
                    <CustomButton
                      view="flat"
                      color="primary"
                      text="Principles"
                      device={device}
                      active={location.pathname.match("principles") && true}
                      dense={device === "mobile" && true}
                    />
                  </Link>
                </NavbarGroup>
                {/**ACTIONS*/}
                <NavbarGroup align="right" style={{ marginRight: "0.75rem" }}>
                  <SearchInput
                    type={device === 'mobile' ? 'dense' : 'def'}
                    view="smooth" 
                    color="primary"
                    placeholder="Search guidelines..."
                    fill={device === 'mobile'}
                    // onSearch ={ search func }
                  />
                  <a
                    href={ROUTES.FIGMA_DEMO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: "0.5rem" }}
                  >
                    <Button
                      dense={device === "mobile" && true}
                      type="default"
                      view="filled"
                      color="primary"
                      icon={
                        <img
                          src={FigmaIcon}
                          alt="Figma Demo"
                          style={{ height: "20px" }}
                          onClick={() =>
                            setSidebarState({
                              left: !leftSidebarState,
                              right: rightSidebarState
                            })
                          }
                        />
                      }
                      text="Figma Preview"
                      device={device}
                    />
                  </a>
                </NavbarGroup>
              </Navbar>
            </React.Fragment>
          )}
        </SidebarStateContext.Consumer>
      )}
    </ThemeContext.Consumer>
  );
};

export default withRouter(AppBar);
