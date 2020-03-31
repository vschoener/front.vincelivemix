import { NextApiRequest, NextApiResponse } from 'next';
import * as rssService from '../../server/services/rss.service';

export default async (_req: NextApiRequest, res: NextApiResponse<string>) => {
  res.send(await rssService.getRss());
};
