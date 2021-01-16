import React from 'react';
import styles from './styles.module.scss'
import PropTypes from "prop-types";
import NavItem from "components/sidebar/navigation/nav-item";
import { Link } from "react-router-dom";

const NavSection = ({ text, items, nameFunction, isBold, linkTo}) =>
  (
    <div className={styles.wrapper}>
      <div className={styles.text}>{text}</div>
      {items.map(item =>
        <Link key={item.id}
              className={isBold
                ? styles.itemTextBold
                : styles.itemText}
              to={linkTo(item.id)}
        >
        {nameFunction(item)}
        </Link>)
      }
    </div>
);

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  items: PropTypes.array,
  isBold: PropTypes.bool,
}

export default NavSection;
