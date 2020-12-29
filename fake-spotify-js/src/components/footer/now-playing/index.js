import React from 'react';
import styles from './styles.module.scss'
import {ReactComponent as LikeIcon} from 'images/icons/like.svg';

const NowPLaying = () => (
  <div className={styles.wrapper}>
    <div className={styles.songInfo}>
      <div className={styles.songTitle}>Dreams - 2004 Remaster</div>
      <LikeIcon className={styles.icon}/>
    </div>
    <div className={styles.artistTitle}>Fleetwood Mac</div>
  </div>
);

export default NowPLaying;
