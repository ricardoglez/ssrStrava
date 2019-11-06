import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { AppContextProvider } from '../context/AppContext';
import theme from '../themes/theme';

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppContextProvider> 
            <Component {...pageProps} /> 
        </AppContextProvider>
      </ThemeProvider>
    );
  }
}

export default MyApp;
