import React from 'react';
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import useSWR from 'swr';
import { EpisodesListDto } from '../../server/dto/episodes-list.dto';
import { getEpisodes } from '../../client/services/episode.service';
import { episodeDurationFormat } from '../../lib/date';

function renderLastEpisodes(episodes: EpisodesListDto, i18nLib: i18n) {
  return episodes.slice(0, 3).map((episode) => (
    <div key={episode.id} className="single-latest-episodes">
      <p className="episodes-date">
        {new Date(episode.publishedAt).toLocaleDateString(i18nLib.language, episodeDurationFormat)}
      </p>
      <a href={episode.audioLink} className="episodes-title">
        {episode.title}
      </a>
    </div>
  ));
}

export const FooterColumnEpisode = () => {
  const { t, i18n: i18nLib } = useTranslation();
  const { data: episodes } = useSWR('/api/episodes', getEpisodes);

  if (!episodes) {
    return null;
  }

  return (
    <div className="single-footer-widget mb-80">
      <h4 className="widget-title">{t('footer.latest-episode.title')}</h4>
      {renderLastEpisodes(episodes, i18nLib)}
    </div>
  );
};
