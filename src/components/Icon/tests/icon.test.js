import React from 'react';
import { render } from '@testing-library/react';

import Component from '../index';

describe('components :: Icon', () => {
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
});
