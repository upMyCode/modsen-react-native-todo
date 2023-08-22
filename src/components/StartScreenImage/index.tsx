import BackgroundImg from '@src/assets';
import React from 'react';
import { Dimensions, Image } from 'react-native';

import Wrapper from './styles';

export default function StartScreenImage() {
  const BACKGROUND_IMAGE = Image.resolveAssetSource(BackgroundImg).uri;
  const screenDimensions = Dimensions.get('window');

  return (
    <Wrapper>
      <Image
        width={screenDimensions.width}
        height={359}
        source={{ uri: BACKGROUND_IMAGE }}
      />
    </Wrapper>
  );
}
