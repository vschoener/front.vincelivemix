import React from 'react';
import { Episode } from '../../../server/dto/episode.dto';
import { EpisodeHeader } from '../episode-block/episode-header';
import { AudioPlayer } from '../../audioplayer/audioplayer';
import { AudioBottomShare } from '../../share/audio-bottom-share';

type Props = {
  episode: Episode;
};

export const VerticalEpisode = ({ episode }: Props) => (
  <div className="poca-music-area d-flex align-items-center flex-wrap">
    <div className="poca-music-thumbnail">
      <img src={episode.coverImage} alt="live-mix-72-cover" />
    </div>
    <div className="poca-music-content">
      <EpisodeHeader episode={episode} />
      <div className="poca-music-player">
        <AudioPlayer
          audioLink={episode.audioLink}
          duration={episode.itunesDuration}
          durationInSeconds={episode.durationAudioInSecond}
        />
      </div>
      <AudioBottomShare episode={episode} />
    </div>
  </div>
);
