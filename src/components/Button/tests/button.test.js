import React from 'react';

import { render, fireEvent } from '@testing-library/react';

import Component from '../index';

const CLASSNAMES = {
  disabled: 'disabled',
  button: 'button',
};

describe('components :: Button', () => {
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

  describe('when called with a `to` prop', () => {
    it('should render an anchor tag with a href value provided with the `to` prop', () => {
      const props = {
        to: 'to',
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);
      const root = getByTestId(props['data-testid']);

      expect(root.tagName.toLowerCase()).toBe('a');
      expect(root).toHaveAttribute('href', props.to);
    });

    describe('when called with disabled prop at true', () => {
      it('should not render an anchor and apply a `disabled` class', () => {
        const props = {
          to: 'to',
          disabled: true,
          'data-testid': 'test',
        };

        const { getByTestId } = render(<Component {...props} />);
        const root = getByTestId(props['data-testid']);

        expect(root.tagName.toLowerCase()).not.toBe('a');
        expect(root).toHaveClass(CLASSNAMES.disabled);
      });
    });
  });

  describe('when called without a `to` prop', () => {
    it('should render a button of type `button` with a `button` class applied', () => {
      const props = {
        to: undefined,
        'data-testid': 'test',
      };

      const { getByTestId } = render(<Component {...props} />);
      const root = getByTestId(props['data-testid']);

      expect(root.tagName.toLowerCase()).toBe('button');
      expect(root.type).toBe('button');
      expect(root).toHaveClass(CLASSNAMES.button);
    });

    describe('when clicking on it', () => {
      it('should call the `onClick` prop', () => {
        const props = {
          onClick: jest.fn(),
        };

        const { getByRole } = render(<Component {...props} />);
        const root = getByRole('button');
        fireEvent.click(root);

        expect(props.onClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('when `disabled` prop is set', () => {
      it('should not call the `onClick` prop', () => {
        const props = {
          onClick: jest.fn(),
          disabled: true,
        };

        const { getByRole } = render(<Component {...props} />);

        const button = getByRole('button');
        fireEvent.click(button);

        expect(props.onClick).not.toHaveBeenCalled();
      });
    });
  });
});
