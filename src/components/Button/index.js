import React from 'react';
import classNames from 'classnames';

import Link from '../Link';

import * as classes from './style.module.css';

export default function Button({
  to,
  disabled,
  className,
  children,
  ...inProps
}) {
  const [Component, props] = to
    ? [Link, { to }]
    : ['button', { className: classes.button, type: 'button' }];

  return (
    <Component
      disabled={disabled}
      {...props}
      className={classNames(
        classes.root,
        props.className,
        { [classes.disabled]: disabled },
        className,
      )}
      {...inProps}
    >
      {children}
    </Component>
  );
}
