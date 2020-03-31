import { request } from '../http';
import { HighLightEpisodeDto } from '../../server/dto/highlight-episode.dto';
import { EpisodesListDto } from '../../server/dto/episodes-list.dto';

export async function getHighLightEpisode(): Promise<HighLightEpisodeDto> {
  const { data } = await request.get('/api/highlight-episode');

  return data;
}

export async function getEpisodes(): Promise<EpisodesListDto> {
  const { data } = await request.get('/api/episodes');

  return data;
}
