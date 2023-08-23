import { createDrawerNavigator } from '@react-navigation/drawer';
import MainScreen from '@screens/MainScreen';
import React from 'react';

const Drawer = createDrawerNavigator();

export default function DrawerScreens() {
  return (
    <Drawer.Navigator
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
