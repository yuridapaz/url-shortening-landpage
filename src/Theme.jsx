import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    cyan: '#2acfcf',
    red: '#f46262',
    gray: '#bfbfbf',
    bgGray: '#eff1f7',
    grayishViolet: '#9e9aa7',
    darkViolet: '#3b3054',
    veryDarkBlue: '#35323e',
    veryDarkViolet: '#232127',
  },
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
