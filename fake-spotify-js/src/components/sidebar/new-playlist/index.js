import React, { useState } from 'react';
import styles from "./styles.module.scss"
import { ReactComponent as AddIcon } from 'images/icons/add.svg';
import NewPlaylistModal from "components/sidebar/new-playlist/modal";

const NewPlaylist = ({onPlaylistCreated}) => {

  const [isModalOpen, setIsModalOpen] = useState(false)

  const open = () => {
    setIsModalOpen(true);
  }

  const close = () => {
    setIsModalOpen(false);
    onPlaylistCreated()
  }

  const createPlaylist = (data) => {
    fetch('http://localhost:3001/playlists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => close())
  };

  const onCreate = (data) => {
    createPlaylist(data)
  }

  return (
    <>
    <div className={styles.wrapper} onClick={open}>
      <AddIcon className={styles.icon} />
      <div className={styles.text}>New Playlist</div>
    </div>
    <NewPlaylistModal isOpen={isModalOpen}
                      onClose={close}
                      onCreate={onCreate}
    />
  </>
  );
};

export default NewPlaylist;
