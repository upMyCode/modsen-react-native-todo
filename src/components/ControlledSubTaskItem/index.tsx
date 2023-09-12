import { Button } from '@root';
import { DoneStatusImg } from '@src/assets';
import { changeSubtasksList, setTaskAsDone } from '@src/slices/taskListSlice';
import { useAppDispatch } from '@src/store/hooks';
import React, { useEffect, useState } from 'react';
import { Image, View } from 'react-native';

import { ImageWrapper, SubTaskContainer, SubTaskText } from './styles';
import { SubTaskItemProps } from './types';

export default function ControlledSubTaskItem({
  subtask,
  idSubtask,
  idTask,
  task,
}: SubTaskItemProps) {
  const [isDone, setDoneStatus] = useState<boolean>(false);
  const DONE_STATUS_IMAGE = Image.resolveAssetSource(DoneStatusImg).uri;
  const dispatch = useAppDispatch();

  const handleDoneStatus = () => {
    setDoneStatus((done) => {
      return !done;
    });

    if (!isDone) {
      dispatch(changeSubtasksList({ idTask, idSubtask }));

      if (task.subTasks.length === 1) {
        dispatch(setTaskAsDone({ id: idTask, task }));
      }
    }
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
