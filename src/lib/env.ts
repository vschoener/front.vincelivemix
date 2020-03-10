import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { env } = publicRuntimeConfig;

export const isProduction = (): boolean => env === 'production';
