import React from 'react';
import Navigation from "components/sidebar/navigation";
import Artwork from "components/sidebar/artwork";
import styles from "./styles.module.scss"
import NewPlaylist from "components/sidebar/new-playlist";

const Sidebar = () => (
  <div className={styles.wrapper}>
    <Navigation/>
    <div>
      <NewPlaylist/>
      <Artwork/>
    </div>
  </div>
);

export default Sidebar;
