import MEASUREMENTS from '@constants/startScreenMeasurements';
import TextStrings from '@constants/strings';
import { Button, ManagedStatusBar, StartScreenImage } from '@root';
import React from 'react';
import { SafeAreaView } from 'react-native';

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
