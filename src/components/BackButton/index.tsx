import { DrawerContentComponentProps } from '@react-navigation/drawer';
import { Button } from '@root';
import { ARROW_IMG } from '@src/helpers/images';
import React from 'react';
import { Image } from 'react-native';

export default function BackButton({
  navigation,
}: DrawerContentComponentProps) {
  const handleBackToLoadingScreen = () => {
    navigation.navigate('LoadingScreen');
  };
  return (
    <Button width={24} height={24} onPress={handleBackToLoadingScreen}>
      <Image source={{ uri: ARROW_IMG }} width={24} height={24} />
    </Button>
  );
}
