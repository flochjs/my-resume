import React from 'react';
import { render } from '@testing-library/react';

import Component from '../index';

const CLASSNAMES = {
  active: 'active',
};

describe('components :: Rating', () => {
  it('should render', () => {
    const props = {
      value: 3,
      className: 'className',
      'data-testid': 'test',
    };

    const { getByTestId } = render(<Component {...props} />);

    const root = getByTestId(props['data-testid']);

    expect(root).toHaveClass(props.className);
    expect(root.children.length).toBe(5);
  });

  describe('when called with an undefined value', () => {
    it('should not define any `active` class', () => {
      const props = {
        value: undefined,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root.children[0]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[1]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[2]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[3]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[4]).not.toHaveClass(CLASSNAMES.active);
    });
  });

  describe('when called with a fake value', () => {
    it('should not define any `active` class', () => {
      const props = {
        value: 'fake',
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root.children[0]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[1]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[2]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[3]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[4]).not.toHaveClass(CLASSNAMES.active);
    });
  });

  describe('when called with two as value', () => {
    it('should define an `active` class on the first two children', () => {
      const props = {
        value: 2,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root.children[0]).toHaveClass(CLASSNAMES.active);
      expect(root.children[1]).toHaveClass(CLASSNAMES.active);
      expect(root.children[2]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[3]).not.toHaveClass(CLASSNAMES.active);
      expect(root.children[4]).not.toHaveClass(CLASSNAMES.active);
    });
  });

  describe('when called with a value >= 5', () => {
    it('should define an `active` class on all the children', () => {
      const props = {
        value: 12,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);

      const root = getByTestId(props['data-testid']);

      expect(root.children[0]).toHaveClass(CLASSNAMES.active);
      expect(root.children[1]).toHaveClass(CLASSNAMES.active);
      expect(root.children[2]).toHaveClass(CLASSNAMES.active);
      expect(root.children[3]).toHaveClass(CLASSNAMES.active);
      expect(root.children[4]).toHaveClass(CLASSNAMES.active);
    });
  });
});
