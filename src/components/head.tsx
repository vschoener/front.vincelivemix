import React from 'react'
import NextHead from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { meta } = publicRuntimeConfig;

const defaultDescription = meta.head.description;
const defaultURL = meta.siteUrl;
const defaultTitle  = meta.head.title;

type Props = {
  title?: string,
  description?: string,
  url?: string
}

const Head = (props: Props) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>
      {props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    </title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

    <meta property="og:url" content={props.url || defaultURL} />
    <meta property="og:title" content={props.title || ''} />
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />
    <link rel="stylesheet" href="/style.css" />
  </NextHead>
);

export default Head
