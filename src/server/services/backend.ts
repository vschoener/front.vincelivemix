import axios from 'axios';

/**
 * Real API origin (not this Next app). Default :3000 matches local backend while Next dev runs on :3001 (`pnpm dev`).
 * Vercel-hosted APIs must use `https://`; `http://` often returns DEPLOYMENT_NOT_FOUND at the edge.
 */
function normalizeBackendUrl(raw: string): string {
  const trimmed = raw.trim().replace(/\/$/, '');
  try {
    const u = new URL(trimmed);
    if (u.protocol === 'http:' && u.port === '' && u.hostname.endsWith('vincelivemix.fr')) {
      u.protocol = 'https:';
      return u.toString().replace(/\/$/, '');
    }
  } catch {
    /* keep trimmed */
  }
  return trimmed;
}

const backendUrl = normalizeBackendUrl(process.env.BACKEND_URL || 'http://localhost:3000');

export const request = axios.create({
  baseURL: backendUrl,
  headers: {
    'content-type': 'application/json',
  },
});
