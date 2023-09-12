import React from 'react';

import {
  ImageWrapper,
  SubTaskContainer,
  SubTaskMarker,
  SubTaskText,
} from './styles';
import { SubTaskItemProps } from './types';

export default function SubTaskItem({ subtask }: SubTaskItemProps) {
  return (
    <SubTaskContainer>
      <ImageWrapper>
        <SubTaskMarker />
      </ImageWrapper>
      <SubTaskText>{subtask}</SubTaskText>
    </SubTaskContainer>
  );
}
