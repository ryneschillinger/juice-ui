import React from "react";
//import Button from "../../core/Button";
import Typography from "../../core/Typography";

/**Import core component (variable)*/
import Card from "../../core/Card";

export const DEMO = props => {
  const { view, color, isInter, isCustomWidth, elevation } = props;
  return (
    <Card
      view={view}
      color={color}
      interactive={isInter}
      style={isCustomWidth ? { maxWidth: "450px" }: null}
      elevation={elevation}
    >
      <div style={{ margin: "1rem", display: "inline-block" }}>
        <Typography
          type="h6"
          large
          style={{
            paddingBottom: "1rem"
          }}
          colorStep={view === "filled" ? 0 : 100}
        >
          Card component example
        </Typography>
        <Typography colorStep={view === "filled" ? 0 : 100}>
          You can put any content in this area here, including customized components and HTML elements.
        </Typography>
      </div>
    </Card>
  );
};
