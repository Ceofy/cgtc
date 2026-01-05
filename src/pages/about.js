import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutUs = () => {
  return (
    <Layout>
      <Typography variant='h1'>About Us</Typography>
      <div>TODO: Photos</div>
      <Segment title='Our Mission' sx={{ mb: { xs: 0, md: 6 } }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Segment>
      <Segment title='Our Story'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Segment>
    </Layout>
  );
};

export default AboutUs;

const Segment = props => {
  const { title, children, sx = {} } = props;

  return (
    <Box
      sx={{
        display: { xs: 'flex', md: 'grid' },
        flexDirection: 'column',
        gridTemplateColumns: '1fr min(50%, 600px) 1fr',
        gap: 2,
        ...sx,
      }}
    >
      <Typography
        variant='h2'
        sx={{ width: { xs: '100%', md: 'min-content' } }}
      >
        {title}
      </Typography>
      <Typography>{children}</Typography>
    </Box>
  );
};

export const Head = () => <Seo title='About Us' />;
