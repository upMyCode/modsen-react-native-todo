import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import { DailyImg, DoneImg, ImportantImg } from '@src/assets';
import React from 'react';
import type { ImageSourcePropType } from 'react-native';

export interface TaskItem {
  id: string;
  mTop: number;
  textContent: string;
  img: ImageSourcePropType;
  onPress: () => void;
}

export type StackScreensParamList = {
  LoadingScreen: undefined;
  DrawerScreens: undefined;
  MainScreen: undefined;
  ToDoListScreen: { sortTag: string } | undefined;
};

export default function useGetDrawerTaskList() {
  const navigation =
    useNavigation<StackNavigationProp<StackScreensParamList>>();
  const TASK_LIST = [
    {
      id: '1',
      mTop: 21,
      textContent: 'Daily tasks',
      img: DailyImg,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'daily',
        });
      },
    },
    {
      id: '2',
      mTop: 19.5,
      textContent: 'Important tasks',
      img: ImportantImg,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'important',
        });
      },
    },
    {
      id: '3',
      mTop: 12.5,
      textContent: 'Done tasks',
      img: DoneImg,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'done',
        });
      },
    },
  ];

  return { TASK_LIST };
}
