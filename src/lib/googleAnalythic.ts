/// <reference types="gtag.js" />
import { isProduction } from './env';
import { publicAppConfig } from './public-config';

const { google } = publicAppConfig;

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
//
export const pageview = (url: string) => {
  if (!isProduction()) {
    return;
  }

  gtag('config', google.tag, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
type Event = {
  action: string;
  category: string;
  label: string;
  value: string;
};

export const event = ({ action, category, label, value }: Event) => {
  if (!isProduction()) {
    return;
  }

  gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
  });
};
