import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/collection/songs/syles.module.scss'
import {ReactComponent as LikeIcon} from 'images/icons/like.svg';
import {ReactComponent as MenuIcon} from 'images/icons/menu.svg';
import {ReactComponent as ClockIcon} from 'images/icons/clock.svg';
import {ReactComponent as ThumbIcon} from 'images/icons/thumb.svg';
import {ReactComponent as CalendarIcon} from 'images/icons/calendar.svg';
import {
  ALBUM,
  ARTIST,
  DATE,
  LIKE,
  MENU,
  NUMBER,
  POPULARITY,
  TIME,
  TITLE
} from "components/collection/songs/columns";

import cx from 'classnames'

export const TYPE_PLAYLIST = 'playlist'
export const TYPE_ALBUM = 'album'

const Songs = ({ songs, columns, type }) => {

  const renderColumnHeaders = (columns) => {
    return columns.map(column => {
      switch(column) {
        case NUMBER:
          return <div className={styles.th}>#</div>
        case LIKE:
          return <div className={styles.th}/>
        case TITLE:
          return <div className={styles.th}>TITLE</div>
        case ARTIST:
          return <div className={styles.th}>ARTIST</div>
        case ALBUM:
          return <div className={styles.th}>ALBUM</div>
        case MENU:
          return (
            <div className={styles.th}/>
          )
        case DATE:
          return (
            <div className={styles.th}>
              <CalendarIcon className={styles.icon}/>
            </div>
          )
        case TIME:
          return (
            <div className={styles.th}>
              <ClockIcon className={styles.icon}/>
            </div>
          )
        case POPULARITY:
          return (
            <div className={styles.th}>
              <ThumbIcon className={styles.icon}/>
            </div>
          )
      }
    })
  }

  const renderSongColumn = (song, columns, index) => {
    return columns.map((column) => {
      switch(column) {
        case NUMBER:
          return (
            <div className={styles.td}>
              {index + 1}
            </div>
          )
        case LIKE:
          return (
            <div className={styles.td}>
              <LikeIcon className={styles.icon}/>
            </div>
          )
        case TITLE:
          return (
            <div className={styles.td}>
              {song.title // TODO: Is explicit
              }
            </div>
          )
        case ARTIST:
          return (
            <div className={styles.td}>
              {song.artists.join(', ')}
            </div>
          )
        case ALBUM:
          return (
            <div className={styles.td}>
              {song.albums.join(', ')}
            </div>
          )
        case MENU:
          return (
            <div className={styles.menu}>
              <MenuIcon className={styles.icon}/>
            </div>
          )
        case DATE:
          return (
            <div className={styles.td}>
              {song.created_at.split('T')[0]}
            </div>
          )
        case TIME:
          return (
            <div className={styles.td}>
              {song.duration}
            </div>
          )
        case POPULARITY:
          return (
            <div className={styles.td}>
              {song.play_count}
            </div>
          )
      }
    })
  }

  const renderColumns = (columns, songs) => {
    return songs.map((song, index) => {
      return (
        <div className={cx(getTypeClass(), styles.songRow)} key={song.id}>
          {renderSongColumn(song, columns, index)}
        </div>
      )
    })
  }

  const getTypeClass = () => {
    switch(type) {
      case TYPE_PLAYLIST:
        return styles.playlistRow
      case TYPE_ALBUM:
        return styles.albumRow
    }
  }

  return (
    <div>
      <div className={styles.table}>
        <div className={styles.thead}>
        <div className={getTypeClass()}>
          {renderColumnHeaders(columns)}
        </div>
        </div>
        <div>
          {renderColumns(columns, songs, type)}
        </div>
      </div>
    </div>
  );
};

Songs.propTypes = {
  songs : PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      playCount: PropTypes.number.isRequired
  }))
}

export default Songs;
