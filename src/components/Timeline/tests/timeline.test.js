import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Component from '../index';

const CLASSNAMES = {
  activeStep: 'activeStep',
};

describe('components :: Timeline', () => {
  it('should render', () => {
    const props = {
      className: 'className',
      'data-testid': 'test',
    };

    const { getByTestId } = render(<Component {...props} />);

    const root = getByTestId(props['data-testid']);

    expect(root).toHaveClass(props.className);
  });

  it('should provide to his children their index in the list as well as the `activeStep`', () => {
    const testId = 'test';
    const props = {
      activeStep: 'activeStep',
      children: [<button />, <button data-testid={testId} />, <button />],
    };

    const { getByTestId } = render(<Component {...props} />);
    const secondStep = getByTestId(testId);

    expect(secondStep).toHaveAttribute('index', '1');
    expect(secondStep).toHaveAttribute('activeStep', props.activeStep);
  });

  describe('when called with a node as children', () => {
    it('should throw an error', () => {
      const props = {
        children: 'node',
      };

      expect(() => render(<Component {...props} />)).toThrow();
    });
  });

  describe('Step', () => {
    it('should render', () => {
      const props = {
        'data-testid': 'test',
        className: 'className',
        children: 'children',
      };

      const { getByTestId, getByText } = render(<Component.Step {...props} />);
      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(props.className);
      expect(root).toContainElement(getByText(props.children));
      expect(root).not.toHaveClass(CLASSNAMES.activeStep);
    });

    describe('if index <= activeStep', () => {
      it('should apply an `activeStep` class', () => {
        const props = {
          'data-testid': 'test',
          index: 0,
          activeStep: 2,
        };

        const { getByTestId } = render(<Component.Step {...props} />);
        const root = getByTestId(props['data-testid']);

        expect(root).toHaveClass(CLASSNAMES.activeStep);
      });
    });

    describe('if index > activeStep', () => {
      it('should not apply an `activeStep` class', () => {
        const props = {
          'data-testid': 'test',
          index: 1,
          activeStep: 0,
        };

        const { getByTestId } = render(<Component.Step {...props} />);
        const root = getByTestId(props['data-testid']);

        expect(root).not.toHaveClass(CLASSNAMES.activeStep);
      });
    });

    describe("when clicking on the Step's button", () => {
      it('should call the provided `onClick` prop', () => {
        const props = {
          buttonProps: { onClick: jest.fn() },
        };

        const { getByRole } = render(<Component.Step {...props} />);
        const button = getByRole('button');
        fireEvent.click(button);

        expect(props.buttonProps.onClick).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('LeftContent', () => {
    it('should render', () => {
      const props = {
        'data-testid': 'test',
        children: 'children',
        className: 'className',
      };

      const { getByTestId, getByText } = render(
        <Component.Step.LeftContent {...props} />,
      );
      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(props.className);
      expect(root).toContainElement(getByText(props.children));
    });
  });

  describe('RightContent', () => {
    it('should render', () => {
      const props = {
        'data-testid': 'test',
        children: 'children',
        className: 'className',
      };

      const { getByTestId, getByText } = render(
        <Component.Step.RightContent {...props} />,
      );
      const root = getByTestId(props['data-testid']);

      expect(root).toHaveClass(props.className);
      expect(root).toContainElement(getByText(props.children));
    });
  });
});
