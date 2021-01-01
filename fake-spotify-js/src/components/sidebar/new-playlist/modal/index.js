import React, { useState } from 'react';
import styles from "components/sidebar/new-playlist/modal/styles.module.scss"
import Modal from 'react-modal';
import {ReactComponent as MusicIcon} from 'images/icons/music.svg';
import {ReactComponent as CloseIcon} from 'images/icons/close.svg';

if (document && document.getElementById('root')) {
  Modal.setAppElement('#root');
}

const NewPlaylistModal = ({isOpen, onClose, onCreate}) => {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleCreate = () => {
    const data = {
      title: name,
      description: description,
      user_id: 1
    }
    onCreate(data)
  }

  // TODO: Extract to shared modal
  return (
    <Modal
      className={styles.modal}
      overlayClassName={styles.overlay}
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel={'test'}
    >
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div/>
          <div className={styles.title}>Create Playlist</div>
          <div onClick={onClose}>
            <CloseIcon className={styles.closeIcon}/>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.imageWrapper}>
            <MusicIcon className={styles.icon}/>
            <div className={styles.imageText}>Choose Image</div>
          </div>

          <div className={styles.form}>
            <div>
              <div className={styles.fieldLabel}>Name</div>
              <input type={'text'}
                     className={styles.textInput}
                     placeholder={'My playlist #60'}
                     onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <div className={styles.fieldLabel}>Description</div>
              <textarea className={styles.textarea}
                        rows={6}
                        placeholder={'Give your playlist a catchy description.'}
                        onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.createButton} onClick={handleCreate}>CREATE</div>
        </div>
      </div>
    </Modal>
  )
}

export default NewPlaylistModal;
