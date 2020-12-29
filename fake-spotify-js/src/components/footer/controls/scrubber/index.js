import React from 'react';
import styles from './styles.module.scss'

const Scrubber = () => (
  <div className={styles.wrapper}>
      <div className={styles.ticker}>1:40</div>
      <div className={styles.scrubber}/>
      <div className={styles.ticker}>3:16</div>
  </div>
);

export default Scrubber;
