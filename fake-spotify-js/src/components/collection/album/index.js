import React from 'react';
import styles from 'components/collection/album/syles.module.scss'
import Songs from "components/collection/songs";
import { mockSongs } from "components/collection/songs/mock-data";
import {
  EXPLICIT,
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
  EXPLICIT,
  MENU,
  TIME,
  POPULARITY
]

const Album = () => (
  <div className={styles.wrapper}>
    <Songs songs={mockSongs} columns={columns}/>
  </div>
);

export default Album;
