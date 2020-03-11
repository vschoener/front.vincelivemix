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
        title: 'Vince live mix - Feel the vibe of the sound',
        description: `
          Passionate about the music, dj and mixing, you will find here a list of episodes mixing various styles
          from House/Electro. EDM is my favorite one but you could find other style like dubstep, progressive and so on.
        `,
      },
      frontUrl: 'www.vincelivemix.fr',
      favicon: ''
    },
    google: {
      tag: process.env.GOOGLE_TAG || '',
    },
  },
};
