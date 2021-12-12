import { useTranslation } from 'react-i18next';
import React from 'react';
import useSWR from 'swr';
import * as S from './latest-block-episodes-style';
import { EpisodesListDto } from '../../server/dto/episodes-list.dto';
import { getEpisodes } from '../../client/services/episode.service';
import { AudioPlayer } from '../audioplayer/audioplayer';
import { AudioBottomShare } from '../share/audio-bottom-share';
import { EpisodeHeader } from '../episode/episode-block/episode-header';

function renderEpisodes(episodes: EpisodesListDto) {
  return episodes.slice(1, 5).map((episode) => (
    <div
      key={episode.id}
      className="col-12 col-md-6 single_gallery_item entre wow fadeInUp"
      data-wow-delay="0.2s"
    >
      <div className="poca-music-area style-2 d-flex align-items-center flex-wrap">
        <div className="poca-music-thumbnail">
          <img src={episode.coverImage} alt="" />
        </div>
        <div className="poca-music-content text-center">
          <EpisodeHeader episode={episode} />
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
  ));
}

export const LatestBlockEpisodes = () => {
  const { t } = useTranslation();

  const { data: episodes } = useSWR('/api/episodes', getEpisodes);

  if (!episodes) {
    return null;
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
        <div className="row poca-portfolio">{renderEpisodes(episodes)}</div>
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
};
