import React from 'react';
import { render } from '@testing-library/react';

import Component from '../index';

const CLASSNAMES = {
  disabled: 'disabled',
};

describe('components :: Link', () => {
  it('should render', () => {
    const props = {
      className: 'className',
      'data-testid': 'test',
      children: 'children',
    };

    const { getByTestId, getByText } = render(<Component {...props} />);
    const root = getByTestId(props['data-testid']);

    expect(root).toHaveClass(props.className);
    expect(root).toContainElement(getByText(props.children));
    expect(root).not.toHaveClass(CLASSNAMES.disabled);
  });

  describe('when disabled prop is at true', () => {
    const props = {
      disabled: true,
      'data-testid': 'test',
    };

    it('should not render an anchor and apply a `disabled` class', () => {
      const { getByTestId } = render(<Component {...props} />);
      const root = getByTestId(props['data-testid']);

      expect(root.tagName.toLowerCase()).not.toBe('a');
      expect(root).toHaveClass(CLASSNAMES.disabled);
    });
  });

  it('should render an anchor tag with a default href value', () => {
    const props = {
      internal: undefined,
      'data-testid': 'test',
    };
    const defaultHref = '#';

    const { getByTestId } = render(<Component {...props} />);
    const root = getByTestId(props['data-testid']);

    expect(root.tagName.toLowerCase()).toBe('a');
    expect(root).toHaveAttribute('href', defaultHref);
  });

  it('should render an anchor tag with a href value provided with the `to` prop', () => {
    const props = {
      internal: undefined,
      'data-testid': 'test',
      to: 'test',
    };

    const { getByTestId } = render(<Component {...props} />);
    const root = getByTestId(props['data-testid']);

    expect(root.tagName.toLowerCase()).toBe('a');
    expect(root).toHaveAttribute('href', props.to);
  });
});
