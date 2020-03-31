import { request } from './backend';

export async function getRss(): Promise<string> {
  try {
    const { data } = await request.get('/api/rss');
    return data;
  } catch (err) {
    throw new DOMException('Error getting Rss');
  }
}
