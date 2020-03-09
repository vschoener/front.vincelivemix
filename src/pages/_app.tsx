import { AppProps } from 'next/app';
import { Router } from "next/router";

import '../../public/style.css';
import * as gtag from '../lib/googleAnalythic';

Router.events.on('routeChangeComplete', url => gtag.pageview(url));

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
