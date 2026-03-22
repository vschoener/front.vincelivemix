const svgLoader = {
  test: /\.svg$/,
  use: ['@svgr/webpack', 'url-loader'],
};

const imageLoader = {
  test: [/\.bmp$/i, /\.gif$/i, /\.jpe?g$/i, /\.png$/i],
  loader: 'url-loader',
  options: {
    limit: 10000,
    fallback: 'file-loader',
    name: '[name].[hash:8].[ext]',
    publicPath: '/_imported-assets/',
    outputPath: '../public/_imported-assets/',
  },
};

/** Public site origin for HOST env (RSS links, SSR axios). Avoid defaulting to :3000 while `next dev` uses -p 3001 so API can stay on 3000. */
function defaultPublicHost() {
  if (process.env.HOST) return process.env.HOST;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return 'http://localhost:3001';
}

module.exports = {
  // Expose selected env vars to client bundles (replaces deprecated publicRuntimeConfig).
  env: {
    HOST: defaultPublicHost(),
    GOOGLE_TAG: process.env.GOOGLE_TAG || '',
    LANG_DEBUG: process.env.LANG_DEBUG === 'true' ? 'true' : 'false',
  },
  webpack(config) {

    config.module.rules.push(svgLoader);
    config.module.rules.push(imageLoader);

    return config;
  },
};
