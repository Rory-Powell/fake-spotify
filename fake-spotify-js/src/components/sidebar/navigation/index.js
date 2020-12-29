import React from 'react';
import styles from './styles.module.scss'
import { ReactComponent as HomeIcon } from 'images/icons/home.svg';
import { ReactComponent as RadioIcon } from 'images/icons/radio.svg';
import { ReactComponent as BrowseIcon } from 'images/icons/browse.svg';

import NavItem from "components/sidebar/navigation/nav-item";
import NavSection from "components/sidebar/navigation/nav-section";

const Navigation = () => (
  <div className={styles.wrapper}>
    <NavItem Icon={HomeIcon} text={"Home"}/>
    <NavItem Icon={BrowseIcon} text={"Browse"}/>
    <NavItem Icon={RadioIcon} text={"Radio"}/>

    <div className={styles.scrollableContent}>
      <NavSection text={"YOUR LIBRARY"}
                  items={[
                    "Made For You",
                    "Albums",
                    "Artists"
                  ]}
                  isBold={true}/>
      <NavSection text={"PLAYLISTS"}
                  items={[
                    "Daily Mix",
                    "2020 Rewind",
                    "Sunday",
                    "Workout",
                    "Chillout",
                    "88 Keys",
                    "Liked from Radio",
                    "Concentrate",
                    "Classic Rock",
                    "Classic Rock",
                    "Classic Rock",
                    "Classic Rock",
                    "Classic Rock",
                  ]}/>
    </div>

  </div>
);

export default Navigation;
