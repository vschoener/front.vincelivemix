import { NextApiRequest, NextApiResponse } from "next";
import * as episodeService from '../../server/services/episode.service';
import { HighLightEpisodeDto } from "../../server/dto/highlight-episode.dto";

export default async (_req: NextApiRequest, res: NextApiResponse<HighLightEpisodeDto>) => {
  const episode = await episodeService.getHighLightEpisode();

  res.send(episode);
};
