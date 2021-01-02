import React, { useEffect, useState } from 'react';
import Page from "pages/page";
import Album from "components/collection/album";
import AlbumHeader from "components/collection/album/header";
import { useParams } from "react-router";
import { getAlbum } from "api";

const PageAlbum = () => {

  const {
    id
  } = useParams();

  // state
  const [album, setAlbum] = useState({});

  // effects
  useEffect(() => {
    loadAlbum()
  }, [])

  // utils
  const loadAlbum = () => {
    getAlbum(id, setAlbum)
  }

  return (
    <Page title={album ? album.title : ''} header={<AlbumHeader album={album}/>}>
      <Album/>
    </Page>
  );
};

export default PageAlbum;
