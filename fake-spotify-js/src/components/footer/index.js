import React from 'react';
import Controls from "components/footer/controls";
import styles from "./syles.module.scss"
import NowPLaying from "components/footer/now-playing";
import MoreControls from "components/footer/more-controls";

const Footer = () => (
  <div className={styles.wrapper}>
    <NowPLaying/>
    <Controls/>
    <MoreControls/>
  </div>
);

export default Footer;
