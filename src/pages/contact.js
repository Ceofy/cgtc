import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

import Layout from '../components/layout';
import Seo from '../components/seo';
import TextField from '../components/basicComponents/textField';

import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  ADDRESS_LINE_3,
  PHONE_NUMBER,
  EMAIL_ADDRESS,
} from '../resources/information';
import TransitionBox from '../components/basicComponents/transitionBox';

const Contact = () => {
  const [successMessageVisible, setSuccessMessageVisible] = useState(false);

  const handleSubmitForm = event => {
    event.preventDefault();

    setSuccessMessageVisible(!successMessageVisible);
  };

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          maxWidth: {
            xs: '100%',
            md: 800,
          },
        }}
      >
        <Typography
          variant='h1'
          alignSelf='start'
          sx={{ mb: { xs: 2, md: 5 } }}
        >
          Contact
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'auto 1fr',
              columnGap: 1.5,
              rowGap: 2,
              flexGrow: 1,
              mt: 1.5,
              mb: {
                xs: 3,
                md: 0,
              },
            }}
          >
            <IconSegment Icon={FmdGoodOutlinedIcon}>
              <Typography>{ADDRESS_LINE_1}</Typography>
              <Typography>{ADDRESS_LINE_2}</Typography>
              <Typography>{ADDRESS_LINE_3}</Typography>
            </IconSegment>
            <IconSegment Icon={LocalPhoneOutlinedIcon}>
              <Typography>{PHONE_NUMBER}</Typography>
            </IconSegment>
            <IconSegment Icon={EmailOutlinedIcon}>
              <Typography>{EMAIL_ADDRESS}</Typography>
            </IconSegment>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1,
              gap: 0.75,
            }}
            component='form'
            onSubmit={handleSubmitForm}
          >
            <TextField label='Name' />
            <TextField label='Email' required />
            <TextField label='Message' multiline minRows={5} />
            <Button
              sx={{
                borderRadius: 0,
                alignSelf: 'end',
                width: { xs: '100%', md: '8rem' },
              }}
              type='submit'
            >
              Send
            </Button>
            <TransitionBox isVisible={successMessageVisible}>
              <Typography>Thanks for submitting!</Typography>
            </TransitionBox>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;

const IconSegment = props => {
  const { Icon, children } = props;

  return (
    <>
      <Icon />
      <Box>{children}</Box>
    </>
  );
};

export const Head = () => <Seo title='Contact Us' />;
