import {
  Button,
  createStyles,
  Grid,
  Paper,
  rem,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useNavigate } from 'react-router-dom';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

function Card({ image, title, category }: CardProps) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  function getCategoryRoute(category: string): string {
    switch (category) {
      case 'Sömn':
        return '/sleep';
      case 'Föräldrarskap':
        return '/parenting';
      case 'Språk/Kommunikation':
        return '/communication';
      case 'Efter Graviditeten':
        return '/after';
      default:
        console.error(`Invalid category: ${category}`);
        return '';
    }
  }

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button
        variant="white"
        color="dark"
        onClick={() => navigate(getCategoryRoute(category))}
      >
        Läs vidare här
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://images.unsplash.com/photo-1643316385332-d5581ad4d274?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Livet förändras när man blir förälder',
    category: 'Föräldrarskap',
  },
  {
    image:
      'https://images.unsplash.com/photo-1651862959539-9df2a6a34805?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hur kan språket och kommunikationen se ut när barnet börjar förstå?',
    category: 'Språk/Kommunikation',
  },
  {
    image:
      'https://images.unsplash.com/photo-1611417042712-5777f4f8fe18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
    title: 'Hur kan sömnen se ut?',
    category: 'Sömn',
  },
  {
    image:
      'https://images.unsplash.com/photo-1518331647614-7a1f04cd34cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w400&q=80',
    title: 'Vad gör man nu?',
    category: 'Efter Graviditeten',
  },
];

export function CardsGrid() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const cols = mobile ? 12 : 6;
  const cards = data.map((item) => (
    <Grid.Col span={cols} key={item.title}>
      <Card {...item} />
    </Grid.Col>
  ));

  return <Grid gutter="lg">{cards}</Grid>;
}

const useStyles = createStyles((theme) => ({
  card: {
    height: rem(440),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: rem(32),
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.7,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));
