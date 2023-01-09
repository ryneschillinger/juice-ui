import React from "react";

/**Import core component (variable)*/
import Tree from "../../core/Tree";
import Data from "./data.jsx";

export const DEMO = props => {
  const { type, color } = props;

  return <Tree type={type} color={color} contents={Data} />;
};
