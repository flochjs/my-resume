import React from 'react';
import { render } from '@testing-library/react';

import Component from '../index';

import TestLogo from '../../../images/file.svg';

const CLASSNAMES = {
  disabled: 'disabled',
};

describe('components :: Skill', () => {
  it('should render', () => {
    const props = {
      className: 'className',
      'data-testid': 'test',
      logo: TestLogo,
      label: 'label',
      iconProps: { 'data-testid': 'iconId' },
    };

    const { getByTestId } = render(<Component {...props} />);

    const root = getByTestId(props['data-testid']);
    const icon = getByTestId(props.iconProps['data-testid']);

    expect(root).toHaveClass(props.className);
    expect(icon).toHaveAttribute('aria-label', props.label);
  });

  describe('when called without a logo', () => {
    it('should throw an error', () => {
      const props = {
        logo: undefined,
      };

      expect(() => render(<Component {...props} />)).toThrow();
    });
  });

  describe('when called with a `link` prop', () => {
    it('should render an anchor tag with a href value provided with the `link` prop', () => {
      const props = {
        link: 'link',
        'data-testid': 'test',
        logo: TestLogo,
      };

      const { getByTestId } = render(<Component {...props} />);
      const root = getByTestId(props['data-testid']);

      expect(root.tagName.toLowerCase()).toBe('a');
      expect(root).toHaveAttribute('href', props.link);
    });
  });

  describe('when called without a `link` prop', () => {
    it('should not render an anchor and apply a `disabled` class', () => {
      const props = {
        'data-testid': 'test',
        logo: TestLogo,
      };

      const { getByTestId } = render(<Component {...props} />);
      const root = getByTestId(props['data-testid']);

      expect(root.tagName.toLowerCase()).not.toBe('a');
      expect(root).toHaveClass(CLASSNAMES.disabled);
    });
  });
});
