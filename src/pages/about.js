import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Layout from '../components/layout';
import Seo from '../components/seo';

const AboutUs = () => {
  return (
    <Layout>
      <Typography variant='h1'>About Us 关于我们</Typography>
      <div>TODO: Photos</div>
      <Segment title='Our Mission 我们的使命' sx={{ mb: { xs: 0, md: 6 } }}>
教导会众遵循圣经爱神和爱人的诫命，並且装备信徒共同完成耶穌基督所赋予我们
传福音的大使命。並籍圣经发展基督徒团契，在耶穌基督的恩典和真理中成长。
      </Segment>
      <Segment title='Our Story 我们的故事'>
卡尔加里恩理教会（CGTC）由一群蒙上帝呼召出來的华人基督徒移民于2012年创立。位於卡成南
部的fish creek ，是个信仰纯正，不属于任何宗派的独立教会。
我们信仰的宗旨是彰显神的爱/恩典和真理。我们以圣经真理为根基，传扬基督里的救恩，引导人
们认识生命的真谛，享受永生的真谛。 并在日常生活中以顺服基督来荣耀神，靠着圣灵的能力，
为主作见证。
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
