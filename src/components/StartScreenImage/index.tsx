import MEASUREMENTS from '@constants/startScreenMeasurements';
import BackgroundImg from '@src/assets';
import React from 'react';
import { Image } from 'react-native';

import Wrapper from './styles';

export default function StartScreenImage() {
  const BACKGROUND_IMAGE = Image.resolveAssetSource(BackgroundImg).uri;
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
