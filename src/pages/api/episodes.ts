import { NextApiRequest, NextApiResponse } from "next";
import * as episodeService from '../../server/services/episode.service';
import {EpisodesListDto} from "../../server/dto/episodes-list.dto";

export default async (_req: NextApiRequest, res: NextApiResponse<EpisodesListDto>) => {
  res.send(await episodeService.getPublishedEpisodes());
};
