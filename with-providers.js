import React from 'react';

import ThemeProvider, { DARK_THEME } from './src/providers/Theme';

export default ({ element }) => (
  <ThemeProvider initialTheme={DARK_THEME}>{element}</ThemeProvider>
);
