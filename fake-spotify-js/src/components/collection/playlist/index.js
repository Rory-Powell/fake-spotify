import React from 'react';
import styles from 'components/collection/album/syles.module.scss'
import Songs, { TYPE_PLAYLIST } from "components/collection/songs";
import {
  ALBUM,
  ARTIST,
  DATE,
  LIKE,
  MENU,
  NUMBER,
  TIME,
  TITLE
} from "components/collection/songs/columns";

const columns = [
  NUMBER,
  LIKE,
  TITLE,
  ARTIST,
  ALBUM,
  DATE,
  MENU,
  TIME
]

const Playlist = ({songs}) => {
  return (
    <div className={styles.wrapper}>
      <Songs songs={songs} columns={columns} type={TYPE_PLAYLIST}/>
    </div>
  );
};

export default Playlist;
