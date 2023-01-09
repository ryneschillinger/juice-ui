import React from "react";

/**Import core component (variable)*/
import ButtonGroup from "../../core/ButtonGroup";

export const DEMO = props => {
  const {
    type,
    view,
    color,
    fill,
    right,
    isVertical,
    alignText
  } = props;

  const data = [
    {
      id: 0,
      icon: "sort-alphabetical",
      //rightIcon: "manually-entered-data",
      isActive: true,
      onClick: () => handleClick(0)
    },
    {
      id: 1,
      icon: "sort-alphabetical-desc",
      onClick: () => handleClick(1)
      //isActive: false
    },
    {
      id: 2,
      text: "Third",
      icon: "sort-asc",
      onClick: () => handleClick(2)
    },
    {
      id: 3,
      text: "Fourth",
      rightIcon: "sort-desc",
      onClick: () => handleClick(3)
    }
  ];

  const [currentData, setNewData] = React.useState(data);

  function handleClick(id) {
    setNewData(
      currentData.map(item =>
        item.id === id
          ? { ...item, isActive: true }
          : { ...item, isActive: false }
      )
    );
  }

  return (
    <ButtonGroup
      type={type}
      view={view}
      color={color}
      fill={fill}
      right={right}
      data={currentData}
      vertical={isVertical}
      alignText={alignText}
    />
  );
};
