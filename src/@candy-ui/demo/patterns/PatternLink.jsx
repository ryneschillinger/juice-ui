import React from "react";
import styles from "./style.module.css";

export const PatternLink = props => {
  const { url, text } = props;
  return (
    <a
      href={url}
      rel="noopener noreferrer"
      className={styles.link}
    >
      {text}
    </a>
  );
};

export default PatternLink;
