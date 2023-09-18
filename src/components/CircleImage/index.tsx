import React from 'react';

import Circle from './styles';
import type { CircleImageProps } from './types';

export default function CircleImage({
  width,
  height,
  image,
  positionParams,
}: CircleImageProps) {
  return (
    <Circle
      width={width}
      height={height}
      source={{ uri: image }}
      positionParams={positionParams}
    />
  );
}
