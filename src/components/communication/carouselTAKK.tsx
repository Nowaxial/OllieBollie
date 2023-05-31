import { Card, CardSection, Col, Grid, Image, Text } from '@mantine/core';

const images = [
  {
    src: 'src/assets/takk/bajsa.png',
    alt: 'Random unsplash image 1',
    caption: 'Bajsa',
  },
  {
    src: 'src/assets/takk/blöja.png',
    alt: 'Random unsplash image 1',
    caption: 'Blöja',
  },
  {
    src: 'src/assets/takk/föräldrar.png',
    alt: 'Random unsplash image 1',
    caption: 'Föräldrar',
  },
  {
    src: 'src/assets/takk/kissa.png',
    alt: 'Random unsplash image 1',
    caption: 'Kissa',
  },
  {
    src: 'src/assets/takk/leka.png',
    alt: 'Random unsplash image 1',
    caption: 'Leka',
  },
  {
    src: 'src/assets/takk/nalle.png',
    alt: 'Random unsplash image 1',
    caption: 'Nalle',
  },
  {
    src: 'src/assets/takk/napp.png',
    alt: 'Random unsplash image 1',
    caption: 'Napp',
  },
  {
    src: 'src/assets/takk/nappflaska.png',
    alt: 'Random unsplash image 1',
    caption: 'Nappflaska',
  },
  {
    src: 'src/assets/takk/sitta.png',
    alt: 'Random unsplash image 1',
    caption: 'Sitta',
  },
  {
    src: 'src/assets/takk/sova.png',
    alt: 'Random unsplash image 1',
    caption: 'Sova',
  },
  {
    src: 'src/assets/takk/äta.png',
    alt: 'Random unsplash image 1',
    caption: 'Äta',
  },
];

const CarouselTAKK = () => {
  return (
    <Grid gutter="lg">
      {images.map((image) => (
        <Col span={3} key={image.src}>
          <Card shadow="xs">
            <Image src={image.src} alt={image.alt} />
            <CardSection>
              <Text>{image.caption}</Text>
            </CardSection>
          </Card>
        </Col>
      ))}
    </Grid>
  );
};

export default CarouselTAKK;
