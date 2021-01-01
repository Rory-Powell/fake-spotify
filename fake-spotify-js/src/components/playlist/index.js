import React from 'react';
import styles from './syles.module.scss'
import PlaylistBody from "components/playlist/body";

const songs = [
  {
    title: 'Second Hand News',
    length: '2:56',
    playCount: 54387221
  },
  {
    title: 'Dreams',
    length: '4:18',
    playCount: 54387221
  },
  {
    title: 'Never Going Back Again',
    length: '2:14',
    playCount: 54387221
  },
  {
    title: 'Don\'t Stop',
    length: '3:13',
    playCount: 54387221
  },
  {
    title: 'Go Your Own Way',
    length: '3:44',
    playCount: 54387221
  },
  {
    title: 'Songbird',
    length: '3:21',
    playCount: 54387221
  },
  {
    title: 'The Chain',
    length: '4:30',
    playCount: 54387221
  },
  {
    title: 'You Make Loving Fun',
    length: '3:34',
    playCount: 54387221
  },
  {
    title: 'I Don\'t Want To Know',
    length: '3:17',
    playCount: 54387221
  },
  {
    title: 'Oh Daddy',
    length: '3:56',
    playCount: 54387221
  },
  {
    title: 'Gold Dust Woman',
    length: '4:56',
    playCount: 54387221
  }
];

const Playlist = () => (
  <div className={styles.wrapper}>
    <PlaylistBody songs={songs}/>
  </div>
);

export default Playlist;
