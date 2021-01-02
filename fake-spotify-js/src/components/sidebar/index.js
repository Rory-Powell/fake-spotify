import React, { useEffect, useState } from 'react';
import Navigation from "components/sidebar/navigation";
import Artwork from "components/sidebar/artwork";
import styles from "./styles.module.scss"
import NewPlaylist from "components/sidebar/new-playlist";
import { getPlaylists } from "api";

const Sidebar = () => {

  // state
  const [playlists, setPlayLists] = useState([]);

  // effects
  useEffect(() => {
    loadPlaylists()
  }, [])

  // utils
  const loadPlaylists = () => {
    getPlaylists(setPlayLists)
  }

  return (
    <div className={styles.wrapper}>
      <Navigation playlists={playlists}/>
      <div>
        <NewPlaylist onPlaylistCreated={loadPlaylists}/>
        <Artwork/>
      </div>
    </div>
  );
};

export default Sidebar;
