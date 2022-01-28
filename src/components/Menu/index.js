import { juxt } from 'ramda';
import React, { createContext, useContext, useRef } from 'react';
import classNames from 'classnames';

import { useBoolean, useOnClickOutside } from '../../hooks';

import Button from '../Button';

import * as classes from './style.module.css';
import * as variants from './variants.module.css';

const MenuContext = createContext();

function Toggle({ disabled, onClick, className, children, ...props }) {
  const { toggle } = useContext(MenuContext);

  const handlers = onClick ? [toggle, onClick] : [toggle];

  return (
    <Button
      disabled={disabled}
      className={className}
      onClick={juxt(handlers)}
      {...props}
    >
      {children}
    </Button>
  );
}

function List({ children, className, ...props }) {
  const { isOpen } = useContext(MenuContext);

  return (
    <ul
      className={classNames(classes.list, className, {
        [classes.listVisible]: isOpen,
      })}
      {...props}
    >
      {children}
    </ul>
  );
}

function Item({ disabled, children, className, onClick, ...props }) {
  const { close } = useContext(MenuContext);

  const handlers = onClick ? [close, onClick] : [close];

  return (
    <li className={classNames(classes.item, className)} {...props}>
      <Button disabled={disabled} onClick={juxt(handlers)}>
        {children}
      </Button>
    </li>
  );
}

export default function Menu({
  open,
  variant = variants.dropDown,
  component: Component = 'div',
  children,
  className,
  ...props
}) {
  const { value: isOpen, toggle, setFalse: close } = useBoolean(open);
  const ref = useRef();
  useOnClickOutside(ref, close, isOpen);

  return (
    <Component
      className={classNames(classes.root, variant, className)}
      ref={ref}
      {...props}
    >
      <MenuContext.Provider value={{ isOpen, toggle, close }}>
        {children}
      </MenuContext.Provider>
    </Component>
  );
}

Menu.Item = Item;
Menu.List = List;
Menu.Toggle = Toggle;

export { variants as MENU_VARIANTS };
