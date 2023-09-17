import { Button } from '@root';
import React from 'react';
import { Dimensions, Image } from 'react-native';

import {
  CounterTaskContainer,
  CounterTaskTextContent,
  TaskTextContent,
  Wrapper,
} from './styles';
import type { CatigoryButtonProps } from './types';

export default function CatigoryButton({
  countTasks,
  icon,
  textContent,
  bgColor,
  bRadius,
  bColor,
  boxShadow,
  width,
  height,
  onPress,
  isThird,
}: CatigoryButtonProps) {
  const WINDOW_HEIGHT = Dimensions.get('window').height;
  const WINDOW_WIDTH = Dimensions.get('window').width;
  const isBigDevice = WINDOW_HEIGHT / WINDOW_WIDTH >= 2;

  return (
    <Wrapper isThird={isThird} isBigDevice={isBigDevice}>
      <Button
        width={width}
        height={height}
        bgColor={bgColor}
        bRadius={bRadius}
        bColor={bColor}
        boxShadow={boxShadow}
        onPress={onPress}
      >
        {boxShadow && (
          <CounterTaskContainer>
            <CounterTaskTextContent>{countTasks}</CounterTaskTextContent>
          </CounterTaskContainer>
        )}
        <Image source={{ uri: icon }} width={32} height={32} />
        {boxShadow && <TaskTextContent>{textContent}</TaskTextContent>}
      </Button>
    </Wrapper>
  );
}
