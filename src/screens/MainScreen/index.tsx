import { HomeScreen } from '@root';
import React from 'react';

import type { NavigationProps } from './types';

export default function MainScreen({ navigation }: NavigationProps) {
  return <HomeScreen navigation={navigation} />;
}
