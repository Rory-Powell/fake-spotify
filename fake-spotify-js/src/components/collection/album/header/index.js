import React from 'react';
import styles from 'components/collection/album/header/syles.module.scss'
import artwork from "images/artwork/artwork.png";
import { ReactComponent as LikeIcon } from 'images/icons/like.svg';
import { ReactComponent as MenuIcon } from 'images/icons/menu.svg';
import Circle from "components/circle";

const AlbumHeader = ({ album }) => (
  <div className={styles.wrapper}>
    <img src={artwork} alt={"album art"} className={styles.artwork}/>
    <div className={styles.infoWrapper}>
      <div className={styles.typeText}>ALBUM</div>
      <div className={styles.titleText}>{album.title}</div>
      <div className={styles.artistWrapper}>
        <div className={styles.subText}>By&nbsp;</div>
        <div className={styles.artistText}>Fleetwood Mac</div>
      </div>
      <div className={styles.subText}>1977 . 11 songs, 39 min</div>
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
  </div>
);

export default AlbumHeader;
