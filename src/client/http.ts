import axios from 'axios';
import getConfig from 'next/config';

const {
  publicRuntimeConfig: { host },
} = getConfig();

export const request = axios.create({
  baseURL: process.browser ? window.location.origin : host,
});
