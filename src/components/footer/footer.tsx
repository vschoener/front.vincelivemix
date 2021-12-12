import React from 'react';
import { useTranslation } from 'react-i18next';
import { FooterColumnEpisode } from './footer-column-episode.footer';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer-area section-padding-80-0">
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-80">
              <h4 className="widget-title">{t('footer.about-me.title')}</h4>
              <p>{t('footer.about-me.content')}</p>
              <div className="copywrite-content">
                {/* <p>&copy; */}

                {/*  Copyright &copy; */}
                {/*  <script>document.write(new Date().getFullYear());</script> */}
                {/*  All rights reserved | This template is made with <i className="fa fa-heart-o" */}
                {/*                                                      aria-hidden="true"></i> by <a */}
                {/*    href="https://colorlib.com" target="_blank">Colorlib</a></p> */}
              </div>
            </div>
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            {/* <div className="single-footer-widget mb-80"> */}
            {/*  <h4 className="widget-title">Categories</h4> */}

            {/*  <nav> */}
            {/*    <ul className="catagories-nav"> */}
            {/*      <li><a href="#">Entrepreneurship</a></li> */}
            {/*      <li><a href="#">Media</a></li> */}
            {/*      <li><a href="#">Tech</a></li> */}
            {/*      <li><a href="#">Tutorials</a></li> */}
            {/*    </ul> */}
            {/*  </nav> */}
            {/* </div> */}
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <FooterColumnEpisode />
          </div>

          <div className="col-12 col-sm-6 col-lg-3">
            <div className="single-footer-widget mb-80">
              <h4 className="widget-title">{t('footer.follow-me.title')}</h4>
              <div className="footer-social-info">
                <a
                  href="https://www.facebook.com/pg/vincelivemix"
                  className="facebook"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Facebook"
                >
                  <i className="fa fa-facebook" />
                </a>
                <a
                  href="https://twitter.com/vincelivemix"
                  className="twitter"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Twitter"
                >
                  <i className="fa fa-twitter" />
                </a>
                <a
                  href="https://www.instagram.com/vincent.schoener"
                  className="instagram"
                  data-toggle="tooltip"
                  data-placement="top"
                  title="Instagram"
                >
                  <i className="fa fa-instagram" />
                </a>
                {/* <a href="#" className="youtube" data-toggle="tooltip" data-placement="top" title="YouTube"><i */}
                {/*  className="fa fa-youtube-play"></i></a> */}
              </div>
              {/* <div className="app-download-button mt-30"> */}
              {/*  <a href="#"><img src="/img/core-img/app-store.png" alt="" /></a> */}
              {/*  <a href="#"><img src="/img/core-img/google-play.png" alt="" /></a> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
