import { Button } from '@root';
import { DoneStatusImg } from '@src/assets';
import React, { useState } from 'react';
import { Image, View } from 'react-native';

import { ImageWrapper, SubTaskContainer, SubTaskText } from './styles';
import { SubTaskItemProps } from './types';

export default function SubTaskItem({ subtask }: SubTaskItemProps) {
  const [isDone, setDoneStatus] = useState<boolean>(false);
  const DONE_STATUS_IMAGE = Image.resolveAssetSource(DoneStatusImg).uri;

  const handleDoneStatus = () => {
    setDoneStatus((done) => {
      return !done;
    });
  };

  return (
    <SubTaskContainer>
      <ImageWrapper>
        <Button
          width={24}
          height={24}
          bRadius={24}
          bColor="#E7E7E7"
          onPress={handleDoneStatus}
        >
          {isDone ? (
            <Image width={14} height={10} source={{ uri: DONE_STATUS_IMAGE }} />
          ) : (
            <View />
          )}
        </Button>
      </ImageWrapper>
      <SubTaskText>{subtask}</SubTaskText>
    </SubTaskContainer>
  );
}
