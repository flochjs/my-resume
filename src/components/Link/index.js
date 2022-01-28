import React from 'react';
import classNames from 'classnames';

import { Link as GatsbyLink } from 'gatsby-plugin-react-intl';

import * as classes from './style.module.css';

const getComponent = (disabled, internal, to) => {
  if (disabled) return ['span'];

  return internal ? [GatsbyLink, { to }] : ['a', { href: to }];
};

export default function Link({
  to = '#',
  disabled,
  internal,
  className,
  children,
  ...inProps
}) {
  const [Component, props] = getComponent(disabled, internal, to);

  return (
    <Component
      {...props}
      className={classNames(
        classes.root,
        { [classes.disabled]: disabled },
        className,
      )}
      {...inProps}
    >
      {children}
    </Component>
  );
}
