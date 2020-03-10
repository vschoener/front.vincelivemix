import * as backendService from '../../server/services/backend';
import {NextApiRequest, NextApiResponse } from "next";

export default async (_req: NextApiRequest, res: NextApiResponse<string>) => {
  const rss = await backendService.getRss();

  res.send(rss);
};
