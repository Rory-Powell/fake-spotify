import React from 'react';
import styles from 'components/collection/album/syles.module.scss'
import Songs, { TYPE_ALBUM } from "components/collection/songs";
import { mockSongs } from "components/collection/songs/mock-data";
import {
  LIKE,
  MENU,
  NUMBER,
  POPULARITY,
  TIME,
  TITLE
} from "components/collection/songs/columns";

const columns = [
  NUMBER,
  LIKE,
  TITLE,
  MENU,
  TIME,
  POPULARITY
]

const Album = () => (
  <div className={styles.wrapper}>
    <Songs songs={mockSongs} columns={columns} type={TYPE_ALBUM}/>
  </div>
);

export default Album;
