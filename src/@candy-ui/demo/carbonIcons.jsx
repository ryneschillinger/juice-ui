import React from "react";
import Chips from "../core/Chips"; //SetProdect component
import { Wallet24 } from "@carbon/icons-react"; //import IBM Carbon Icon

export const CarbonIcon = props => {
  return (
    <Chips
      color={"primary"}
      tag={"Carbon IBM"}
      icon={<Wallet24 />} //use IBM Carbon Icons library
      round={true}
    />
  );
};
