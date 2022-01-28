import React from 'react';
import classNames from 'classnames';

import Header from './Header';
import Footer from './Footer';

import * as classes from './style.module.css';

export default function Layout({
  isDrawerOpen,
  toggleDrawer,
  closeDrawer,
  withoutFooter,
  headerOpaque,
  currentSection,
  isLargeVp,
  contacts,
  className,
  children,
}) {
  return (
    <div className={classNames(classes.root, className)}>
      <Header
        opaque={headerOpaque}
        currentSection={currentSection}
        isLargeVp={isLargeVp}
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        closeDrawer={closeDrawer}
        {...contacts}
      />
      {children}
      {!withoutFooter && <Footer />}
    </div>
  );
}
