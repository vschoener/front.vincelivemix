import { HighLightEpisodeDto } from '../dto/highlight-episode.dto';
import { request } from './backend';
import { EpisodesListDto } from '../dto/episodes-list.dto';

export async function getHighLightEpisode(): Promise<HighLightEpisodeDto|null> {
  try {
    const { data } = await request.get('/api/episodes/highlight-episode');
    return data;
  } catch (e) {
    if (e.response.status === 404) {
      return null;
    }

    // TODO: Sentry and so on could be nice to have here.
    console.error(e);

    throw e;
  }
}

export async function getPublishedEpisodes(): Promise<EpisodesListDto> {
  const { data } = await request.get('/api/episodes');

  return data;
}
