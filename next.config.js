module.exports = {
  serverRuntimeConfig: {
    backend: {
      url: process.env.BACKEND_URL || 'http://localhost:3000',
    }
  },
  publicRuntimeConfig: {
    env: process.env.NODE_ENV || 'development',
    host: process.env.HOST || 'http://localhost:3000',
    meta: {
      head: {
        title: 'Vince live mix',
        description: 'Feel the vibe of the sound',
      },
      siteUrl: 'www.vincelivemix.fr',
      favicon: ''
    },
    google: {
      tag: process.env.GOOGLE_TAG || '',
    },
  },
};
