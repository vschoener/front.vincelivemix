import getConfig from 'next/config';
import axios from 'axios';

const { serverRuntimeConfig: { backend: backendConfig } } = getConfig();

const request = axios.create({
  baseURL: backendConfig.url,
  headers: {
    'content-type': 'application/json',
  },
});

export async function getRss(): Promise<string> {
  try {
    const { data } = await request.get(`/api/rss`);
    return data;
  } catch (err) {
    throw new DOMException('Error getting Rss');
  }
}
