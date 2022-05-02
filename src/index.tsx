import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';

import App from './app';
import customTheme from './styles/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
