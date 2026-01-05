import React from 'react';

import Box from '@mui/material/Box';
import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import theme from '../theme';
import Header from './header';
import Footer from './footer';

const Layout = props => {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Typography color='primary' component='span'>
        <Header />
        <Box
          role='main'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            px: { xs: 1, md: 4 },
            pb: { xs: 1, md: 4 },
          }}
        >
          {children}
        </Box>
        <Footer />
      </Typography>
    </ThemeProvider>
  );
};

export default Layout;
