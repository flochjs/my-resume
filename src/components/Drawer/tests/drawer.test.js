import React from 'react';
import { render } from '@testing-library/react';

import Component, { DRAWER_VARIANTS } from '../index';

const CLASSNAMES = {
  visible: 'visible',
};

describe('components :: Drawer', () => {
  it('should render', () => {
    const props = {
      component: 'ul',
      className: 'className',
      'data-testid': 'test',
      children: 'children',
    };

    const { getByTestId, getByText } = render(<Component {...props} />);

    const root = getByTestId(props['data-testid']);

    expect(root.tagName.toLowerCase()).toBe(props.component);
    expect(root).toHaveClass(props.className);
    expect(root).toContainElement(getByText(props.children));
  });

  describe('when called without a variant', () => {
    it('should apply the `fromLeft` variant', () => {
      const props = {
        variant: undefined,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(DRAWER_VARIANTS.fromLeft);
      expect(root).not.toHaveClass(DRAWER_VARIANTS.fromRight);
    });
  });

  describe('when called with `fromRight` as variant', () => {
    it('should apply the `fromRight` variant', () => {
      const props = {
        variant: DRAWER_VARIANTS.fromRight,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(DRAWER_VARIANTS.fromRight);
      expect(root).not.toHaveClass(DRAWER_VARIANTS.fromLeft);
    });
  });

  describe('when called without open', () => {
    it('should not apply the `visible` class', () => {
      const props = {
        open: false,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).not.toHaveClass(CLASSNAMES.visible);
    });
  });

  describe('when called with open', () => {
    it('should apply the `visible` class', () => {
      const props = {
        open: true,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(CLASSNAMES.visible);
    });
  });
});
