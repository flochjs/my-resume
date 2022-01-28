import React from 'react';
import { render } from '@testing-library/react';

import Component from '../index';

describe('components :: Chip', () => {
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
});
