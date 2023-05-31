import { Container } from '@mantine/core';
import React from 'react';

import About from '../components/about/about';

const AboutPage = () => {
  return (
    <Container size="md" style={{ marginTop: '2rem' }}>
      <About />
    </Container>
  );
};

export default AboutPage;
