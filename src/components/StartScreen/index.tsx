import MARGIN_TOP_PROCENT from '@constants/startScreenMeasurements';
import { ManagedStatusBar, StartScreenImage } from '@root';
import React from 'react';
import { Dimensions, SafeAreaView } from 'react-native';

import {
  RedirectionButton,
  RedirectionButtonContext,
  RedirectionButtonWrapper,
  TextContainer,
  TextContent,
  Title,
} from './styles';

export default function StartScreen() {
  const windowHeight = Dimensions.get('window').height;

  const marginToFromTextContainer = windowHeight * MARGIN_TOP_PROCENT;

  return (
    <SafeAreaView>
      <ManagedStatusBar />
      <StartScreenImage />
      <TextContainer marginToFromTextContainer={marginToFromTextContainer}>
        <Title>Manage your tasks</Title>
        <TextContent>
          organize, plan, and collaborate on tasks with Modsen todo list.Your
          busy life deserves this.you can manage checklist and your goal.
        </TextContent>
      </TextContainer>
      <RedirectionButtonWrapper>
        <RedirectionButton>
          <RedirectionButtonContext>Get started</RedirectionButtonContext>
        </RedirectionButton>
      </RedirectionButtonWrapper>
    </SafeAreaView>
  );
}
