import { StartScreen } from '@root';
import React from 'react';
import { SafeAreaView } from 'react-native';

import type { NavigationProps } from './types';

export default function LoadingScreen({ navigation }: NavigationProps) {
  return (
    <SafeAreaView>
      <StartScreen navigation={navigation} />
    </SafeAreaView>
  );
}
