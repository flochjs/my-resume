import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';

export default function Rating({ value, className, ...props }) {
  return (
    <ul className={classNames(classes.root, className)} {...props}>
      <li
        className={classNames(classes.item, { [classes.active]: value >= 1 })}
      />
      <li
        className={classNames(classes.item, { [classes.active]: value >= 2 })}
      />
      <li
        className={classNames(classes.item, { [classes.active]: value >= 3 })}
      />
      <li
        className={classNames(classes.item, { [classes.active]: value >= 4 })}
      />
      <li
        className={classNames(classes.item, { [classes.active]: value >= 5 })}
      />
    </ul>
  );
}
