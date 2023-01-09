import React from "react";

/**Import core component (variable)*/
import Toaster from "../../core/Toast/Toaster.jsx";
import Button from "../../core/Button";

export const DEMO = props => {
  const {
    view,
    color,
    position,
    isClose,
    usePortal,
    DemoToast
  } = props;

  /** Store ref*/
  const [myRef, setRef] = React.useState(null);

  return (
    <div>
      <Button
        view="filled"
        color="primary"
        text="Toast me"
        onClick={() => myRef.show(DemoToast)}
      />
      <Toaster
        view={view}
        color={color}
        position={position}
        setRef={setRef}
        maxToasts={2}
        withoutClose={!isClose}
      />
    </div>
  );
};
