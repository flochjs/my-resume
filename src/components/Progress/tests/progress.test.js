import React from 'react';
import { render } from '@testing-library/react';

import Component, { PROGRESS_VARIANTS } from '../index';

const CLASSNAMES = {
  vertical: 'vertical',
  horizontal: 'horizontal',
};

describe('components :: Progress', () => {
  it('should render', () => {
    const props = {
      component: 'ul',
      className: 'className',
      'data-testid': 'test',
    };

    const { getByTestId } = render(<Component {...props} />);

    const root = getByTestId(props['data-testid']);

    expect(root.tagName.toLowerCase()).toBe(props.component);
    expect(root).toHaveClass(props.className);
  });

  describe('when called without a variant', () => {
    it('should apply the `horizontal` class on the root element', () => {
      const props = {
        variant: undefined,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(CLASSNAMES.horizontal);
      expect(root).not.toHaveClass(CLASSNAMES.vertical);
    });
  });

  describe('when called with a `vertical` variant', () => {
    it('should apply the `vertical` class on the root element', () => {
      const props = {
        variant: PROGRESS_VARIANTS.vertical,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(CLASSNAMES.vertical);
      expect(root).not.toHaveClass(CLASSNAMES.horizontal);
    });
  });
});
