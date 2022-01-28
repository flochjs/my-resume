import React from 'react';
import classNames from 'classnames';

import * as classes from './style.module.css';
import * as variants from './variants.module.css';

export default function Drawer({
  open,
  variant = variants.fromLeft,
  component: Component = 'div',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={classNames(classes.root, variant, className, {
        [classes.visible]: open,
      })}
      {...props}
    >
      {children}
    </Component>
  );
}

export { variants as DRAWER_VARIANTS };
