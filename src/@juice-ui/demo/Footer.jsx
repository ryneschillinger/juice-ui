import React from "react";
import FooterLink from "./components/FooterLink";
import DemoAppStyle from "./styles/style.module.css";
import * as ROUTES from "./constants/Routes.jsx";

export default function Footer() {
  return (
    <>
      <div className={DemoAppStyle.footer_text}>
        <a
          href={ROUTES.JUICY_UI_LINK}
          style={{
            color: "var(--blue50)"
          }}
        >
          Juice UI Design System
        </a>
        &nbsp;
        <div className={DemoAppStyle.footer_break}> for Figma & React</div>
      </div>
      <div className={DemoAppStyle.footer_links}>
        <FooterLink
          href={ROUTES.FIGMA_DEMO_LINK}
          value="Preview"
          icon="search-text"
        />
        <FooterLink
          href={ROUTES.LICENSE_LINK}
          value="License"
          icon="manually-entered-data"
        />
        <FooterLink
          href={ROUTES.BUY_LINK}
          value="Buy UI kit"
          icon="shopping-cart"
        />
      </div>
    </>
  );
}
