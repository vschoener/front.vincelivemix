import React from 'react'
import NextHead from 'next/head';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { meta } = publicRuntimeConfig;

const defaultDescription = meta.head.description;
const defaultURL = meta.frontUrl;
const defaultTitle = meta.head.title;

type Props = {
  title?: string,
  description?: string,
  url?: string
}

const Head = (props: Props) => (
  <NextHead>
    <meta charSet="UTF-8"/>
    <meta lang="en" />
    <title>
      {props.title ? `${props.title} - ${defaultTitle}` : defaultTitle}
    </title>
    <meta
      name="description"
      content={props.description || defaultDescription}
    />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

    <meta property="og:url" content={props.url || defaultURL}/>
    <meta property="og:title" content={props.title || ''}/>
    <meta
      property="og:description"
      content={props.description || defaultDescription}
    />

    <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png"/>
    <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-icon-60x60.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-icon-72x72.png"/>
    <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-icon-76x76.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-icon-114x114.png"/>
    <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-icon-120x120.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-icon-144x144.png"/>
    <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-icon-152x152.png"/>
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon-180x180.png"/>
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon/android-icon-192x192.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon/favicon-96x96.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
    <link rel="manifest" href="/favicon/manifest.json"/>
    <meta name="msapplication-TileColor" content="#ffffff"/>
    <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
    <meta name="theme-color" content="#ffffff"/>
  </NextHead>
);

export default Head
