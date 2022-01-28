import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';

export default function Icon({ component: Component, className, ...props }) {
  return (
    <Component className={classNames(classes.root, className)} {...props} />
  );
}
