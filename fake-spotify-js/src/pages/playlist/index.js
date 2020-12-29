import React from 'react';
import Page from "pages/page";
import Playlist from "components/playlist";
import PlaylistHeader from "components/playlist/header";

const PagePlaylist = () => (
  <Page title={'Playlist'} header={<PlaylistHeader/>}>
    <Playlist/>
  </Page>
);

export default PagePlaylist;
