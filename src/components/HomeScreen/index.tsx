import type { ItemDataButtons } from '@constants/homeScreenButtons';
import DATE_BUTTONS from '@constants/homeScreenButtons';
import { DrawerActions } from '@react-navigation/native';
import {
  Button,
  HomeScreenImage,
  HomeScreenSearchBar,
  ManagedStatusBar,
} from '@root';
import { BurgerMenuImg } from '@src/assets';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Image, Pressable, SafeAreaView } from 'react-native';

import {
  DateButtonsContainer,
  DateButtonsWrapper,
  DateText,
  Header,
  Main,
  TaskInfo,
  TaskInfoTextContent,
  TaskInfoTitle,
  TaskInfoTitleItem,
  Title,
} from './styles';
import type { NavigationProps } from './types';

const renderItem = ({ item }: ListRenderItemInfo<ItemDataButtons>) => {
  return (
    <Button
      width={71}
      height={27}
      bColor="#646FD4"
      bRadius={14}
      onPress={() => {
        return console.log(1);
      }}
    >
      <DateText>{item.value}</DateText>
    </Button>
  );
};
export default function HomeScreen({ navigation }: NavigationProps) {
  const BURGER_MENU_IMAGE = Image.resolveAssetSource(BurgerMenuImg).uri;

  const handleDrawerMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView>
      <ManagedStatusBar />
      <HomeScreenImage />
      <Header>
        <Pressable onPress={handleDrawerMenu}>
          <Image width={24} height={24} source={{ uri: BURGER_MENU_IMAGE }} />
        </Pressable>
        <Title>Modsen Todo list</Title>
      </Header>
      <Main>
        <TaskInfo>
          <TaskInfoTitle>
            <TaskInfoTitleItem color="#363636" fSize={20} lHeight={29.9}>
              {`you have ${' '}`}
            </TaskInfoTitleItem>
            <TaskInfoTitleItem color="#FFFFFF" fSize={24} lHeight={34.68}>
              5 you have
            </TaskInfoTitleItem>
            <TaskInfoTitleItem color="#363636" fSize={20} lHeight={29.9}>
              {`${' '} today ! `}
            </TaskInfoTitleItem>
          </TaskInfoTitle>
          <TaskInfoTextContent>Saturday,september 10,2022</TaskInfoTextContent>
        </TaskInfo>
        <HomeScreenSearchBar />
        <DateButtonsWrapper>
          <DateButtonsContainer>
            <FlatList
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              numColumns={3}
              data={DATE_BUTTONS}
              keyExtractor={({ value }) => {
                return value;
              }}
              renderItem={renderItem}
            />
          </DateButtonsContainer>
        </DateButtonsWrapper>
      </Main>
    </SafeAreaView>
  );
}
