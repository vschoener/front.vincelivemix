import React from "react";
import getConfig from "next/config";

function GoogleTag() {
  const { publicRuntimeConfig: { google } } = getConfig();

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
