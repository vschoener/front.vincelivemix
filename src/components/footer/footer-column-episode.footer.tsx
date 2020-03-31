import React from 'react';
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import useSWR from 'swr';
import { EpisodesListDto } from '../../server/dto/episodes-list.dto';
import { getEpisodes } from '../../client/services/episode.service';

function renderLastEpisodes(episodes: EpisodesListDto, i18nLib: i18n) {
  const dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return episodes.map((episode) => (
    <div className="single-latest-episodes">
      <p className="episodes-date">
        {new Date(episode.publishedAt).toLocaleDateString(i18nLib.language, dateFormat)}
      </p>
      <a href={episode.audioLink} className="episodes-title">
        {episode.title}
      </a>
    </div>
  ));
}

export function FooterColumnEpisode() {
  const { t, i18n: i18nLib } = useTranslation();
  const { data: episodes } = useSWR('/api/episodes', getEpisodes);

  if (!episodes) {
    return <></>;
  }

  return (
    <div className="single-footer-widget mb-80">
      <h4 className="widget-title">{t('footer.latest-episode.title')}</h4>
      {renderLastEpisodes(episodes, i18nLib)}
    </div>
  );
}
