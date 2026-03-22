import axios from 'axios';

const backendUrl = process.env.BACKEND_URL || 'http://localhost:3000';

export const request = axios.create({
  baseURL: backendUrl,
  headers: {
    'content-type': 'application/json',
  },
});
