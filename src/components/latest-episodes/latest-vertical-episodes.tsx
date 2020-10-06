import { useTranslation } from 'react-i18next';
import React from 'react';
import useSWR from 'swr';
import * as S from './latest-block-episodes-style';
import { getEpisodes } from '../../client/services/episode.service';
import { VerticalEpisode } from '../episode/vertical-episode/vertical-episode';

export function LatestVerticalEpisodes() {
  const { t } = useTranslation();

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

      <div className="container">
        {episodes.map((episode) => (
          <div key={episode.id} className="mt-30">
            <VerticalEpisode episode={episode} />
          </div>
        ))}
      </div>
    </S.MainSection>
  );
}
