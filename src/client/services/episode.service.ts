import { request } from "../http";
import { HighLightEpisodeDto } from "../../server/dto/highlight-episode.dto";

export async function getHighLightEpisode(): Promise<HighLightEpisodeDto> {
  const { data } = await request.get(`/api/highlight-episode`);

  return data;
}
