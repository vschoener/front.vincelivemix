import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { getHighLightEpisode } from '../../client/services/episode.service';
import { HighLightEpisodeDto } from '../../server/dto/highlight-episode.dto';
import { AudioPlayer } from '../audioplayer/audioplayer';
import {AudioBottomShare} from "../share/audio-bottom-share";
import {EpisodeHeader} from "../episode/episode-block/episode-header";

function renderWithEpisode(highlightEpisode: HighLightEpisodeDto) {
  return (
    <>
      <div className="poca-music-thumbnail">
        <img src={highlightEpisode.coverImage} alt="live-mix-72-cover" />
      </div>
      <div className="poca-music-content">
        <EpisodeHeader episode={highlightEpisode}/>
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
  const { t } = useTranslation();

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
        renderWithEpisode(highlightEpisode)
      ) : (
        <>
          {t('loading')}
          ...
        </>
      )}
    </div>
  );
}
