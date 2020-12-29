import React from 'react';
import {ReactComponent as ShuffleIcon} from 'images/icons/shuffle.svg';
import {ReactComponent as RewindIcon} from 'images/icons/rewind.svg';
import {ReactComponent as PauseIcon} from 'images/icons/pause.svg';
import {ReactComponent as RepeatIcon} from 'images/icons/repeat.svg';
import styles from './styles.module.scss'
import Circle from "components/circle";

const ControlButtons = () => (
  <div className={styles.wrapper}>
    <ShuffleIcon className={styles.icon}/>
    <RewindIcon className={styles.icon}/>
    <div className={styles.circleWrapper}>
        <Circle>
            <PauseIcon className={styles.pauseIcon}/>
        </Circle>
    </div>
    <RewindIcon className={styles.fastForwardIcon}/>
    <RepeatIcon className={styles.icon}/>
  </div>
);

export default ControlButtons;
