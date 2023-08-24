import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DrawerScreens } from '@root';
import LoadingScreen from '@screens/LoadingScreen';
import React from 'react';

import type { StackScreensParamList } from './types';

const Stack = createStackNavigator<StackScreensParamList>();

export default function StackScreens() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="LoadingScreen"
      >
        <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
        <Stack.Screen name="DrawerScreens" component={DrawerScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
