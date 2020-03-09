module.exports = {
  publicRuntimeConfig: {
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
