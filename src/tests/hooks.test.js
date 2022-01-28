import React, { createRef } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import {
  useBoolean,
  useOnClickOutside,
  useDeviceDetect,
  useWindowSize,
} from '../hooks';

describe('roots :: hooks', () => {
  describe('useBoolean', () => {
    describe('when called without arguments', () => {
      it("should return the handlers and false as the boolean's initial value", () => {
        const { result } = renderHook(() => useBoolean());

        expect(result.current.value).toBe(false);
        expect(typeof result.current.setValue).toBe('function');
        expect(typeof result.current.toggle).toBe('function');
        expect(typeof result.current.setTrue).toBe('function');
        expect(typeof result.current.setFalse).toBe('function');
      });
    });

    describe('when called with an argument', () => {
      it("should return the handlers and the argument as the boolean's intial value", () => {
        const defaultValue = 'defaultValue';
        const { result } = renderHook(() => useBoolean(defaultValue));

        expect(result.current.value).toBe(defaultValue);
        expect(typeof result.current.setValue).toBe('function');
        expect(typeof result.current.toggle).toBe('function');
        expect(typeof result.current.setTrue).toBe('function');
        expect(typeof result.current.setFalse).toBe('function');
      });
    });

    describe('setValue', () => {
      it('should set the boolean value', () => {
        const defaultValue = 'defaultValue';
        const { result } = renderHook(() => useBoolean(defaultValue));
        const value = 12;

        act(() => result.current.setValue(value));

        expect(result.current.value).toBe(value);
      });
    });

    describe('toggle', () => {
      it('should toggle the boolean value', () => {
        const defaultValue = 'defaultValue';
        const { result } = renderHook(() => useBoolean(defaultValue));

        act(() => result.current.toggle());

        expect(result.current.value).toBe(false);

        act(() => result.current.toggle());

        expect(result.current.value).toBe(true);
      });
    });

    describe('setTrue', () => {
      it('should set to true the boolean value', () => {
        const defaultValue = 'defaultValue';
        const { result } = renderHook(() => useBoolean(defaultValue));

        act(() => result.current.setTrue());

        expect(result.current.value).toBe(true);
      });
    });

    describe('setFalse', () => {
      it('should set to false the boolean value', () => {
        const defaultValue = 'defaultValue';
        const { result } = renderHook(() => useBoolean(defaultValue));

        act(() => result.current.setFalse());

        expect(result.current.value).toBe(false);
      });
    });
  });

  describe('useOnClickOutside', () => {
    describe('when clicking outside the element', () => {
      describe('when listening is set to true or not provided', () => {
        it('should call the callback', () => {
          const callback = jest.fn();
          const ref = createRef();

          render(<div ref={ref}></div>);
          renderHook(() => useOnClickOutside(ref, callback));

          fireEvent.mouseDown(document);

          expect(callback).toBeCalledTimes(1);
        });

        it('should call the callback', () => {
          const callback = jest.fn();
          const ref = createRef();
          const listening = true;

          render(<div ref={ref}></div>);
          renderHook(() => useOnClickOutside(ref, callback, listening));

          fireEvent.mouseDown(document);

          expect(callback).toBeCalledTimes(1);
        });
      });

      describe('when listening is set to false', () => {
        it('should not call the callback', () => {
          const callback = jest.fn();
          const ref = createRef();
          const listening = false;

          render(<div ref={ref}></div>);
          renderHook(() => useOnClickOutside(ref, callback, listening));

          fireEvent.mouseDown(document);

          expect(callback).not.toBeCalled();
        });
      });
    });

    describe('when clicking on the element', () => {
      it('should not call the callback', () => {
        const callback = jest.fn();
        const ref = createRef();
        const testId = 'testId';

        render(<div ref={ref} data-testid={testId}></div>);
        renderHook(() => useOnClickOutside(ref, callback));

        fireEvent.mouseDown(screen.getByTestId(testId));

        expect(callback).not.toBeCalled();
      });
    });
  });

  describe('useDeviceDetect', () => {
    describe('when called without arguments', () => {
      it('should return the handlers', () => {
        const detection = useDeviceDetect();

        expect(typeof detection.isMobile).toBe('function');
        expect(typeof detection.isDesktop).toBe('function');
        expect(typeof detection.isAndroid).toBe('function');
        expect(typeof detection.isIos).toBe('function');
        expect(typeof detection.isSSR).toBe('function');

        expect(detection.isMobile()).toBe(false);
        expect(detection.isAndroid()).toBe(false);
        expect(detection.isDesktop()).toBe(true);
        expect(detection.isSSR()).toBe(false);
        expect(detection.isIos()).toBe(false);
      });
    });

    describe('when called without a user agent', () => {
      it('isDesktop should return true the others false ', () => {
        const detection = useDeviceDetect();

        expect(detection.isMobile()).toBe(false);
        expect(detection.isAndroid()).toBe(false);
        expect(detection.isDesktop()).toBe(true);
        expect(detection.isSSR()).toBe(false);
        expect(detection.isIos()).toBe(false);
      });
    });

    const setUserAgent = (userAgent) => {
      Object.defineProperty(navigator, 'userAgent', {
        value: userAgent,
        writable: true,
      });
    };

    describe('when called with a fake user agent', () => {
      it('isDesktop should return true the others false ', () => {
        const fakeUa = 'fake-user-agent';
        setUserAgent(fakeUa);
        const detection = useDeviceDetect();

        expect(detection.isMobile()).toBe(false);
        expect(detection.isAndroid()).toBe(false);
        expect(detection.isDesktop()).toBe(true);
        expect(detection.isSSR()).toBe(false);
        expect(detection.isIos()).toBe(false);
      });
    });

    describe('when called with an android user agent', () => {
      it('isMobile and isAndroid should return true the others false', () => {
        const samsungGalaxyUa = `Mozilla/5.0 (Linux; Android 7.0; SM-G892A Build/NRD90M; wv) 
    AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/60.0.3112.107 Mobile Safari/537.36`;
        setUserAgent(samsungGalaxyUa);
        const detection = useDeviceDetect();

        expect(detection.isMobile()).toBe(true);
        expect(detection.isAndroid()).toBe(true);
        expect(detection.isDesktop()).toBe(false);
        expect(detection.isSSR()).toBe(false);
        expect(detection.isIos()).toBe(false);
      });
    });

    describe('when called with an ios user agent', () => {
      it('isMobile and isIos should return true the others false', () => {
        const iPhone8Ua = `Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) 
    AppleWebKit/604.1.34 (KHTML, like Gecko) Version/11.0 Mobile/15A5341f Safari/604.1`;
        setUserAgent(iPhone8Ua);
        const detection = useDeviceDetect();

        expect(detection.isMobile()).toBe(true);
        expect(detection.isAndroid()).toBe(false);
        expect(detection.isDesktop()).toBe(false);
        expect(detection.isSSR()).toBe(false);
        expect(detection.isIos()).toBe(true);
      });
    });

    describe('when called with a desktop user agent', () => {
      it('isDesktop should return true the others false', () => {
        const windows7ChromeUa = `Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 
    (KHTML, like Gecko) Chrome/47.0.2526.111 Safari/537.36`;
        setUserAgent(windows7ChromeUa);
        const detection = useDeviceDetect();

        expect(detection.isMobile()).toBe(false);
        expect(detection.isAndroid()).toBe(false);
        expect(detection.isDesktop()).toBe(true);
        expect(detection.isSSR()).toBe(false);
        expect(detection.isIos()).toBe(false);
      });
    });

    describe('when called with an SSR user agent', () => {
      it('isSSR should return true the others false', () => {
        const ssrUa = 'SSR';
        setUserAgent(ssrUa);
        const detection = useDeviceDetect();

        expect(detection.isMobile()).toBe(false);
        expect(detection.isAndroid()).toBe(false);
        expect(detection.isDesktop()).toBe(false);
        expect(detection.isSSR()).toBe(true);
        expect(detection.isIos()).toBe(false);
      });
    });
  });

  describe('useWindowSize', () => {
    it('should return the window dimensions', () => {
      const { result } = renderHook(() => useWindowSize());

      const jsDomDefaultDimension = { width: 1024, height: 768 };

      expect(result.current.width).toBe(jsDomDefaultDimension.width);
      expect(result.current.height).toBe(jsDomDefaultDimension.height);

      const expectedWidth = 500;
      const expectedHeight = 700;

      act(() => {
        window.innerWidth = expectedWidth;
        window.innerHeight = expectedHeight;

        fireEvent(window, new Event('resize'));
      });

      expect(result.current.width).toBe(expectedWidth);
      expect(result.current.height).toBe(expectedHeight);
    });
  });
});
