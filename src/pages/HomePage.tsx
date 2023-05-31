import { Card, Container, Text, Title } from '@mantine/core';

import { CardsGrid } from '../components/CardGrid';

const HomePage = () => {
  return (
    <Container size="md" style={{ marginTop: '2rem' }}>
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Title align="center" order={2} style={{ marginBottom: '2rem' }}>
          Hur går dina tankar i föräldraskapet?
        </Title>
        <Container size="md" style={{ marginTop: '1rem' }}>
          <Text style={{ marginBottom: '1rem' }}>
            Att vara förälder är både fantastiskt och svårt. Man tänker på många olika
            saker. Man är glad och förvånad över att ha skapat en ny människa och älskar
            sitt barn väldigt mycket. Men man kan också känna oro och tvivel. Man känner
            ansvar för att ge sitt barn en bra uppväxt och vara en trygg person i deras
            liv. Man funderar över allt från vardagliga beslut till större frågor om hur
            man uppfostrar sitt barn och hjälper dem att bli självständiga. Föräldraskapet
            handlar om att utveckla sina egna tankar och hitta balansen mellan att stödja
            sitt barn och låta dem utforska världen själva. Tankarna i föräldraskapet är
            fyllda av glädje, kärlek och tacksamhet, men också av svårigheter och frågor.
            Föräldrar gör sitt bästa för sina barn och vill se dem lyckas och vara
            lyckliga.
          </Text>
          <Text style={{ marginBottom: '1rem' }}>
            Här har jag samlat ihop lite information som kan vara nyttigt, hoppas du
            hittar något som passar dig!
          </Text>
        </Container>
        <CardsGrid />
      </Card>
    </Container>
  );
};
export default HomePage;
