import axios from 'axios';
import { upgradeHttpAssetUrl } from '../../lib/media-url';
import { Episode } from '../dto/episode.dto';
import { HighLightEpisodeDto } from '../dto/highlight-episode.dto';
import { request } from './backend';
import { EpisodesListDto } from '../dto/episodes-list.dto';

function normalizeEpisodeMedia(episode: Episode): Episode {
  return {
    ...episode,
    coverImage: upgradeHttpAssetUrl(episode.coverImage),
    audioLink: upgradeHttpAssetUrl(episode.audioLink),
    itunesImageLink: upgradeHttpAssetUrl(episode.itunesImageLink),
  };
}

export async function getHighLightEpisode(): Promise<HighLightEpisodeDto | null> {
  try {
    const { data } = await request.get('/api/episodes/highlight-episode');
    return data ? normalizeEpisodeMedia(data) : null;
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return null;
    }

    // TODO: Sentry and so on could be nice to have here.
    console.error(e);

    throw e;
  }
}

export async function getPublishedEpisodes(): Promise<EpisodesListDto> {
  const { data } = await request.get('/api/episodes');

  return data.map(normalizeEpisodeMedia);
}
