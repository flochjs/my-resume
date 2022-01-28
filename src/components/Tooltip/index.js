import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';
import * as variants from './variants.module.css';

export default function Tooltip({
  title,
  variant = variants.bottom,
  noMargin,
  className,
  component: Component = 'div',
  children,
  ...props
}) {
  return (
    <Component
      className={classNames(
        classes.root,
        variant,
        { [classes.noMargin]: noMargin },
        className,
      )}
      data-tooltip-text={title}
      role="tooltip"
      aria-label={title}
      {...props}
    >
      {children}
    </Component>
  );
}

export { variants as TOOLTIP_VARIANTS };
