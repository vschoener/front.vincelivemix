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

module.exports = {
  // Expose selected env vars to client bundles (replaces deprecated publicRuntimeConfig).
  env: {
    HOST: process.env.HOST || 'http://localhost:3000',
    GOOGLE_TAG: process.env.GOOGLE_TAG || '',
    LANG_DEBUG: process.env.LANG_DEBUG === 'true' ? 'true' : 'false',
  },
  webpack(config) {

    config.module.rules.push(svgLoader);
    config.module.rules.push(imageLoader);

    return config;
  },
};
