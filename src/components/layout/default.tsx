import React from 'react';

import Header from '../header';
import Footer from '../footer/footer';

// Children was removed in React 18. We need to specify it ourselves
// https://plainenglish.io/blog/how-to-use-react-fc-children-prop-in-react-18-with-typescript-6ab7b2c901ce
type Props = {
  children?: React.ReactNode
};

export const Layout: React.FC<Props> = ({ children }) => (
  <>
    <Header />

    {children}

    <Footer />
    <script src="/js/jquery.min.js" />
    {/* <script src="/js/popper.min.js"/> */}
    {/* <script src="/js/bootstrap.min.js"/> */}
    {/* Bundle js */}
    <script src="/js/default-assets/classynav.js" />
    {/* <script src="/js/owl.carousel.min.js"/> */}
    {/* <script src="/js/wow.min.js"/> */}
    {/* <script src="/js/waypoints.min.js"/> */}
    {/* <script src="/js/imagesloaded.pkgd.min.js"/> */}
    {/* <script src="/js/isotope.pkgd.min.js"/> */}
    {/* <script src="/js/jarallax.min.js"/> */}
    {/* <script src="/js/jarallax-video.min.js"/> */}
    {/* <script src="/js/jquery.easing.min.js"/> */}
    <script src="/js/default-assets/jquery.scrollup.min.js" />
    <script src="/js/default-assets/active.js" />
  </>
);
