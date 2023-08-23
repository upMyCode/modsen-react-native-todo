import MEASUREMENTS from '@constants/startScreenMeasurements';
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
        <Title>Manage your tasks</Title>
        <TextContent
          marginToFromTextContentContainer={marginToFromTextContentContainer}
        >
          organize, plan, and collaborate on tasks with Modsen todo list.Your
          busy life deserves this.you can manage checklist and your goal.
        </TextContent>
      </TextContainer>
      <RedirectionButtonWrapper
        marginToFromButtonContainer={marginToFromButtonContainer}
      >
        <Button
          width={240}
          height={40}
          bRadius={12}
          bgColor="#9ba3eb"
          onPress={handleRouteToMainScreen}
        >
          <RedirectionButtonContext>Get started</RedirectionButtonContext>
        </Button>
      </RedirectionButtonWrapper>
    </SafeAreaView>
  );
}
