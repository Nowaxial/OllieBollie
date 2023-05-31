/* eslint-disable jsx-a11y/media-has-caption */
import { Box } from '@mantine/core';

import TAAK1 from '/src/assets/videos/Teckenspråk Babytecken del 1.mp4';
import TAAK2 from '/src/assets/videos/Teckenspråk Babytecken del 2.mp4';

const VideoTAKK = () => {
  return (
    <>
      <Box style={{ marginTop: '1rem' }}>
        <video src={TAAK1} controls loop style={{ width: '100%', height: 'auto' }} />
      </Box>
      <Box>
        <video src={TAAK2} controls loop style={{ width: '100%', height: 'auto' }} />
      </Box>
    </>
  );
};

export default VideoTAKK;
