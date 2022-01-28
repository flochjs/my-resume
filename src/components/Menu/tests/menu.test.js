import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Component from '../index';

const CLASSNAMES = {
  listVisible: 'listVisible',
};

describe('components :: Menu', () => {
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

  describe('List', () => {
    describe('when not rendered as a descendant of the Menu component', () => {
      it('should throw an error', () => {
        expect(() => render(<Component.List />)).toThrow();
      });
    });

    it('should render', () => {
      const props = {
        children: 'children',
        className: 'className',
        'data-testid': 'test',
      };

      const { getByText, getByTestId } = render(
        <Component>
          <Component.List {...props} />
        </Component>,
      );
      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(props.className);
      expect(root).toContainElement(getByText(props.children));
    });
  });

  describe('Item', () => {
    describe('when not rendered as a descendant of the Menu component', () => {
      it('should throw an error', () => {
        expect(() => render(<Component.Item />)).toThrow();
      });
    });

    it('should render', () => {
      const props = {
        children: 'children',
        className: 'className',
        'data-testid': 'test',
      };

      const { getByText, getByTestId } = render(
        <Component>
          <Component.Item {...props} />
        </Component>,
      );

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(props.className);
      expect(root).toContainElement(getByText(props.children));
    });

    describe("when clicking on the Item's button", () => {
      it('should call the `onClick` prop', () => {
        const props = {
          onClick: jest.fn(),
        };

        const { getByRole } = render(
          <Component>
            <Component.Item {...props} />
          </Component>,
        );

        const button = getByRole('button');
        fireEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1);
      });

      it('should remove the `listVisible` class on the `List` element', () => {
        const listId = 'list-id';
        const toggleId = 'toggle-id';
        const buttonText = 'button-text';

        const { getByTestId, getByText } = render(
          <Component>
            <Component.Toggle>
              <button data-testid={toggleId}></button>
            </Component.Toggle>
            <Component.List data-testid={listId}>
              <Component.Item children={buttonText} />
            </Component.List>
          </Component>,
        );

        const toggle = getByTestId(toggleId);
        const list = getByTestId(listId);
        const item = getByText(buttonText);

        expect(list).not.toHaveClass(CLASSNAMES.listVisible);

        fireEvent.click(item);
        expect(list).not.toHaveClass(CLASSNAMES.listVisible);

        fireEvent.click(toggle);
        expect(list).toHaveClass(CLASSNAMES.listVisible);

        fireEvent.click(item);
        expect(list).not.toHaveClass(CLASSNAMES.listVisible);
      });
    });

    describe('when `disabled` props is set', () => {
      it('should not call the `onClick` prop', () => {
        const props = {
          'data-testid': 'test',
          onClick: jest.fn(),
          disabled: true,
        };

        const { getByRole } = render(
          <Component>
            <Component.Item {...props} />
          </Component>,
        );

        const button = getByRole('button');
        fireEvent.click(button);

        expect(props.onClick).not.toHaveBeenCalled();
      });
    });
  });

  describe('Toggle', () => {
    describe('when not rendered as a descendant of the Menu component', () => {
      it('should throw an error', () => {
        const props = {
          children: 'children',
        };
        expect(() => render(<Component.Toggle {...props} />)).toThrow();
      });
    });

    it('should render', () => {
      const props = {
        children: 'children',
        className: 'className',
        'data-testid': 'test',
      };

      const { getByTestId, getByText } = render(
        <Component>
          <Component.Toggle {...props} />
        </Component>,
      );

      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(props.className);
      expect(root).toContainElement(getByText(props.children));
    });

    describe("when clicking on the Toggle's button", () => {
      it('should call the `onClick` prop', () => {
        const props = {
          'data-testid': 'test',
          onClick: jest.fn(),
        };

        const { getByRole } = render(
          <Component>
            <Component.Toggle {...props} />
          </Component>,
        );

        const button = getByRole('button');
        fireEvent.click(button);

        expect(props.onClick).toHaveBeenCalledTimes(1);
      });

      it('should toggle the `listVisible` class on the `List` element', () => {
        const toggleId = 'toggle-id';
        const listId = 'list-id';

        const { getByTestId } = render(
          <Component>
            <Component.Toggle>
              <button data-testid={toggleId}></button>
            </Component.Toggle>
            <Component.List data-testid={listId} />
          </Component>,
        );

        const toggle = getByTestId(toggleId);
        const list = getByTestId(listId);

        expect(list).not.toHaveClass(CLASSNAMES.listVisible);
        fireEvent.click(toggle);
        expect(list).toHaveClass(CLASSNAMES.listVisible);
      });
    });

    describe('when `disabled` props is set', () => {
      it('should not call the `onClick` prop', () => {
        const props = {
          'data-testid': 'test',
          onClick: jest.fn(),
          disabled: true,
        };

        const { getByRole } = render(
          <Component>
            <Component.Toggle {...props} />
          </Component>,
        );

        const button = getByRole('button');
        fireEvent.click(button);

        expect(props.onClick).not.toHaveBeenCalled();
      });
    });
  });
});
