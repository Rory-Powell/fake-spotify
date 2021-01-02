import React from 'react';
import PropTypes from 'prop-types';
import styles from 'components/collection/songs/syles.module.scss'
import {ReactComponent as LikeIcon} from 'images/icons/like.svg';
import {ReactComponent as MenuIcon} from 'images/icons/menu.svg';
import {ReactComponent as ClockIcon} from 'images/icons/clock.svg';
import {ReactComponent as ThumbIcon} from 'images/icons/thumb.svg';

const Songs = ({ songs }) => (
  <div>
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr className={styles.tr}>
          <th className={styles.th}>#</th>
          <th className={styles.th}/>
          <th className={styles.th}>TITLE</th>
          <th className={styles.th}/>
          <th className={styles.th}>
            <ClockIcon className={styles.icon}/>
          </th>
          <th className={styles.th}>
            <ThumbIcon className={styles.icon}/>
          </th>
        </tr>
      </thead>
      <tbody>
      {
        songs && songs.map((song, index) => {
          // TODO: Use correct key
          return (
            <tr className={styles.tr} key={index}>
              <td className={styles.td}>
                {index + 1}
              </td>

              <td className={styles.td}>
                <LikeIcon className={styles.icon}/>
              </td>

              <td className={styles.td}>
                {song.title}
              </td>

              <td className={styles.td}>
                <MenuIcon className={styles.icon}/>
              </td>

              <td className={styles.td}>
                {song.length}
              </td>

              <td className={styles.td}>
                {song.playCount}
              </td>
            </tr>
            )
          }
        )
      }
      </tbody>
    </table>
  </div>
);

Songs.propTypes = {
  songs : PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      length: PropTypes.string.isRequired,
      playCount: PropTypes.number.isRequired
  }))
}

export default Songs;
