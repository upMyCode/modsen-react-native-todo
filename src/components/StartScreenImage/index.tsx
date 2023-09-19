import MEASUREMENTS from '@constants/startScreenMeasurements';
import { BACKGROUND_IMAGE } from '@src/helpers/images';
import React from 'react';
import { Image } from 'react-native';

import Wrapper from './styles';

export default function StartScreenImage() {
  const { marginToFromImageContainer, windowWidth } = MEASUREMENTS;

  return (
    <Wrapper marginToFromImageContainer={marginToFromImageContainer}>
      <Image
        width={windowWidth}
        height={359}
        source={{ uri: BACKGROUND_IMAGE }}
      />
    </Wrapper>
  );
}
