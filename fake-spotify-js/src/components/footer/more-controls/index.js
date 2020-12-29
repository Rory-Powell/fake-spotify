import React from 'react';
import {ReactComponent as QueueIcon} from 'images/icons/queue.svg'
import {ReactComponent as PlayerIcon} from 'images/icons/player.svg'
import {ReactComponent as VolumeIcon} from 'images/icons/volume.svg'
import {ReactComponent as FullScreenIcon} from 'images/icons/fullscreen.svg'
import styles from './styles.module.scss'

const MoreControls = () => (
  <div className={styles.wrapper}>
    <QueueIcon className={styles.icon}/>
    <PlayerIcon className={styles.icon}/>
    <div className={styles.volumeWrapper}>
        <VolumeIcon className={styles.icon}/>
        <div className={styles.volume}/>
    </div>
    <FullScreenIcon className={styles.icon}/>
  </div>
);

export default MoreControls;
