import React from "react";

/**Import core component (variable)*/
import Dialog from "../../core/Dialog";
import Button from "../../core/Button";

export const DEMO = props => {
  const {
    type,
    view,
    color,
    isOpen,
    setOpen,
    opacity,
    footer,
    showCloseButton,
    canOutsideClickClose,
    canEscapeKeyClose
  } = props;
  const text =
    "First, you need to import the component into your code. To use the component, copy and paste an example from the code preview. Default props of the component can be omitted, as they are applied automatically.";
  return (
    <>
      <Button
        view="filled"
        color="primary"
        text="Open Dialog"
        dense={type === "dense"}
        onClick={() => setOpen(true)}
      />
      <Dialog
        type={type}
        view={view}
        color={color}
        icon="info-sign"
        title={`This is a ${type} dialog`}
        text={text}
        backdropOpacity={opacity}
        showCloseButton={showCloseButton}
        canOutsideClickClose={canOutsideClickClose}
        canEscapeKeyClose={canEscapeKeyClose}
        footerLeftButton={footer && 
          <Button
            type="default"
            view={
              view === "filled"
                ? "filled"
                : view === "raised"
                ? "flat"
                : "outlined"
            }
            color={color}
            dense={type === "dense" ? true : false}
            onClick={() => setOpen(false)}
            text="Maybe next time"
          />
        }
        footerRightButton={footer && 
          <Button
            type={"default"}
            view={
              view === "filled"
                ? "raised"
                : view === "raised"
                ? "smooth"
                : "filled"
            }
            color={color}
            dense={type === "dense" ? true : false}
            onClick={() => setOpen(false)}
            text="Sure, continue!"
          />
        }
        isOpen={isOpen}
        onClose={() => setOpen(false)}
      />
    </>
  );
};
