import React, { Children, cloneElement } from 'react';
import classNames from 'classnames';

import Button from '../Button';

import { mapIndexed } from '../../helpers';

import * as classes from './style.module.css';

function LeftContent({ children, className, ...props }) {
  return (
    <div className={classNames(classes.leftContent, className)} {...props}>
      {children}
    </div>
  );
}

function RightContent({ children, className, ...props }) {
  return (
    <div className={classNames(classes.rightContent, className)} {...props}>
      {children}
    </div>
  );
}

function Step({
  index,
  activeStep,
  children,
  className,
  dotClassName,
  connectorClassName,
  buttonProps = {},
  ...props
}) {
  const connector = (
    <div className={classNames(classes.connector, connectorClassName)} />
  );

  return (
    <li
      className={classNames(classes.step, className, {
        [classes.activeStep]: index <= activeStep,
      })}
      {...props}
    >
      <Button
        {...buttonProps}
        className={classNames(classes.button, buttonProps.className)}
      >
        {children}
        <div className={classes.separator}>
          {connector}
          <div className={classNames(classes.dot, dotClassName)}></div>
          {connector}
        </div>
      </Button>
    </li>
  );
}

Step.LeftContent = LeftContent;
Step.RightContent = RightContent;

export default function Timeline({
  activeStep = -1,
  children,
  className,
  ...props
}) {
  const elements = Children.toArray(children);

  return (
    <ul className={classNames(classes.root, className)} {...props}>
      {mapIndexed(
        (element, index) => cloneElement(element, { index, activeStep }),
        elements,
      )}
    </ul>
  );
}

Timeline.Step = Step;
