import {
  Button,
  ManagedStatusBar,
  ModalContainer,
  TaskScreenImage,
} from '@root';
import { WhiteArrowImg } from '@src/assets';
import React from 'react';
import { Image, Pressable, SafeAreaView, Text, View } from 'react-native';

import { Header, Title } from './styles';
import type { NavigationProps } from './types';

export default function TaskListScreen({ navigation }: NavigationProps) {
  const ARROW_IMAGE = Image.resolveAssetSource(WhiteArrowImg).uri;
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <ManagedStatusBar />
      <TaskScreenImage />
      <SafeAreaView>
        <Header>
          <Pressable onPress={handleGoBack}>
            <Image width={32} height={32} source={{ uri: ARROW_IMAGE }} />
          </Pressable>
          <Title>Today’s task</Title>
        </Header>
      </SafeAreaView>
    </View>
  );
}
