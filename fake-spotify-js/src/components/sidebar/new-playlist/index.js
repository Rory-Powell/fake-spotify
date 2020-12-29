import React from 'react';
import styles from "./styles.module.scss"
import { ReactComponent as AddIcon } from 'images/icons/add.svg';

const NewPlaylist = () => (
  <div className={styles.wrapper}>
    <AddIcon className={styles.icon}/>
    <div className={styles.text}>New Playlist</div>
  </div>
);

export default NewPlaylist;
