import React from 'react';
import styles from './styles.module.scss'
import ControlButtons from "components/footer/controls/buttons";
import Scrubber from "components/footer/controls/scrubber";

const Controls = () => (
  <div className={styles.wrapper}>
    <ControlButtons/>
    <Scrubber/>
  </div>
);

export default Controls;
