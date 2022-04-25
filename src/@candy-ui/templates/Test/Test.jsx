import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import Logo from "../../setproduct-logo.svg";

import { CustomButton, GetLicense } from "./components/Buttons.jsx";
import Navbar from "../../core/Navbar";
import NavbarGroup from "../../core/Navbar/group.jsx";

import NavbarHeading from "../../core/Navbar/heading.jsx";

const AppBar = withRouter(props => {
  const { location } = props;

  const [shape, setShape] = React.useState("desktop");

  /** */
  /**Get and store window width */
  const [sizeW, setW] = React.useState(window.innerWidth);

  React.useEffect(() => {
    window.addEventListener("resize", () => setW(window.innerWidth));
    sizeW <= 640
      ? setShape("mobile")
      : sizeW <= 1024
      ? setShape("tablet")
      : sizeW <= 1280
      ? setShape("laptop")
      : sizeW > 1280 && setShape("desktop");
  }, [sizeW]);

  return (
    <React.Fragment>
      {/*} <header style={{ height: "3rem" }}>*/}

      <Navbar type={shape} view="filled" color="primary">
        <NavbarGroup align="left">
          <NavbarHeading>
            <img
              src={Logo}
              alt="SetProduct design"
              style={{ height: "24px" }}
            />
          </NavbarHeading>
        </NavbarGroup>
        {/**BOTTONS GROUP */}
        <NavbarGroup align="center">
          {/*}  <InputGroup type="search" placeholder="Search" leftIcon="search" />*/}
          <Link to="#" style={{ textDecoration: "none", paddingRight: "6px" }}>
            <CustomButton
              dense={shape !== "desktop" && shape !== "mobile" && true}
              view="flat"
              color="primary"
              icon="document-open"
              text={shape === "mobile" ? "Docs" : "Documentation"}
              active={location.pathname === "/docs"}
              disabled={false}
            />
          </Link>
          <Link
            to="/components/button"
            style={{ textDecoration: "none", paddingRight: "6px" }}
          >
            <CustomButton
              dense={shape !== "desktop" && shape !== "mobile" && true}
              view="flat"
              color="primary"
              icon="code"
              text="Components"
              active={location.pathname.match("/components") && true}
            />
          </Link>
          <a
            href="https://gum.co/figma2react"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <GetLicense
              dense={shape !== "desktop" && shape !== "mobile" && true}
              view="flat"
              color="primary"
              icon="shopping-cart"
              text={shape === "mobile" ? "License" : "Get a License"}
            />
          </a>
        </NavbarGroup>
        {/**ICON-BUTTONS GROUP */}
        <NavbarGroup align="right">
          <CustomButton
            type={shape !== "desktop" ? "icon" : "default"}
            view="flat"
            color="primary"
            icon="envelope"
            style={{ marginLeft: "6px" }}
            text={shape === "desktop" && "Contact us"}
            dense={false}
          />
        </NavbarGroup>
      </Navbar>
      {/*</header>*/}
    </React.Fragment>
  );
});

export default AppBar;
