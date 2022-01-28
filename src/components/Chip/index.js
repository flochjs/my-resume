import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';

export default function Chip({
  component: Component = 'span',
  className,
  children,
  ...props
}) {
  return (
    <Component className={classNames(classes.root, className)} {...props}>
      {children}
    </Component>
  );
}
