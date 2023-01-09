import React from "react";
import styles from "./style.module.css";

export const PatternListItem = props => {
  const { title, children } = props;
  return (
    <li className={styles.listItem}>
      {title ? <strong>{title} </strong> : ''}
      {children}
    </li>
  );
};

export default PatternListItem;
