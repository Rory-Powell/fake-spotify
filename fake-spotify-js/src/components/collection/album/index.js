import React from 'react';
import styles from 'components/collection/album/syles.module.scss'
import Songs from "components/collection/songs";
import { mockSongs } from "components/collection/songs/mock-data";

const Album = () => (
  <div className={styles.wrapper}>
    <Songs songs={mockSongs}/>
  </div>
);

export default Album;
