import type { AppProps } from 'next/app';
import { Router } from 'next/router';

import '../../public/style.css';
import * as gtag from '../lib/googleAnalythic';
import '../lib/i18n';

Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

const AppRoot = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default AppRoot;
