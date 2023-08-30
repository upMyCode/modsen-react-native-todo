import { TaskListScreen } from '@root';
import React from 'react';

import type { NavigationProps } from './types';

export default function ToDoListScreen({ navigation }: NavigationProps) {
  return <TaskListScreen navigation={navigation} />;
}
