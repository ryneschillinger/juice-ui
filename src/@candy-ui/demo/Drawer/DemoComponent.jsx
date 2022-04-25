import React from "react";

/**Import core component (variable)*/
import Button from "../../core/Button";
import Drawer from "../../core/Drawer";

export const DEMO = props => {
  const {
    isOpen,
    setOpen,
    position,
    backdrop,
    title,
    icon
  } = props;
  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={() => setOpen(!isOpen)}
        position={position}
        hasBackdrop={backdrop}
        title={title}
        icon={icon}
      />
      <Button
        type={"default"}
        view={"filled"}
        color={"primary"}
        text="Open it"
        onClick={() => setOpen(!isOpen)}
      />
    </>
  );
};
