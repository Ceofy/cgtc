import React from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
} from '../resources/information';

const Footer = () => {
  return (
    <Box role='footer' sx={{ display: 'flex', flexDirection: 'column', mt: 6 }}>
      <Typography variant='h4'>Calgary Grace & Truth Church </Typography>
      <Typography variant='caption'>{PHONE_NUMBER}</Typography>
      <Typography variant='caption'>{EMAIL_ADDRESS}</Typography>
      <Typography variant='caption'>{ADDRESS_LINE_1}</Typography>
      <Typography variant='caption'>{ADDRESS_LINE_2}</Typography>
      <Typography variant='caption'>{ADDRESS_LINE_3}</Typography>
    </Box>
  );
};

export default Footer;
