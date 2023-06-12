/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Burger,
  Center,
  Container,
  createStyles,
  Group,
  Header,
  Paper,
  rem,
  Transition,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBabyCarriage,
  IconHealthRecognition,
  IconHome,
  IconInfoSquare,
  IconVocabulary,
  IconZzz,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const HEADER_HEIGHT = rem(40);

const links = [
  { link: '/', label: 'Hem', icon: IconHome },
  { link: '/parenting', label: 'Föräldraskap', icon: IconBabyCarriage },
  { link: '/communication', label: 'Språk/Kommunikation', icon: IconVocabulary },
  { link: '/sleep', label: 'Sömn', icon: IconZzz },
  { link: '/after', label: 'Efter Graviditeten', icon: IconHealthRecognition },
  { link: '/about', label: 'Om', icon: IconInfoSquare },
];

const HeaderResponsive = () => {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate();

  const handleLinkClick = (event, link) => {
    event.preventDefault();
    navigate(link);
    setActive(link);
    close();
  };

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => handleLinkClick(event, link.link)}
    >
      <span className={classes.icon}>{React.createElement(link.icon)}</span>
      {link.label}
    </Link>
  ));

  return (
    <>
      <Header height={HEADER_HEIGHT} mb={20} className={classes.root} withBorder={false}>
        <Container size={'lg'}>
          <div className={classes.burgerContainer}>
            <Burger
              opened={opened}
              onClick={toggle}
              className={classes.burger}
              size="lg"
            />
          </div>
          <Center
            style={{ backgroundColor: scrollPosition > 0 ? '#D3D3D3' : 'transparent' }}
          >
            <Group className={classes.links}>{items}</Group>
          </Center>
          <Transition transition="pop-top-right" duration={200} mounted={opened}>
            {(styles) => (
              <Paper className={classes.dropdown} withBorder style={styles}>
                {items}
              </Paper>
            )}
          </Transition>
        </Container>
      </Header>
    </>
  );
};

export default React.memo(HeaderResponsive);

const useStyles = createStyles((theme) => ({
  root: {
    position: 'sticky',
    zIndex: 1,
  },

  icon: {
    marginRight: theme.spacing.xs,
    verticalAlign: 'middle',
  },
  sticky: {
    position: 'sticky',
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'start',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  burgerContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  burger: {
    marginRight: theme.spacing.md,
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.md,
    fontWeight: 700,
    transition: 'background-color 100ms ease-in-out',

    '&:hover': {
      /* color: theme.colorScheme === 'dark' ? theme.white : theme.black, */
      color: theme.colors.indigo,
      textDecoration: 'none',
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    color: theme.colors.yellow,
    /* borderBottomColor:
      theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 1 : 5], */
  },
}));
