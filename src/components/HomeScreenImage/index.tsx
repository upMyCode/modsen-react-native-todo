import CIRCLES_DIMENSIONS from '@constants/homeScreenImage';
import { CircleImage } from '@root';
import { BACKGROUND_IMAGE_1, BACKGROUND_IMAGE_2 } from '@src/helpers/images';
import React from 'react';

import Wrapper from './styles';

export default function HomeScreenImage() {
  return (
    <Wrapper>
      <CircleImage
        width={CIRCLES_DIMENSIONS.firstCircleWidth}
        height={CIRCLES_DIMENSIONS.firstCircleHeight}
        image={BACKGROUND_IMAGE_1}
        positionParams={{ top: -27, left: -35 }}
      />
      <CircleImage
        width={CIRCLES_DIMENSIONS.secondCircleWidth}
        height={CIRCLES_DIMENSIONS.secondCircleHeight}
        image={BACKGROUND_IMAGE_2}
        positionParams={{ top: -27, left: 112 }}
      />
    </Wrapper>
  );
}
