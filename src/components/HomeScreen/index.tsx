import type { CatigoryButtonProps } from '@constants/catigoryButton';
import { CATIGORIES_BUTTON_LIST } from '@constants/catigoryButton';
import type { ItemDataButtons } from '@constants/homeScreenButtons';
import DATE_BUTTONS from '@constants/homeScreenButtons';
import { DrawerActions } from '@react-navigation/native';
import {
  Button,
  CatigoryButton,
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
  TaskCatigories,
  TaskInfo,
  TaskInfoTextContent,
  TaskInfoTitle,
  TaskInfoTitleItem,
  Title,
} from './styles';
import type { NavigationProps } from './types';

const renderItemDateCatigory = ({
  item,
}: ListRenderItemInfo<ItemDataButtons>) => {
  return (
    <Button
      boxShadow={false}
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

const renderItemTaskCatigory = ({
  item,
}: ListRenderItemInfo<CatigoryButtonProps>) => {
  const CATIGORY_IMAGE = Image.resolveAssetSource(item.icon).uri;
  return (
    <CatigoryButton
      boxShadow={item.boxShadow}
      width={item.width}
      height={item.height}
      bColor={item.bColor}
      bRadius={item.bRadius}
      bgColor={item.bgColor}
      countTasks={item.countTasks}
      textContent={item.textContent}
      icon={CATIGORY_IMAGE}
    />
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
              scrollEnabled={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
              numColumns={3}
              data={DATE_BUTTONS}
              keyExtractor={({ value }) => {
                return value;
              }}
              renderItem={renderItemDateCatigory}
            />
          </DateButtonsContainer>
        </DateButtonsWrapper>
        <TaskCatigories>
          <FlatList
            columnWrapperStyle={{
              flexWrap: 'wrap',
            }}
            scrollEnabled={false}
            data={CATIGORIES_BUTTON_LIST}
            numColumns={6}
            keyExtractor={({ id }) => {
              return id;
            }}
            renderItem={renderItemTaskCatigory}
          />
        </TaskCatigories>
      </Main>
    </SafeAreaView>
  );
}
