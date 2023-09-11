import type { ItemDataButtons } from '@hooks/useGetDateCategoriesButtons';
import useGetDateCategoriesButtons from '@hooks/useGetDateCategoriesButtons';
import useGetTasksCategoriesLists from '@hooks/useGetTasksCategoriesLists';
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
import * as Yup from 'yup';

import {
  CategoryInput,
  CategoryText,
  DateButtonsContainer,
  DateButtonsWrapper,
  DateText,
  ErrorTextContent,
  Header,
  Main,
  ModalContext,
  ModalContextInput,
  TaskCategoriesContainer,
  TaskCatigories,
  TaskInfo,
  TaskInfoTextContent,
  TaskInfoTitle,
  TaskInfoTitleItem,
  Title,
} from './styles';
import type { NavigationProps } from './types';
import formSchema from './validate';

export default function HomeScreen({ navigation }: NavigationProps) {
  const DATE_CATEGORY = useAppSelector((state) => {
    return state.addDateCategorySlice.dateCategory;
  });
  const { DATE_BUTTONS } = useGetDateCategoriesButtons();
  const { ALL_TASKS } = useGetTasksCategoriesLists();
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState({});
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

  const workWithForm = async () => {
    let status = true;
    try {
      await formSchema.validate({ textValue }, { abortEarly: false });

      setErrors({});

      status = true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const yupErrors = {};
        error.inner.forEach((innerError) => {
          yupErrors[innerError.path] = innerError.message;
        });

        status = false;
        setErrors(yupErrors);
      }
    }

    return status;
  };

  const modalSecondHandler = async () => {
    const status = await workWithForm();

    if (status) {
      dispatch(addNewCategory({ totalTask: '', taskCategoryName: textValue }));
      dispatch(changeStatusToDisable());
      onChangeText('');
    }
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
        onPress={item.onPress}
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
            <ModalContextInput>
              <CategoryText>Category:</CategoryText>
              <CategoryInput
                editable
                value={textValue}
                onChangeText={handleChangeText}
                placeholder="Add your category"
                maxLength={8}
              />
            </ModalContextInput>
            {errors.textValue && (
              <ErrorTextContent>{errors.textValue}</ErrorTextContent>
            )}
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
              {`${ALL_TASKS.length} ${
                ALL_TASKS.length >= 0 && ALL_TASKS.length < 2
                  ? 'task'
                  : 'tasks`s'
              }`}
            </TaskInfoTitleItem>
            <TaskInfoTitleItem color="#363636" fSize={20} lHeight={29.9}>
              {`${' '} ${
                DATE_CATEGORY === 'Today'
                  ? 'today'
                  : DATE_CATEGORY === 'Month'
                  ? 'in this month'
                  : DATE_CATEGORY === 'Week'
                  ? 'in this week'
                  : 'in all time'
              } ! `}
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
