import App, { AppContext, AppInitialProps } from 'next/app';
import { NextComponentType } from 'next';
import React from 'react';
import { Router } from 'next/router';

import '../../public/style.css';
import * as gtag from '../lib/googleAnalythic';
import '../lib/i18n';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

export type AppProps = Record<string, unknown> & AppInitialProps;

class AppRoot extends App<AppProps> {
  /*
   * A page that relies on publicRuntimeConfig must use getInitialProps to opt-out
   * of Automatic Static Optimization. Runtime configuration won't be available to
   * any page (or component in a page) without getInitialProps.
   *
   * So to use env variable in runtime, we need this
   */
  static getInitialProps = async (appContext: AppContext): Promise<AppProps> => {
    const [appInitialProps] = await Promise.all([AppRoot.origGetInitialProps(appContext)]);

    return {
      ...appInitialProps,
    };
  };

  render() {
    return <BaseApp {...this.props} />;
  }
}

function BaseApp({
  Component,
  pageProps,
}: AppProps & {
  Component: NextComponentType;
}) {
  return <Component {...pageProps} />;
}

export default AppRoot;
