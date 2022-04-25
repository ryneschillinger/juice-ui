import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { useDevice } from "./customHooks";

export const CustomScrollbar = ({ children, left, ...props }) => {
  let device = useDevice();

  const renderTrack= ({ style, ...props }) => {
    const trackStyle = {
      backgroundColor: 'transparent',
      width: 14,
      padding: 3,
      right: 0,
      top: 0,
      bottom: 0
    };
    return (
      <div
        style={{ ...style, ...trackStyle }}
        {...props}
      />
    );
  }

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: 'var(--color20)',
      borderRadius: 4,
      width: 7,
      cursor: 'pointer'
    };
    return (
      <div
        style={{ ...style, ...thumbStyle }}
        {...props}
      />
    );
  }

  return device === "mobile" || (device !== "desktop" && left) ? (
    <>{children}</>
  ) : (
    <Scrollbars
      renderTrackHorizontal={renderTrack}
      renderTrackVertical={renderTrack}
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    >
      {children}
    </Scrollbars>
  );
};
