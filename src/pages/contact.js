import React, { useEffect, useState } from 'react';

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
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => {
    if (feedback) {
      setFeedback('');
    }
  }, [name, email, message]);

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  };

  const handleSubmitForm = async event => {
    event.preventDefault();

    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name,
          email,
          message,
        }),
      });

      setFeedback('Thank you for submitting!');
    } catch (error) {
      console.error(error);
      setFeedback(
        `Something has gone wrong. Please try again later, or email us at ${EMAIL_ADDRESS}.`,
      );
    }
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
            name='contact'
            netlify
          >
            <input type='hidden' name='form-name' value='contact' />
            <TextField
              label='Name'
              value={name}
              onChange={event => setName(event.target.value)}
            />
            <TextField
              label='Email'
              type='email'
              required
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              label='Message'
              multiline
              minRows={5}
              value={message}
              onChange={event => setMessage(event.target.value)}
            />
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
            <TransitionBox isVisible={feedback}>
              <Typography>{feedback}</Typography>
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
