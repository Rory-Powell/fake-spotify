import React, { useEffect, useState } from 'react';
import Page from "pages/page";
import { useParams } from "react-router";
import { getPlaylist, getPlaylistSongs } from "api";
import PlaylistHeader from "components/collection/playlist/header";
import Playlist from "components/collection/playlist";

const PagePlaylist = () => {

  const {
    id
  } = useParams();

  // state
  const [playlist, setPlaylist] = useState({});
  const [songs, setSongs] = useState([])

  // effects
  useEffect(() => {
    loadPlaylist()
  }, [id])

  useEffect(() => {
    loadSongs()
  }, [id])

  // utils
  const loadPlaylist = () => {
    getPlaylist(id, setPlaylist)
  }

  const loadSongs = () => {
    getPlaylistSongs(id, setSongs)
  }

  return (
    <Page title={playlist ? playlist.title : ''}
          header={<PlaylistHeader playlist={playlist}/>}>
      <Playlist songs={songs}/>
    </Page>
  );
};

export default PagePlaylist;
