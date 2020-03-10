module.exports = {
  publicRuntimeConfig: {
    env: process.env.NODE_ENV || 'development',
    meta: {
      head: {
        title: 'Vince live mix',
        description: 'Feel the vibe of the sound',
      },
      siteUrl: 'www.vincelivemix.fr',
      favicon: ''
    },
    google: {
      tag: process.env.GOOGLE_TAG || ''
    },
  },
};
