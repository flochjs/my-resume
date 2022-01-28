import React from 'react';

import Button from '../Button';
import Icon from '../Icon';

export default function Skill({
  logo,
  label,
  link,
  className,
  iconProps = {},
  ...props
}) {
  return (
    <Button
      className={className}
      to={link}
      disabled={!link}
      target="_blank"
      rel="noopener"
      {...props}
    >
      <Icon component={logo} aria-label={label} {...iconProps} />
    </Button>
  );
}
