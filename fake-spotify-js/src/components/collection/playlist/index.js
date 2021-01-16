import React from 'react';
import styles from 'components/collection/album/syles.module.scss'
import Songs from "components/collection/songs";
import {
  ALBUM,
  ARTIST,
  DATE,
  EXPLICIT,
  LIKE,
  MENU,
  TIME,
  TITLE
} from "components/collection/songs/columns";

const columns = [
  LIKE,
  TITLE,
  EXPLICIT,
  ARTIST,
  ALBUM,
  DATE,
  MENU,
  TIME
]

const Playlist = ({songs}) => {
  return (
    <div className={styles.wrapper}>
      <Songs songs={songs} columns={columns}/>
    </div>
  );
};

export default Playlist;
