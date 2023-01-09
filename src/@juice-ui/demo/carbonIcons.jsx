import React from "react";
import Chip from "../core/Chip"; 
import { Wallet24 } from "@carbon/icons-react"; //import IBM Carbon Icon

export const CarbonIcon = props => {
  return (
    <Chip
      color={"primary"}
      tag={"Carbon IBM"}
      icon={<Wallet24 />} //use IBM Carbon Icons library
      round={true}
    />
  );
};
