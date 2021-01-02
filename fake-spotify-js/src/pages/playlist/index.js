import React, { useEffect, useState } from 'react';
import Page from "pages/page";
import Album from "components/collection/album";
import { useParams } from "react-router";
import { getPlaylist } from "api";
import PlaylistHeader from "components/collection/playlist/header";

const PagePlaylist = () => {

  const {
    id
  } = useParams();

  // state
  const [playlist, setPlaylist] = useState({});

  // effects
  useEffect(() => {
    loadPlaylist()
  }, [])

  // utils
  const loadPlaylist = () => {
    getPlaylist(id, setPlaylist)
  }

  return (
    <Page title={playlist ? playlist.title : ''}
          header={<PlaylistHeader playlist={playlist}/>}>
      <Album/>
    </Page>
  );
};

export default PagePlaylist;
