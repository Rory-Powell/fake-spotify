import React from 'react';
import styles from './styles.module.scss'
import PropTypes from 'prop-types';

const NavItem = ({ Icon, text }) => (
    <div className={styles.wrapper}>
      <Icon className={styles.icon}/>
      <div className={styles.text}>{text}</div>
    </div>
)

NavItem.propTypes = {
  Icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired
}

export default NavItem;
