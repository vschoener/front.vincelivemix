import React from 'react';

import Header from '../header';
import Footer from '../footer/footer';

export const Layout: React.FC = ({ children }) => (
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
