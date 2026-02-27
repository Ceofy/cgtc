import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const AboutUs = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        gap: 2,
        width: '100%',
      }}
    >
      <Box sx={{ width: { xs: '100%', md: '50%' } }}>
        <Typography variant='h2' noWrap>
          About Us
        </Typography>
        <Typography variant='h3'>Our Story</Typography>
      </Box>
      <Box
        sx={{
          width: { xs: '100%', md: '50%' },
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <Typography
          sx={{
            maxWidth: {
              xs: '100%',
              md: 600,
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Button>Our Mission</Button>
      </Box>
    </Box>
  );
};

export default AboutUs;
