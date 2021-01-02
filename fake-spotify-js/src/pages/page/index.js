import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from "components/sidebar";
import Footer from "components/footer";

import styles from './styles.module.scss'

const Page = ({children, title, header}) => {
  const titlePrefix = 'Fakeify';
  document.title = title ? `${titlePrefix} . ${title}` : titlePrefix;

  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <Sidebar/>
        <div className={styles.content}>
          <div className={styles.contentHeader}>
            {header}
          </div>
          <div className={styles.contentBody}>
            {children}
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  Header: PropTypes.node,
};

export default Page;
