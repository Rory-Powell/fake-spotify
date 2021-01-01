import React from 'react';
import styles from './styles.module.scss'
import PropTypes from "prop-types";
import NavItem from "components/sidebar/navigation/nav-item";

const NavSection = ({ text, items, isBold}) => (
  <div className={styles.wrapper}>
    <div className={styles.text}>{text}</div>
    {items.map(item =>
      <div key={item} className={isBold ? styles.itemTextBold : styles.itemText}>{item}</div>)
    }
  </div>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.array,
  isBold: PropTypes.bool,
}

export default NavSection;
