import { Avatar } from '@mantine/core';
import { Text } from '@mantine/core';
import React from 'react';
import { Link } from 'react-router-dom';

import OlliBollieLogoImage from '../assets/OlliBollie.jpg';

const OlliBollieLogo = () => {
  return (
    <>
      <Link to="/">
        <Avatar src={OlliBollieLogoImage} size={'md'} radius={'sm'} />
      </Link>
      {/* <Text size={'lg'} mt={'md'}> */}
      {/* <Text
        component="span"
        align="center"
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        size="xl"
        weight={700}
        style={{ fontFamily: 'Dosis, sans-serif', verticalAlign: 'middle' }}
      >
        Oh!Baby
      </Text> */}
    </>
  );
};

export default OlliBollieLogo;
