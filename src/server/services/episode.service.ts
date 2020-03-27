import { HighLightEpisodeDto } from "../dto/highlight-episode.dto";
import { request } from "./backend";
import {EpisodesListDto} from "../dto/episodes-list.dto";

export async function getHighLightEpisode(): Promise<HighLightEpisodeDto> {
  const { data } = await request.get(`/api/episodes/highlight-episode`);

  return data;
}

export async function getPublishedEpisodes(): Promise<EpisodesListDto> {
  const { data } = await request.get(`/api/episodes`);

  return data;
}
