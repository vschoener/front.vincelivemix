/** Values previously from next/config publicRuntimeConfig; env-backed fields are inlined via next.config.js `env`. */
export const publicAppConfig = {
  host: process.env.HOST || 'http://localhost:3001',
  meta: {
    head: {
      title: 'Vince live mix - Feel the vibe of the sound',
      description: `
          Passionate about the music, dj and mixing, you will find here a list of episodes mixing various styles
          from House/Electro. EDM is my favorite one but you could find other style like dubstep, progressive and so on.
        `,
    },
    frontUrl: 'www.vincelivemix.fr',
    favicon: '',
  },
  google: {
    tag: process.env.GOOGLE_TAG || '',
  },
  translate: {
    debug: process.env.LANG_DEBUG === 'true',
  },
} as const;
