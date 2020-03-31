import React from 'react';

import { Layout } from '../components/layout/default';
import Subscribe from '../components/subscribe/subscribe';
import { LatestEpisodes } from '../components/latest-episodes/latest-episodes';

function HomePage() {
  return (
    <>
      <Layout>
        <Subscribe />
        <LatestEpisodes />
      </Layout>
    </>
  );
}

export default HomePage;
