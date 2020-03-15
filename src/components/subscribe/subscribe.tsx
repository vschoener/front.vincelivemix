import React from "react";
import { useTranslation } from "react-i18next";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

const { host } = publicRuntimeConfig;

import * as S from './subscribe-style';

function Subscribe() {
  const { t } = useTranslation();

  return (
    <>
      <S.MainSection className="welcome-area">
        <div className="welcome-slides">
          <div className="welcome-welcome-slide bg-img bg-overlay">
            <div className="container h-100">
              <div className="row h-100 align-items-center">
                <div className="col-12">
                  <div className="welcome-text">
                    <h1 data-animation="fadeInUp" data-delay="100ms">
                     { t('subscribe.title' )}
                    </h1>
                    <h5 data-animation="fadeInUp" data-delay="300ms">
                      { t('subscribe.choose-services') }
                    </h5>
                    <div className="welcome-btn-group">
                      <a className="btn poca-btn m-2 ml-0 disabled" data-animation="fadeInUp" data-delay="500ms">
                        { t('subscribe.sub-with-itunes') }
                      </a>
                      <a href={host + '/api/rss'} target="_blank" className="btn poca-btn btn-2 m-2" data-animation="fadeInUp" data-delay="700ms">
                        { t('subscribe.sub-with-rss') }
                      </a>
                    </div>
                  </div>
                  <div className="poca-music-area mt-100 d-flex align-items-center flex-wrap" data-animation="fadeInUp"
                       data-delay="900ms">
                    <div className="poca-music-thumbnail">
                      <img src="http://media.vincelivemix.fr/images/episodes/Live+mix+72.jpg" alt="live-mix-72-cover" />
                    </div>
                    <div className="poca-music-content">
                      <span className="music-published-date">September 29, 2019</span>
                      <h2>Live Mix 72 - Resurrection</h2>
                      <div className="music-meta-data">
                        <p>By <a href="#" className="music-author">Vince</a> | <a
                          href="#" className="music-duration">00:47:26</a></p>
                      </div>
                      <div className="poca-music-player">
                        <audio preload="none" controls controlsList="nodownload">
                          <source src="http://media.vincelivemix.fr/episodes/Vince+Live+Mix+72+-+Resurrection.mp3" />
                        </audio>
                      </div>
                      <div className="likes-share-download d-flex align-items-center justify-content-between">
                        <a>
                          <i className="fa fa-heart" aria-hidden="true"></i> { t('subscribe.like') } ({ t('coming-soon') })
                        </a>
                        <div>
                          <a className="mr-4"><i className="fa fa-share-alt" aria-hidden="true"></i> { t('subscribe.share') } ({ t('coming-soon') })</a>
                          <a href="http://media.vincelivemix.fr/episodes/Vince+Live+Mix+72+-+Resurrection.mp3" download><i className="fa fa-download" aria-hidden="true"></i> { t('subscribe.download') }</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </S.MainSection>
    </>
  )
}

export default Subscribe;
