import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { i18n } from 'i18next';
import { getHighLightEpisode } from '../../client/services/episode.service';
import { HighLightEpisodeDto } from '../../server/dto/highlight-episode.dto';
import { AudioPlayer } from '../audioplayer/audioplayer';
import {AudioBottomShare} from "../share/audio-bottom-share";

function renderWithEpisode(highlightEpisode: HighLightEpisodeDto, i18nLib: i18n) {
  const dateFormat = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <>
      <div className="poca-music-thumbnail">
        <img src={highlightEpisode.coverImage} alt="live-mix-72-cover" />
      </div>
      <div className="poca-music-content">
        <span className="music-published-date">
          {new Date(highlightEpisode.publishedAt).toLocaleDateString(i18nLib.language, dateFormat)}
        </span>
        <h2>{highlightEpisode.title}</h2>
        <div className="music-meta-data">
          <p>
            By Vince |{' '}
            <a href="#" className="music-duration">
              {highlightEpisode.itunesDuration}
            </a>
          </p>
        </div>
        <div className="poca-music-player">
          <AudioPlayer
            audioLink={highlightEpisode.audioLink}
            duration={highlightEpisode.itunesDuration}
            durationInSeconds={highlightEpisode.durationAudioInSecond}
          />
        </div>
        <AudioBottomShare episode={highlightEpisode} />
      </div>
    </>
  );
}

export function HighLightEpisode() {
  const { t, i18n: i18nLib } = useTranslation();

  const [highlightEpisode, setHighlightEpisode] = useState<HighLightEpisodeDto>();

  useEffect(() => {
    const fetchHighLightEpisode = async () => {
      setHighlightEpisode(await getHighLightEpisode());
    };

    fetchHighLightEpisode();
  }, []);

  return (
    <div
      className="poca-music-area mt-100 d-flex align-items-center flex-wrap"
      data-animation="fadeInUp"
      data-delay="900ms"
    >
      {highlightEpisode ? (
        renderWithEpisode(highlightEpisode, i18nLib)
      ) : (
        <>
          {t('loading')}
          ...
        </>
      )}
    </div>
  );
}
