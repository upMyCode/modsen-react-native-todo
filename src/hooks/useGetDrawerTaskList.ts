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
  ToDoListScreen: undefined;
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
        return navigation.navigate('ToDoListScreen');
      },
    },
    {
      id: '2',
      mTop: 19.5,
      textContent: 'Important tasks',
      img: ImportantImg,
      onPress: () => {
        return console.log(1);
      },
    },
    {
      id: '3',
      mTop: 12.5,
      textContent: 'Done tasks',
      img: DoneImg,
      onPress: () => {
        return console.log(1);
      },
    },
  ];

  return { TASK_LIST };
}
