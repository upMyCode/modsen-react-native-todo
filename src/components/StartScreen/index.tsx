import MEASUREMENTS from '@constants/startScreenMeasurements';
import TextStrings from '@constants/strings';
import { Button, ManagedStatusBar, StartScreenImage } from '@root';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import { Notification, Notifications } from 'react-native-notifications';

import {
  RedirectionButtonContext,
  RedirectionButtonWrapper,
  TextContainer,
  TextContent,
  Title,
} from './styles';
import type { NavigationProps } from './types';

export default function StartScreen({ navigation }: NavigationProps) {
  const {
    marginToFromTitleContainer,
    marginToFromButtonContainer,
    marginToFromTextContentContainer,
  } = MEASUREMENTS;

  const handleRouteToMainScreen = () => {
    navigation.navigate('DrawerScreens');
  };

  useEffect(() => {
    Notifications.registerRemoteNotifications();
    Notifications.events().registerNotificationReceivedForeground(
      (notification: Notification, completion) => {
        console.log(
          `Notification received in foreground: ${notification.title} : ${notification.body}`
        );
        completion({ alert: false, sound: false, badge: false });
      }
    );
    Notifications.events().registerNotificationOpened(
      (notification: Notification, completion) => {
        console.log(`Notification opened: ${notification.payload}`);
        completion();
      }
    );
    Notifications.ios.checkPermissions().then((currentPermissions) => {
      console.log(`Badges enabled: ${!!currentPermissions.badge}`);
      console.log(`Sounds enabled: ${!!currentPermissions.sound}`);
      console.log(`Alerts enabled: ${!!currentPermissions.alert}`);
      console.log(`Car Play enabled: ${!!currentPermissions.carPlay}`);
      console.log(
        `Critical Alerts enabled: ${!!currentPermissions.criticalAlert}`
      );
      console.log(`Provisional enabled: ${!!currentPermissions.provisional}`);
      console.log(
        `Provides App Notification Settings enabled: ${!!currentPermissions.providesAppNotificationSettings}`
      );
      console.log(`Announcement enabled: ${!!currentPermissions.announcement}`);
    });
  }, []);

  return (
    <SafeAreaView>
      <ManagedStatusBar />
      <StartScreenImage />
      <TextContainer marginToFromTitleContainer={marginToFromTitleContainer}>
        <Title>{TextStrings.StartScreenTitle}</Title>
        <TextContent
          marginToFromTextContentContainer={marginToFromTextContentContainer}
        >
          {TextStrings.StartScreenDescription}
        </TextContent>
      </TextContainer>
      <RedirectionButtonWrapper
        marginToFromButtonContainer={marginToFromButtonContainer}
      >
        <Button
          boxShadow={false}
          width={240}
          height={40}
          bRadius={12}
          bgColor="#9ba3eb"
          onPress={handleRouteToMainScreen}
        >
          <RedirectionButtonContext>
            {TextStrings.StartScreenRedirectionButton}
          </RedirectionButtonContext>
        </Button>
      </RedirectionButtonWrapper>
    </SafeAreaView>
  );
}
