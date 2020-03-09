import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const { google } = publicRuntimeConfig;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  window.gtag('config', google.tag, {
    page_path: url,
  })
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type Event = {
  action: string,
  category: string,
  label: string,
  value: string
}

export const event = ({ action, category, label, value }: Event) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value
  });
};
