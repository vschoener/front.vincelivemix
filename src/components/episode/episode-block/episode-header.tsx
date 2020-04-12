import React from 'react';
import { Episode } from '../../../server/dto/episode.dto';
import { useTranslation } from 'react-i18next';
import { episodeDurationFormat } from '../../../lib/date';

type Props = {
  episode: Episode;
};

export function EpisodeHeader({ episode }: Props) {
  const { i18n } = useTranslation();

  return (
    <>
      <span className="music-published-date mb-2">
        {new Date(episode.publishedAt).toLocaleDateString(i18n.language, episodeDurationFormat)}
      </span>
      <h2>{episode.title}</h2>
      <div className="music-meta-data">
        <p>
          By <a className="music-author">Vince</a> <a className="music-duration">{episode.itunesDuration}</a>
        </p>
      </div>
    </>
  );
}
