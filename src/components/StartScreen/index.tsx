import MEASUREMENTS from '@constants/startScreenMeasurements';
import { ManagedStatusBar, StartScreenImage } from '@root';
import React from 'react';
import { SafeAreaView } from 'react-native';

import {
  RedirectionButton,
  RedirectionButtonContext,
  RedirectionButtonWrapper,
  TextContainer,
  TextContent,
  Title,
} from './styles';

export default function StartScreen() {
  const {
    marginToFromTitleContainer,
    marginToFromButtonContainer,
    marginToFromTextContentContainer,
  } = MEASUREMENTS;

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
        <RedirectionButton>
          <RedirectionButtonContext>Get started</RedirectionButtonContext>
        </RedirectionButton>
      </RedirectionButtonWrapper>
    </SafeAreaView>
  );
}
