import React from "react";
import { useTranslation } from "react-i18next";
import getConfig from "next/config";
import * as S from './subscribe-style';
import { HighLightEpisode } from "../highlight-episode/highlight-episode";

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
                  <HighLightEpisode />
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
