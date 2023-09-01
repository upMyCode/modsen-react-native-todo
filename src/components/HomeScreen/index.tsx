import type { ItemDataButtons } from '@constants/homeScreenButtons';
import DATE_BUTTONS from '@constants/homeScreenButtons';
import { DrawerActions } from '@react-navigation/native';
import {
  Button,
  CatigoryButton,
  HomeScreenImage,
  HomeScreenSearchBar,
  ManagedStatusBar,
  ModalContainer,
} from '@root';
import { BurgerMenuImg } from '@src/assets';
import getActualDate from '@src/helpers/getActualDate';
import type { CatigoryButtonProps } from '@src/hooks/useGetGategoriesList';
import useGetGategoriesList from '@src/hooks/useGetGategoriesList';
import { addNewCategory } from '@src/slices/categoriesListSlice';
import { changeStatusToDisable } from '@src/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React, { useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Image, Pressable, View } from 'react-native';

import {
  CategoryInput,
  CategoryText,
  DateButtonsContainer,
  DateButtonsWrapper,
  DateText,
  Header,
  Main,
  ModalContext,
  TaskCategoriesContainer,
  TaskCatigories,
  TaskInfo,
  TaskInfoTextContent,
  TaskInfoTitle,
  TaskInfoTitleItem,
  Title,
} from './styles';
import type { NavigationProps } from './types';

export default function HomeScreen({ navigation }: NavigationProps) {
  const dispatch = useAppDispatch();
  const { CATIGORIES_BUTTON_LIST } = useGetGategoriesList();
  const [textValue, onChangeText] = useState('');
  const BURGER_MENU_IMAGE = Image.resolveAssetSource(BurgerMenuImg).uri;
  const modalVisible = useAppSelector((state) => {
    return state.modalStatusReducer.status;
  });
  const handleDrawerMenu = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  const actualDate = getActualDate();

  const handleChangeText = (text: string) => {
    onChangeText(text);
  };

  const modalSecondHandler = () => {
    dispatch(addNewCategory({ totalTask: '', taskCategoryName: textValue }));
    dispatch(changeStatusToDisable());
    onChangeText('');
  };

  const modalFirstHandler = () => {
    dispatch(changeStatusToDisable());
    onChangeText('');
  };

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
        onPress={item.onPress}
      />
    );
  };

  return (
    <View>
      {modalVisible && (
        <ModalContainer
          modalFirstHandler={modalFirstHandler}
          modalSecondHandler={modalSecondHandler}
          title="Add your personal activity"
          textContent="You can add tour personal activity ticket"
          modalVisible={modalVisible}
          modalFirstHandlerText="Cancel"
          modalSecondHandlerText="Ok"
        >
          <ModalContext>
            <CategoryText>Category:</CategoryText>
            <CategoryInput
              editable
              value={textValue}
              onChangeText={handleChangeText}
              placeholder="Add your category"
              maxLength={8}
            />
          </ModalContext>
        </ModalContainer>
      )}
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
          <TaskInfoTextContent>{actualDate}</TaskInfoTextContent>
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
        <TaskCategoriesContainer>
          <TaskCatigories>
            <FlatList
              columnWrapperStyle={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
              scrollEnabled
              contentContainerStyle={{}}
              showsHorizontalScrollIndicator
              data={CATIGORIES_BUTTON_LIST}
              keyExtractor={({ id }) => {
                return id;
              }}
              numColumns={3}
              renderItem={renderItemTaskCatigory}
            />
          </TaskCatigories>
        </TaskCategoriesContainer>
      </Main>
    </View>
  );
}
