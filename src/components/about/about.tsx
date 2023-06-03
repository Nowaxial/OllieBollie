import { Box, Card, Text, Title } from '@mantine/core';
import React from 'react';

const About = () => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Title order={2} align="center" style={{ marginBottom: '1rem' }} fw={700}>
        Varför finns denna sidan och vem är jag?
      </Title>

      <Box style={{ marginTop: '1rem' }}>
        <Text style={{ marginBottom: '0.5rem' }}>
          Jag heter Maria och är 42 år gammal. Jag fick idéen till denna sida efter att
          min fru födde våran son som nu snart är 6 månader. Vi båda insåg att det fanns
          en massa information i form av hemsidor och appar som tog upp allt som hände
          under graviditeten. Vi insåg ganska snabbt att det finns inte lika samlad
          information om vad som händer efter att man har blivit förälder. Som
          icke-bärande förälder så insåg jag också att mycket om informationen som fanns
          oftast bara tog upp den bärandes mående och det stod ofta väldigt lite
          information om föräldraskapet som förälder.
        </Text>
        <Text style={{ marginBottom: '0.5rem' }}>Text 1</Text>
        <Text style={{ marginBottom: '0.5rem' }}>Text 2</Text>
        <Text style={{ marginBottom: '0.5rem' }}>Text 3</Text>
      </Box>
      <Box style={{ marginTop: '2rem' }}>
        <Text
          variant="h3"
          style={{ marginBottom: '0.5rem' }}
          fw={500}
          td="underline"
          fz="lg"
          italic
        >
          Sammanfattning:
        </Text>
        <Text>Ej klar</Text>
      </Box>
    </Card>
  );
};

export default About;
