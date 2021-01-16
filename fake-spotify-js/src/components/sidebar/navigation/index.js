import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss'
import { ReactComponent as HomeIcon } from 'images/icons/home.svg';
import { ReactComponent as RadioIcon } from 'images/icons/radio.svg';
import { ReactComponent as BrowseIcon } from 'images/icons/browse.svg';

import NavItem from "components/sidebar/navigation/nav-item";
import NavSection from "components/sidebar/navigation/nav-section";

const Navigation = ({playlists}) => {

  return (
    <div className={styles.wrapper}>
      <NavItem Icon={HomeIcon} text={"Home"}/>
      <NavItem Icon={BrowseIcon} text={"Browse"}/>
      <NavItem Icon={RadioIcon} text={"Radio"}/>

      <div className={styles.scrollableContent}>
        <NavSection
          text={"YOUR LIBRARY"}
          items={[
            "Made For You",
            "Albums",
            "Artists"
          ]}
          nameFunction={(p) => p}
          isBold={true}
          linkTo={() => '/library'}
        />
        <NavSection
          text={"PLAYLISTS"}
          items={playlists}
          nameFunction={(p) => p.title}
          linkTo={(id) => `/playlists/${id}`}
        />
      </div>
    </div>
  );
}

export default Navigation;
