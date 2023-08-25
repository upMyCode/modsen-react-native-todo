import React from 'react';

import PaintedButton from './styles';
import { ButtonProps } from './types';

export default function Button({
  width,
  height,
  bgColor,
  children,
  bRadius,
  onPress,
  bColor,
  boxShadow,
}: ButtonProps) {
  return (
    <PaintedButton
      width={width}
      height={height}
      bgColor={bgColor}
      bRadius={bRadius}
      onPress={onPress}
      bColor={bColor}
      boxShadow={boxShadow}
    >
      {children}
    </PaintedButton>
  );
}
