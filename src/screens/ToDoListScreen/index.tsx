import { StackScreenProps } from '@react-navigation/stack';
import { TaskListScreen } from '@root';
import React from 'react';

import type { MyStackParamList } from './types';

export default function ToDoListScreen({
  route,
  navigation,
}: StackScreenProps<MyStackParamList, 'ToDoListScreen'>) {
  return <TaskListScreen route={route} navigation={navigation} />;
}
