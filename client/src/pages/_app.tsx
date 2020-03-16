import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from '@apollo/react-hooks';
import theme from '../theme';
import apolloClient from '../apollo/apolloClient';

export default class MyApp extends App {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <ApolloProvider client={apolloClient}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ApolloProvider>
        </ThemeProvider>
      </>
    );
  }
}
