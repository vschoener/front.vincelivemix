import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHighLightEpisode } from '../../client/services/episode.service';
import { HighLightEpisodeDto } from '../../server/dto/highlight-episode.dto';
import { VerticalEpisode } from '../episode/vertical-episode/vertical-episode';

export const HighLightEpisode = () => {
  const { t } = useTranslation();

  const [highlightEpisode, setHighlightEpisode] = useState<HighLightEpisodeDto | null>();

  useEffect(() => {
    const fetchHighLightEpisode = async () => {
      setHighlightEpisode(await getHighLightEpisode());
    };

    fetchHighLightEpisode();
  }, []);

  return (
    <div className="mt-100" data-animation="fadeInUp" data-delay="900ms">
      {highlightEpisode ? (
        <VerticalEpisode episode={highlightEpisode} />
      ) : (
        <>
          {t('loading')}
          ...
        </>
      )}
    </div>
  );
};
