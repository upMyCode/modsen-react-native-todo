import { CircleImage } from '@root';
import { BackgroundEclipseImage1, BackgroundEclipseImage2 } from '@src/assets';
import React from 'react';
import { Image } from 'react-native';

import Wrapper from './styles';

export default function HomeScreenImage() {
  const BACKGROUND_IMAGE_1 = Image.resolveAssetSource(
    BackgroundEclipseImage1
  ).uri;
  const BACKGROUND_IMAGE_2 = Image.resolveAssetSource(
    BackgroundEclipseImage2
  ).uri;

  return (
    <Wrapper>
      <CircleImage
        width={235}
        height={235}
        image={BACKGROUND_IMAGE_1}
        positionParams={{ top: -27, left: -35 }}
      />
      <CircleImage
        width={279}
        height={279}
        image={BACKGROUND_IMAGE_2}
        positionParams={{ top: -27, left: 112 }}
      />
    </Wrapper>
  );
}
