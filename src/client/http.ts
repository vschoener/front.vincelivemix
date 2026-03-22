import axios from 'axios';

import { publicAppConfig } from '../lib/public-config';

export const request = axios.create({
  baseURL: typeof window !== 'undefined' ? window.location.origin : publicAppConfig.host,
});
