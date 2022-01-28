import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';
import * as variants from './variants.module.css';

export default function Progress({
  component: Component = 'div',
  variant = variants.horizontal,
  className,
  ...props
}) {
  return (
    <Component
      className={classNames(classes.root, variant, className)}
      {...props}
    />
  );
}

export { variants as PROGRESS_VARIANTS };
