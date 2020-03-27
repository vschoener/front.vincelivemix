import * as S from './latest-episodes-style';
import {useTranslation} from "react-i18next";
import React, {useEffect, useState} from "react";
import {EpisodesListDto} from "../../server/dto/episodes-list.dto";
import {getEpisodes} from "../../client/services/episode.service";
import {i18n, TFunction} from "i18next";

function renderEpisodes(episodes: EpisodesListDto, t: TFunction, i18n: i18n) {
  const dateFormat = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

  return episodes.slice(1).map(episode => (
    <>
      <div className="col-12 col-md-6 single_gallery_item entre wow fadeInUp" data-wow-delay="0.2s">
        <div className="poca-music-area style-2 d-flex align-items-center flex-wrap">
          <div className="poca-music-thumbnail">
            <img src={episode.coverImage} alt="" />
          </div>
          <div className="poca-music-content text-center">
            <span className="music-published-date mb-2">{new Date(episode.publishedAt).toLocaleDateString(i18n.language, dateFormat)}</span>
            <h2>{episode.title}</h2>
            <div className="music-meta-data">
              <p>By <a href="#" className="music-author">Vince</a> | <a className="music-catagory">{ t('category.music') }</a> | <a className="music-duration">00:02:56</a></p>
            </div>
            <div className="poca-music-player">
              <audio preload="none" controls controlsList="nodownload">
                <source src={episode.audioLink} />
              </audio>
            </div>
            <div className="likes-share-download d-flex align-items-center justify-content-between">
              <a ><i className="fa fa-heart" aria-hidden="true"></i> { t('like') } ({ t('coming-soon') })</a>
              <div>
                <a className="mr-4"><i className="fa fa-share-alt" aria-hidden="true"></i> { t('share') } ({ t('coming-soon') })</a>
                <a href={episode.audioLink} download><i className="fa fa-download" aria-hidden="true"></i> { t('download') }</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ));
}

export function LatestEpisodes() {
  const { t, i18n } = useTranslation();

  const [episodes, setEpisodes] = useState<EpisodesListDto>([]);

  useEffect(() => {
    const fetchEpisodes = async () => {
      const episodes = await getEpisodes();
      setEpisodes(episodes);
    };

    fetchEpisodes();
  }, []);

  return (
    <S.MainSection className="poca-latest-epiosodes section-padding-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>{t('latest-episodes.title')}</h2>
              <div className="line"></div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="container">*/}
      {/*  <div className="poca-projects-menu mb-30 wow fadeInUp" data-wow-delay="0.3s">*/}
      {/*    <div className="text-center portfolio-menu">*/}
      {/*      <button className="btn active" data-filter="*">All</button>*/}
      {/*      <button className="btn" data-filter=".entre">Entrepreneurship</button>*/}
      {/*      <button className="btn" data-filter=".media">Media</button>*/}
      {/*      <button className="btn" data-filter=".tech">Tech</button>*/}
      {/*      <button className="btn" data-filter=".tutor">Tutorials</button>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      <div className="container">
        <div className="row poca-portfolio">
          {renderEpisodes(episodes, t, i18n)}
        </div>
      </div>

      {/*<div className="container">*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-12 text-center">*/}
      {/*      <a href="#" className="btn poca-btn mt-70">Load More</a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </S.MainSection>
  );
}
