import React from 'react';

import { Layout } from '../components/layout/default';
import { LatestVerticalEpisodes } from '../components/latest-episodes/latest-vertical-episodes';

function HomePage() {
  return (
    <>
      <Layout>
        <LatestVerticalEpisodes />
      </Layout>
    </>
  );
}

export default HomePage;
