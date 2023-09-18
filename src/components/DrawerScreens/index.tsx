import {
  createDrawerNavigator,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { DrawerContainer } from '@root';
import MainScreen from '@screens/MainScreen';
import React from 'react';

import { RootDrawerParamList } from './types';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerScreens() {
  return (
    <Drawer.Navigator
      drawerContent={(props: DrawerContentComponentProps) => {
        return <DrawerContainer {...props} />;
      }}
      screenOptions={{ headerShown: false }}
      initialRouteName="MainScreen"
    >
      <Drawer.Screen
        options={{
          drawerItemStyle: { display: 'none' },
        }}
        name="MainScreen"
        component={MainScreen}
      />
    </Drawer.Navigator>
  );
}
