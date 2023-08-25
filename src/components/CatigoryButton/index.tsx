import { Button } from '@root';
import React from 'react';
import { Image } from 'react-native';

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
}: CatigoryButtonProps) {
  return (
    <Wrapper>
      <Button
        width={width}
        height={height}
        bgColor={bgColor}
        bRadius={bRadius}
        bColor={bColor}
        boxShadow={boxShadow}
        onPress={() => {
          return console.log('hello catigory');
        }}
      >
        {boxShadow && (
          <CounterTaskContainer>
            <CounterTaskTextContent>{countTasks}</CounterTaskTextContent>
          </CounterTaskContainer>
        )}
        <Image source={{ uri: icon }} width={29.33} height={24} />
        {boxShadow && <TaskTextContent>{textContent}</TaskTextContent>}
      </Button>
    </Wrapper>
  );
}
