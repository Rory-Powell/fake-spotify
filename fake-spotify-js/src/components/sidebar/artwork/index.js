import React from 'react';
import styles from './styles.module.scss'
import artwork from 'images/artwork/artwork.png'

const Artwork = () => (
  <div>
    <img src={artwork} alt={"album art"} className={styles.artwork}/>
  </div>
);

export default Artwork;
