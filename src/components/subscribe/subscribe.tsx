import React from 'react';
import { useTranslation } from 'react-i18next';
import getConfig from 'next/config';
import * as S from './subscribe-style';
import { HighLightEpisode } from '../highlight-episode/highlight-episode';

const { publicRuntimeConfig } = getConfig();

const { host } = publicRuntimeConfig;

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
                      {t('subscribe.title')}
                    </h1>
                    <h5 data-animation="fadeInUp" data-delay="300ms">
                      {t('subscribe.choose-services')}
                    </h5>
                    <div className="welcome-btn-group">
                      <a
                        href="https://podcasts.apple.com/fr/podcast/vince-live-mix/id1504590027"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn poca-btn m-2 ml-0"
                        data-animation="fadeInUp"
                        data-delay="500ms"
                      >
                        {t('subscribe.sub-with-itunes')}{' '}
                        <img src="/img/podcast-itunes.svg" width="24" alt="iTunes logo" />
                      </a>
                      <a
                        href={`${host}/api/rss`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn poca-btn m-2 ml-0"
                        data-animation="fadeInUp"
                        data-delay="700ms"
                      >
                        {t('subscribe.sub-with-rss')}{' '}
                        <img src="/img/icon-rss.svg" width="24" alt="Rss logo" />
                      </a>
                      <a
                        href="https://soundcloud.com/vincelivemix"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn poca-btn m-2 ml-0"
                        data-animation="fadeInUp"
                        data-delay="700ms"
                      >
                        {t('subscribe.sub-with-soundcloud')}{' '}
                        <img src="/img/soundcloud.svg" width="24" alt="SoundCloud logo" />
                      </a>
                      <a
                        href="https://open.spotify.com/show/2uTRSh7MAbRDyKjAxkg6ff?si=-TyUjnVnRsKr0pyH21pECA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn poca-btn m-2 ml-0"
                        data-animation="fadeInUp"
                        data-delay="700ms"
                      >
                        {t('subscribe.sub-with-spotify')}{' '}
                        <img src="/img/spotify.svg" width="24" alt="Spotify logo" />
                      </a>
                    </div>
                  </div>
                  <HighLightEpisode />
                </div>
              </div>
            </div>
          </div>
        </div>
      </S.MainSection>
    </>
  );
}

export default Subscribe;
