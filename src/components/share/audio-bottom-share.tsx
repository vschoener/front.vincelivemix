import React from 'react';
import { Episode } from '../../server/dto/episode.dto';
import {useTranslation} from "react-i18next";

type Props = {
  episode: Episode;
};

export function AudioBottomShare({ episode }: Props) {
  const { t } = useTranslation();

  return (
    <div className="likes-share-download d-flex align-items-center justify-content-between">
      <a>
        <i className="fa fa-heart" aria-hidden="true" />{' '}
        {t('like')} ({t('coming-soon')})
      </a>
      <div>
        <a className="mr-4">
          <i className="fa fa-share-alt" aria-hidden="true" />{' '}
          {t('share')} ({t('coming-soon')})
        </a>
        <a href={episode.audioLink} download>
          <i className="fa fa-download" aria-hidden="true" />{' '}
          {t('download')}
        </a>
      </div>
    </div>
  );
}
