import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from "../createEmotionCache";
import lightTheme from "../theme";
import {Provider} from "react-redux";
import {store} from "../store";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>nextjs-mui-redux-template</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider store={store}>
        <ThemeProvider theme={lightTheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
