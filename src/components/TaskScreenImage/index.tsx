import CIRCLES_DIMENSIONS from '@constants/homeScreenImage';
import { CircleImage } from '@root';
import {
  BACKGROUND_IMAGE_3,
  BACKGROUND_IMAGE_4,
  BACKGROUND_IMAGE_5,
} from '@src/helpers/images';
import React from 'react';

import Wrapper from './styles';

export default function TaskScreenImage() {
  return (
    <Wrapper>
      <CircleImage
        width={CIRCLES_DIMENSIONS.firstCircleWidth}
        height={CIRCLES_DIMENSIONS.firstCircleHeight}
        image={BACKGROUND_IMAGE_3}
        positionParams={{ top: -27, left: -35 }}
      />
      <CircleImage
        width={CIRCLES_DIMENSIONS.secondCircleWidth}
        height={CIRCLES_DIMENSIONS.secondCircleHeight}
        image={BACKGROUND_IMAGE_4}
        positionParams={{ top: -27, left: 112 }}
      />
      <CircleImage
        width={CIRCLES_DIMENSIONS.thirdCircleWidth}
        height={CIRCLES_DIMENSIONS.thirdCircleHeight}
        image={BACKGROUND_IMAGE_5}
        positionParams={{ top: -62, left: 93 }}
      />
    </Wrapper>
  );
}
