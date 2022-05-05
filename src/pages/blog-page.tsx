import React from 'react';
import {
  Typography, Container,
} from '@mui/material';
import Section from '../components/section';
import SwiperComponent from '../components/swiper/swiper';

const BlogPage: React.FC = () => (
  <Container>
    <Typography
      component="h1"
      variant="h3"
      sx={{
        color: 'blue.main',
      }}
    >
      Blog page
    </Typography>
    <Section sx={{ height: '400px' }}>
      <SwiperComponent />
    </Section>
  </Container>
);

export default BlogPage;
