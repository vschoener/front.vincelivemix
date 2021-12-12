import React from 'react';

import { Layout } from '../components/layout/default';
import Subscribe from '../components/subscribe/subscribe';
import { LatestBlockEpisodes } from '../components/latest-episodes/latest-block-episodes';

const HomePage = () => (
  <Layout>
    <Subscribe />
    <LatestBlockEpisodes />
  </Layout>
);

export default HomePage;
