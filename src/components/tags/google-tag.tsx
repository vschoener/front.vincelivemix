import React from "react";
import getConfig from "next/config";

import { isProduction } from "../../lib/env";

function GoogleTag() {
  const { publicRuntimeConfig: { google } } = getConfig();

  if (!isProduction()) {
    return <></>
  }

  return (
    <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${google.tag}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${google.tag}', {
          page_path: window.location.pathname,
        });
          `,
      }}
    />
  </>
  )
}

export default GoogleTag
