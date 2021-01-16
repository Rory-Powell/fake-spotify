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
  EXPLICIT,
  LIKE,
  MENU,
  NUMBER,
  POPULARITY,
  TIME,
  TITLE
} from "components/collection/songs/columns";

const renderColumnHeaders = (columns) => {
  return columns.map(column => {
    switch(column) {
      case NUMBER:
        return <th className={styles.th}>#</th>
      case LIKE:
        return <th className={styles.th}/>
      case EXPLICIT:
        return <th className={styles.th}/>
      case TITLE:
        return <th className={styles.th}>TITLE</th>
      case ARTIST:
        return <th className={styles.th}>ARTIST</th>
      case ALBUM:
        return <th className={styles.th}>ALBUM</th>
      case MENU:
        return (
          <td className={styles.td}>
            <CalendarIcon className={styles.icon}/>
          </td>
        )
      case DATE:
        return (
          <td className={styles.td}>
            <CalendarIcon className={styles.icon}/>
          </td>
        )
      case TIME:
        return (
          <th className={styles.th}>
            <ClockIcon className={styles.icon}/>
          </th>
        )
      case POPULARITY:
        return (
          <th className={styles.th}>
            <ThumbIcon className={styles.icon}/>
          </th>
        )
    }
  })
}

const renderSongColumn = (song, columns, index) => {
  return columns.map((column) => {
    switch(column) {
      case NUMBER:
        return (
          <td className={styles.td}>
            {index + 1}
          </td>
        )
      case LIKE:
        return (
          <td className={styles.td}>
            <LikeIcon className={styles.icon}/>
          </td>
        )
      case EXPLICIT:
        return <td className={styles.td}/> // TODO
      case TITLE:
        return (
          <td className={styles.td}>
            {song.title}
          </td>
        )
      case ARTIST:
        return (
          <td className={styles.td}>
            {song.artists.join(', ')}
          </td>
        )
      case ALBUM:
        return (
          <td className={styles.td}>
            {song.albums.join(', ')}
          </td>
        )
      case MENU:
        return (
          <td className={styles.td}>
            <MenuIcon className={styles.icon}/>
          </td>
        )
      case DATE:
        return (
          <td className={styles.td}>
            {song.created_at.split('T')[0]}
          </td>
        )
      case TIME:
        return (
          <td className={styles.td}>
            {song.duration}
          </td>
        )
      case POPULARITY:
        return (
          <td className={styles.td}>
            {song.play_count}
          </td>
        )
    }
  })
}

const renderColumns = (columns, songs) => {
  return songs.map((song, index) => {
    return (
      <tr className={styles.tr} key={song.id}>
        {renderSongColumn(song, columns, index)}
      </tr>
    )
  })
}

const Songs = ({ songs, columns }) => {
  return (
    <div>
      <table className={styles.table}>
        <thead className={styles.thead}>
        <tr className={styles.tr}>
          {renderColumnHeaders(columns)}
        </tr>
        </thead>
        <tbody>
          {renderColumns(columns, songs)}
        </tbody>
      </table>
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
