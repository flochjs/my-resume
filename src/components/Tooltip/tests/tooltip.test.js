import React from 'react';
import { render } from '@testing-library/react';

import Component, { TOOLTIP_VARIANTS } from '..';

const CLASSNAMES = {
  noMargin: 'noMargin',
};

describe('components :: Tooltip', () => {
  it('should render', () => {
    const props = {
      title: 'title',
      component: 'ul',
      className: 'className',
      'data-testid': 'test',
      children: 'children',
    };

    const { getByTestId, getByText } = render(<Component {...props} />);

    const root = getByTestId(props['data-testid']);

    expect(root.tagName.toLowerCase()).toBe(props.component);
    expect(root).toHaveClass(props.className);
    expect(root).not.toHaveClass(CLASSNAMES.noMargin);
    expect(root).toHaveAttribute('data-tooltip-text', props.title);
    expect(root).toContainElement(getByText(props.children));
  });

  describe('when called without a variant', () => {
    it('should apply the `bottom` variant', () => {
      const props = {
        variant: undefined,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(TOOLTIP_VARIANTS.bottom);
      expect(root).not.toHaveClass(TOOLTIP_VARIANTS.top);
    });
  });

  describe('when called with `top` as variant', () => {
    it('should apply the `top` variant', () => {
      const props = {
        variant: TOOLTIP_VARIANTS.top,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(TOOLTIP_VARIANTS.top);
      expect(root).not.toHaveClass(TOOLTIP_VARIANTS.bottom);
    });
  });

  describe('when called with noMargin set to true', () => {
    it('should apply the `noMargin` class', () => {
      const props = {
        noMargin: true,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(CLASSNAMES.noMargin);
    });
  });
});
