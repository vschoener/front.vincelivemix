import { NextApiRequest, NextApiResponse } from 'next';
import * as episodeService from '../../server/services/episode.service';
import { HighLightEpisodeDto } from '../../server/dto/highlight-episode.dto';

export default async (_req: NextApiRequest, res: NextApiResponse<HighLightEpisodeDto | null>) => {
  res.send(await episodeService.getHighLightEpisode());
};
