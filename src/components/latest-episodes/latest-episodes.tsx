import { useTranslation } from 'react-i18next';
import React from 'react';
import { i18n, TFunction } from 'i18next';
import useSWR from 'swr';
import * as S from './latest-episodes-style';
import { EpisodesListDto } from '../../server/dto/episodes-list.dto';
import { getEpisodes } from '../../client/services/episode.service';
import { AudioPlayer } from '../audioplayer/audioplayer';
import { AudioBottomShare } from '../share/audio-bottom-share';

function renderEpisodes(episodes: EpisodesListDto, t: TFunction, i18nLib: i18n) {
  const dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return episodes.slice(1).map((episode) => (
    <>
      <div className="col-12 col-md-6 single_gallery_item entre wow fadeInUp" data-wow-delay="0.2s">
        <div className="poca-music-area style-2 d-flex align-items-center flex-wrap">
          <div className="poca-music-thumbnail">
            <img src={episode.coverImage} alt="" />
          </div>
          <div className="poca-music-content text-center">
            <span className="music-published-date mb-2">
              {new Date(episode.publishedAt).toLocaleDateString(i18nLib.language, dateFormat)}
            </span>
            <h2>{episode.title}</h2>
            <div className="music-meta-data">
              <p>
                By <a className="music-author">Vince</a>{' '}
                <a className="music-catagory">{t('category.music')}</a> |{' '}
                <a className="music-duration">00:02:56</a>
              </p>
            </div>
            <div className="poca-music-player">
              <AudioPlayer
                audioLink={episode?.audioLink}
                duration={episode?.itunesDuration}
                durationInSeconds={episode?.durationAudioInSecond}
              />
            </div>
            <AudioBottomShare episode={episode} />
          </div>
        </div>
      </div>
    </>
  ));
}

export function LatestEpisodes() {
  const { t, i18n: i18nLib } = useTranslation();

  const { data: episodes } = useSWR('/api/episodes', getEpisodes);

  if (!episodes) {
    return <></>;
  }

  return (
    <S.MainSection className="poca-latest-epiosodes section-padding-80">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-heading text-center">
              <h2>{t('latest-episodes.title')}</h2>
              <div className="line" />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container"> */}
      {/*  <div className="poca-projects-menu mb-30 wow fadeInUp" data-wow-delay="0.3s"> */}
      {/*    <div className="text-center portfolio-menu"> */}
      {/*      <button className="btn active" data-filter="*">All</button> */}
      {/*      <button className="btn" data-filter=".entre">Entrepreneurship</button> */}
      {/*      <button className="btn" data-filter=".media">Media</button> */}
      {/*      <button className="btn" data-filter=".tech">Tech</button> */}
      {/*      <button className="btn" data-filter=".tutor">Tutorials</button> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}

      <div className="container">
        <div className="row poca-portfolio">{renderEpisodes(episodes, t, i18nLib)}</div>
      </div>

      {/* <div className="container"> */}
      {/*  <div className="row"> */}
      {/*    <div className="col-12 text-center"> */}
      {/*      <a href="#" className="btn poca-btn mt-70">Load More</a> */}
      {/*    </div> */}
      {/*  </div> */}
      {/* </div> */}
    </S.MainSection>
  );
}
