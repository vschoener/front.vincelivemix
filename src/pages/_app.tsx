import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import React from "react";
import { Router } from "next/router";

import '../../public/style.css';
import * as gtag from '../lib/googleAnalythic';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

class AppRoot extends App<AppInitialProps> {
  /*
  * A page that relies on publicRuntimeConfig must use getInitialProps to opt-out
  * of Automatic Static Optimization. Runtime configuration won't be available to
  * any page (or component in a page) without getInitialProps.
  *
  * So to use env variable in runtime, we need this
  */
  static getInitialProps = async (appContext: AppContext): Promise<AppInitialProps> => {
    const [appInitialProps] = await Promise.all([
      AppRoot.origGetInitialProps(appContext),
    ]);

    return appInitialProps
  };

  render() {
    return <BaseApp { ...this.props } />
  }
}

function BaseApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default AppRoot;
