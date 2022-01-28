import React, { useState, useEffect, createContext } from 'react';

import './theme.css';

// theme's values must be the same as declared in `./style.module.css` selectors
const LIGHT_THEME = 'light';
const DARK_THEME = 'dark';

const ThemeContext = createContext();

export default function ThemeProvider({
  initialTheme = LIGHT_THEME,
  children,
}) {
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const isDark = theme === DARK_THEME;
  const isLight = theme === LIGHT_THEME;
  const toggleTheme = () => setTheme(isLight ? DARK_THEME : LIGHT_THEME);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, isDark, isLight, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export { LIGHT_THEME, DARK_THEME, ThemeContext };
