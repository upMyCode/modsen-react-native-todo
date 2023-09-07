import { TaskListScreen } from '@root';
import React from 'react';

import type { NavigationProps } from './types';

export default function ToDoListScreen({ route, navigation }: NavigationProps) {
  return <TaskListScreen route={route} navigation={navigation} />;
}
