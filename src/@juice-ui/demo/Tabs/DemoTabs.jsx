import React from "react";

import { Icon, Tab } from "@blueprintjs/core";
import Tabs from "../../core/Tabs";

const DemoTabs = props => {
  const { type, view, color, data, isIcon, fill, isVertical } = props;

  return (
    <Tabs
      type={type}
      view={view}
      color={color}
      id="DemoTabs"
      fill={fill}
      vertical={isVertical}
      //onChange={(id, last) => alert(last)}
      //selectedTabId={isTab}
    >
      {data.map(
        i =>
          i.visible && (
            <Tab
              key={i.id}
              id={i.id}
              title={<> {isIcon && <Icon icon={i.icon} />} {i.title}</> }
              panel={i.panel}
              disabled={i.disabled}
            />
          )
      )}
    </Tabs>
  );
};

export default DemoTabs;
