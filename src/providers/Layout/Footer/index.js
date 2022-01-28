import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';

export default function Footer({ className, ...props }) {
  return (
    <footer className={classNames(classes.root, className)} {...props}>
      <p className={classes.rights}>
        <span className={classes.symbol}>© </span>2021 FLOCH JS.
      </p>
    </footer>
  );
}
