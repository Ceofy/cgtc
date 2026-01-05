import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const Sermons = () => {
  return (
    <Layout>
      <Typography variant='h1'>Sermons</Typography>
    </Layout>
  );
};

export default Sermons;

export const Head = () => <Seo title='Sermons' />;
