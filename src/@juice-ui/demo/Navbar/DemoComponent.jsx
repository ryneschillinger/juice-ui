import React from "react";
import { Link } from "react-router-dom";

/**Import core component (variable)*/
/**Import NAVBAR components parts */
import NavbarGroup from "../../core/Navbar/Group.jsx";
import NavbarHeading from "../../core/Navbar/Heading.jsx";
import Navbar from "../../core/Navbar";
import Hamburger from "../../core/Hamburger";
import { CustomButton } from "../components/CustomButton";
import Logo from "../../assets/juice-ui-icon.png";
import DemoAppStyle from "../../../@juice-ui/demo/styles/style.module.css";
/** */

/*JuiceUI components*/
import Button from "../../core/Button";
/** */

export const DEMO = props => {
  const {
    type,
    view,
    color,
    location,
    active = false,
    navType
  } = props;
  const [isOpen, setOpen] = React.useState(active);

  const maxWidth =
    type === "mobile" ? "360px" : type === "tablet" ? "1024px" : "100%";

  const getLogoSize = deviceType => {
    if (deviceType === 'mobile') {
        return '20px';
    }
    if (deviceType === 'tablet') {
        return '34px';
    }
    return '40px';
  }

  return (
    <div style={{ maxWidth: maxWidth, width: type === "mobile" && "300px" }}>
      {/*APPBAR*/}
      <Navbar type={type} view={view} color={color} style={{ zIndex: "0" }}>
        {/**LOGO */}
        <NavbarGroup align="left">
          <NavbarHeading>
            {navType === "logo" && (
              <img
                src={Logo}
                alt="JuiceUI"
                style={{
                  height: getLogoSize(type),
                  marginRight: "0.35rem"
                }}
              />
            )}
            {navType === "menu" && (
              <Hamburger
                type="circle"
                view={view === "smooth" ? "outlined" : "smooth"}
                color={color}
                size={type === "desktop" ? 20 : (type === "tablet" ? 14 : 12)}
                variant="slider"
                isOpen={isOpen}
                setOpen={setOpen}
              />
            )}
          </NavbarHeading>
        </NavbarGroup>

        {/**BOTTONS GROUP */}
        <NavbarGroup align="center">
          {/**BUTTON HOME*/}
          <Link
            to="/components/navbar/dashboard"
            style={{ textDecoration: "none", marginLeft: "12px" }}
          >
            {view === "filled" ? (
              <CustomButton
                view="flat"
                color={color}
                text="Dashboard"
                device={type}
                active={location.pathname.match("dashboard") && true}
                dense={type === "desktop" ? false : true}
              />
            ) : (
              <Button
                type="default"
                view={view === "smooth" ? view : "flat"}
                color={color}
                text="Dashboard"
                active={location.pathname.match("dashboard") && true}
                dense={type === "desktop" ? false : true}
              />
            )}
          </Link>
          {/**BUTTON MESSAGES*/}
          <Link
            to="/components/navbar/messages"
            style={{ textDecoration: "none" }}
          >
            {view === "filled" ? (
              <CustomButton
                view="flat"
                color={color}
                text="Messages"
                device={type}
                active={location.pathname.match("messages") && true}
                dense={type === "desktop" ? false : true}
              />
            ) : (
              <Button
                type="default"
                view={view === "smooth" ? view : "flat"}
                color={color}
                text="Messages"
                active={location.pathname.match("messages") && true}
                dense={type === "desktop" ? false : true}
              />
            )}
          </Link>

          {/**NOTIFICATIONS BUTTON*/}
          <Link
            to="/components/navbar/notifications"
            style={{ textDecoration: "none" }}
          >
            {view === "filled" ? (
              <CustomButton
                view="flat"
                color={color}
                text="Notifications"
                device={type}
                active={location.pathname.match("notifications") && true}
                dense={type === "desktop" ? false : true}
              />
            ) : (
              <Button
                type="default"
                view={view === "smooth" ? view : "flat"}
                color={color}
                text="Notifications"
                active={location.pathname.match("notifications") && true}
                dense={type === "desktop" ? false : true}
              />
            )}
          </Link>
          {/** */}
        </NavbarGroup>
        {/**ICON-BUTTONS GROUP */}
        <NavbarGroup align="right">
          <Link
            to="/components/navbar/sign-in"
            style={{
              textDecoration: "none"
            }}
          >
            <Button
              type="default"
              view={view === "filled" ? "smooth" : "outlined"}
              color={color}
              text="Sign In"
              style={{ marginLeft: "15px" }}
              active={location.pathname.match("sign-in") && true}
              dense={type === "desktop" ? false : true}
            />
          </Link>
          <Link
            to="/components/navbar/register"
            style={{
              textDecoration: "none"
            }}
          >
            <Button
              type="default"
              view="filled"
              color={color}
              text="Register"
              style={{ marginLeft: "1rem" }}
              active={location.pathname.match("register") && true}
              dense={type === "desktop" ? false : true}
            />
          </Link>
        </NavbarGroup>
        {/** */}
      </Navbar>
      {/*** END OF DEMO *************** */}
    </div>
  );
};
