import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Logo from "../assets/juice-ui-logo.png";
import { ReactComponent as GitHubIcon } from "../assets/github-logo.svg";
import FigmaIcon from "../assets/figma-logo.svg";

import Button from "../core/Button";
import Hamburger from "../core/Hamburger";
import { CustomButton } from "./components/CustomButton";
import Navbar from "../core/Navbar";
import SearchInput from "../core/Inputs/SearchInput";
import NavbarGroup from "../core/Navbar/Group.jsx";
import NavbarHeading from "../core/Navbar/Heading.jsx";
import SiteSearch from "./SiteSearch";
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

              <Navbar
                type={device}
                view="filled"
                color="primary"
                className={DemoAppStyle.site_navbar}
              >
                <NavbarGroup align="left">
                  <NavbarHeading>
                    {/**MENU BUTTON*/}
                    {device !== "desktop" &&
                      <Hamburger
                        type="default"
                        view="filled"
                        color="primary"
                        size={device === "mobile" ? 20 : 24 }
                        isOpen={false}
                        setOpen={() =>
                          setSidebarState({
                            left: !leftSidebarState,
                            right: rightSidebarState
                          })
                        }
                        variant="slider"
                        rounded={true}
                      />
                    }
                  </NavbarHeading>
                </NavbarGroup>
                {/**ACTIONS*/}
                <NavbarGroup align="right" >
                  <SiteSearch device={device} />
                  <a
                    href={ROUTES.GITHUB_LINK}
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
                        <GitHubIcon
                          className={DemoAppStyle.github_icon}
                          style={{ height: "20px" }}
                        />
                      }
                      text={device === "desktop" ? "GitHub Repo" : ""}
                      style={{width: device !== "desktop" && "2.6rem"}}
                      device={device}
                    />
                  </a>
                  <a
                    href={ROUTES.FIGMA_DEMO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: 0 }}
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
                        />
                      }
                      text={device === "desktop" ? "Figma Preview" : ""}
                      style={{width: device !== "desktop" && "2.6rem"}}
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
