import getConfig from 'next/config';
import axios from 'axios';

const { serverRuntimeConfig: { backend: backendConfig } } = getConfig();

export const request = axios.create({
  baseURL: backendConfig.url,
  headers: {
    'content-type': 'application/json',
  },
});
