import React from "react";
import { Icon } from "@blueprintjs/core";
import Toaster from "../../core/Toast/Toaster.jsx";

/**Import core component (variable)*/
import InputGroup from "../../core/Inputs/SearchInput";

export const DEMO = props => {
  const { type, view, color, isFill } = props;

  var isRef;
  function setRef(ref) {
    isRef = ref;
  }

  const onSearch = val => {
    const DemoToast = {
      message: `Sorry, we can't find anything about "${val}".`,
      icon: <Icon icon="error" iconSize={24} />
    };
    val && val !== "" && isRef.show(DemoToast);
  };

  return (
    <>
      <InputGroup
        type={type}
        view={view}
        color={color}
        placeholder="Search for something..."
        fill={isFill}
        onSearch={onSearch}
      />
      <Toaster
        type="def"
        view="smooth"
        color="danger"
        usePortal={false}
        position="bottom"
        setRef={setRef}
        maxToasts={1}
      />
    </>
  );
};
