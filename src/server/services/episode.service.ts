import { HighLightEpisodeDto } from "../dto/highlight-episode.dto";
import { request } from "./backend";

export async function getHighLightEpisode(): Promise<HighLightEpisodeDto> {
  const { data } = await request.get(`/api/episodes/highlight-episode`);

  return data;
}
