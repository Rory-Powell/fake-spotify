import React from 'react';
import styles from "./syles.module.scss"

const Circle = ({ children }) => (
  <div className={styles.wrapper}>
    {children}
  </div>
);

export default Circle;
