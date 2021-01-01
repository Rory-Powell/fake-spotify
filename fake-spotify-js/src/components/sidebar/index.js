import React, { useEffect, useState } from 'react';
import Navigation from "components/sidebar/navigation";
import Artwork from "components/sidebar/artwork";
import styles from "./styles.module.scss"
import NewPlaylist from "components/sidebar/new-playlist";

const Sidebar = () => {

  // state
  const [playlists, setPlayLists] = useState([]);

  // effects
  useEffect(() => {
    getPlaylists()
  }, playlists)

  // utils
  const getPlaylists = () => {
    fetch('http://localhost:3001/playlists')
      .then(response => response.json())
      .then((data) => setPlayLists(data))
  };

  const changed = () => {
    getPlaylists()
  }

  return (
    <div className={styles.wrapper}>
      <Navigation playlists={playlists}/>
      <div>
        <NewPlaylist onPlaylistCreated={changed}/>
        <Artwork/>
      </div>
    </div>
  );
};

export default Sidebar;
