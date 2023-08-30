import { Button } from '@root';
import { ArrowImg } from '@src/assets';
import React from 'react';
import { Image } from 'react-native';

import { NavigationProps } from './types';

export default function BackButton({ navigation }: NavigationProps) {
  const ARROW_IMG = Image.resolveAssetSource(ArrowImg).uri;

  const handleBackToLoadingScreen = () => {
    navigation.navigate('LoadingScreen');
  };
  return (
    <Button width={24} height={24} onPress={handleBackToLoadingScreen}>
      <Image source={{ uri: ARROW_IMG }} width={24} height={24} />
    </Button>
  );
}
