[![CircleCi](https://circleci.com/gh/vschoener/front.vincelivemix/tree/master.svg?style=svg)](https://circleci.com/gh/vschoener/front.vincelivemix)

# www.vincelivemix.fr

Here is the front of this website using nextjs framework.

## Requirement

- Nodenv to set properly node version you need. A docker compose is plan.

## Installation

```bash
npm install
```

## Configuration

Take a look at the `next.config.js` to set environment variable

## Run

```bash
npm run dev
```

## Code improvement:

This project use a pure HTML template and was build quickly to be production ready. It's why you will find pure css, classname using bootstrap and a lot of js file in the public folder.

- Migrate css code to a theme and style component
- Remove unused js file and plugins
- Bundle js files if some rest

## Future plan

- Create episodes page containing all the episodes (mainly used for SEO and another presentation)
- Create contact page for the one who would me as DJ to mix for event/party.
- Create About me page
- ... To be continued
