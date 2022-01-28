import { useState, useEffect, useContext, useCallback } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import { ThemeContext } from './providers/Theme';

export function useBoolean(defaultValue = false) {
  const [value, setValue] = useState(defaultValue);

  const toggle = useCallback(() => setValue(!value), [value]);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return {
    value,
    setValue,
    toggle,
    setTrue,
    setFalse,
  };
}

export function useOnClickOutside(ref, callback, listening = true) {
  useEffect(() => {
    if (!listening) return;

    const listener = (event) => {
      if (ref.current && !ref.current.contains(event.target)) callback(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, callback, listening]);
}

function getMobileDetect(userAgent) {
  const isAndroid = () => Boolean(userAgent.match(/Android/i));
  const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
  const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
  const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  const isSSR = () => Boolean(userAgent.match(/SSR/i));

  const isMobile = () =>
    Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  const isDesktop = () => Boolean(!isMobile() && !isSSR());

  return {
    isMobile,
    isDesktop,
    isAndroid,
    isIos,
    isSSR,
  };
}

export function useDeviceDetect() {
  const userAgent =
    typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent;
  return getMobileDetect(userAgent);
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

export function useBackground() {
  const { isLight } = useContext(ThemeContext);
  const { lightBg, darkBg } = useStaticQuery(graphql`
    query {
      lightBg: file(relativePath: { eq: "light-theme-bg.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
      darkBg: file(relativePath: { eq: "dark-theme-bg.png" }) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
        }
      }
    }
  `);
  const lightImage = getImage(lightBg);
  const darkImage = getImage(darkBg);

  return isLight ? lightImage : darkImage;
}
