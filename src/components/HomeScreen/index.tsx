import TextStrings from '@constants/strings';
import type { ItemDataButtons } from '@hooks/useGetDateCategoriesButtons';
import useGetDateCategoriesButtons from '@hooks/useGetDateCategoriesButtons';
import useGetTasksCategoriesLists from '@hooks/useGetTasksCategoriesLists';
import { DrawerActions } from '@react-navigation/native';
import {
  Button,
  CategoryButton,
  HomeScreenImage,
  HomeScreenSearchBar,
  ManagedStatusBar,
  ModalContainer,
} from '@root';
import getActualDate from '@src/helpers/getActualDate';
import { BURGER_MENU_IMAGE } from '@src/helpers/images';
import type { CategoryButtonProps } from '@src/hooks/useGetCategoriesList';
import useGetCategoriesList from '@src/hooks/useGetCategoriesList';
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
  TaskCategories,
  TaskCategoriesContainer,
  TaskInfo,
  TaskInfoTextContent,
  TaskInfoTitle,
  TaskInfoTitleItem,
  Title,
} from './styles';
import type { NavigationProps, ValidationErrors } from './types';
import formSchema from './validate';

export default function HomeScreen({ navigation }: NavigationProps) {
  const DATE_CATEGORY = useAppSelector((state) => {
    return state.addDateCategorySlice.dateCategory;
  });
  const { DATE_BUTTONS } = useGetDateCategoriesButtons();
  const { ALL_TASKS } = useGetTasksCategoriesLists();
  const dispatch = useAppDispatch();
  const [errors, setErrors] = useState<ValidationErrors | object>({});
  const { CATEGORIES_BUTTON_LIST } = useGetCategoriesList();
  const [textValue, onChangeText] = useState('');

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
        interface YupErrors {
          [key: string]: string;
        }

        const yupErrors: YupErrors = {};

        error.inner.forEach((innerError) => {
          if (innerError && innerError.path) {
            yupErrors[innerError.path] = innerError.message;
          }
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

  const renderItemDateCategory = ({
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

  const renderItemTaskCategory = ({
    item,
  }: ListRenderItemInfo<CategoryButtonProps>) => {
    const CATEGORY_IMAGE = Image.resolveAssetSource(item.icon).uri;

    return (
      <CategoryButton
        boxShadow={item.boxShadow}
        width={item.width}
        height={item.height}
        bColor={item.bColor}
        bRadius={item.bRadius}
        bgColor={item.bgColor}
        countTasks={item.countTasks}
        textContent={item.textContent}
        icon={CATEGORY_IMAGE}
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
          title={TextStrings.PersonalActivityTitle}
          textContent={TextStrings.PersonalActivityDescription}
          modalVisible={modalVisible}
          modalFirstHandlerText={TextStrings.ModalHandlerTitleCancel}
          modalSecondHandlerText={TextStrings.ModalHandlerTitleConfirm}
        >
          <ModalContext>
            <ModalContextInput>
              <CategoryText>{TextStrings.Category}</CategoryText>
              <CategoryInput
                editable
                value={textValue}
                onChangeText={handleChangeText}
                placeholder={TextStrings.AddCategoryPlaceholder}
                maxLength={8}
              />
            </ModalContextInput>
            {(errors as ValidationErrors).textValue && (
              <ErrorTextContent>
                {(errors as ValidationErrors).textValue}
              </ErrorTextContent>
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
        <Title>{TextStrings.HomeScreenTitle}</Title>
      </Header>
      <Main>
        <TaskInfo>
          <TaskInfoTitle>
            <TaskInfoTitleItem color="#363636" fSize={20} lHeight={29.9}>
              {TextStrings.TaskInfo}
            </TaskInfoTitleItem>
            <TaskInfoTitleItem color="#FFFFFF" fSize={24} lHeight={34.68}>
              {`${ALL_TASKS.length} ${
                ALL_TASKS.length >= 0 && ALL_TASKS.length < 2
                  ? TextStrings.Task
                  : TextStrings.Tasks
              }`}
            </TaskInfoTitleItem>
            <TaskInfoTitleItem color="#363636" fSize={20} lHeight={29.9}>
              {`${' '} ${
                DATE_CATEGORY === TextStrings.TodayCategory
                  ? TextStrings.Today
                  : DATE_CATEGORY === TextStrings.MonthCategory
                  ? TextStrings.Month
                  : DATE_CATEGORY === TextStrings.WeekCategory
                  ? TextStrings.Week
                  : TextStrings.AllTime
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
              renderItem={renderItemDateCategory}
            />
          </DateButtonsContainer>
        </DateButtonsWrapper>
        <TaskCategoriesContainer>
          <TaskCategories>
            <FlatList
              columnWrapperStyle={{
                flexWrap: 'wrap',
                flexDirection: 'row',
              }}
              scrollEnabled
              showsHorizontalScrollIndicator
              data={CATEGORIES_BUTTON_LIST}
              keyExtractor={({ id }) => {
                return id;
              }}
              numColumns={3}
              renderItem={renderItemTaskCategory}
            />
          </TaskCategories>
        </TaskCategoriesContainer>
      </Main>
    </View>
  );
}
