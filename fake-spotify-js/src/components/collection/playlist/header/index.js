import React from 'react';
import styles from 'components/collection/playlist/header/syles.module.scss'
import artwork from "images/artwork/artwork.png";
import { ReactComponent as LikeIcon } from 'images/icons/like.svg';
import { ReactComponent as MenuIcon } from 'images/icons/menu.svg';
import Circle from "components/circle";

const PlaylistHeader = ({ playlist }) => (
  <div className={styles.wrapper}>
    <img src={artwork} alt={"album art"} className={styles.artwork}/>
    <div className={styles.main}>
      <div className={styles.content}>
        <div className={styles.typeText}>PLAYLIST</div>
        <div className={styles.titleText}>{playlist.title}</div>
        <div className={styles.description}>{playlist.description}</div>

        <div className={styles.metaWrapper}>
          <div className={styles.subText}>Created by&nbsp;</div>
          <div className={styles.userText}>Rory Powell</div>
          <div className={styles.subText}>&nbsp;.&nbsp;</div>
          <div className={styles.subText}>50 songs, 3 hr 19 min</div>
        </div>

        <div className={styles.controls}>
          <div className={styles.playButton}>
            PLAY
          </div>
          <div className={styles.circleWrapper}>
            <Circle>
              <LikeIcon className={styles.icon}/>
            </Circle>
          </div>
          <div className={styles.circleWrapper}>
            <Circle>
              <MenuIcon className={styles.icon}/>
            </Circle>
          </div>
        </div>
    </div>
      <div className={styles.followers}>
        FOLLOWERS
        0
      </div>
    </div>
  </div>
);

export default PlaylistHeader;
