import useGetTasksCategoriesLists from '@hooks/useGetTasksCategoriesLists';
import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import {
  CustomImg,
  PlusImg,
  ReadImg,
  SchoolImg,
  ShopImg,
  WorkImg,
  WorkOutImg,
} from '@src/assets';
import { changeStatusToActive } from '@src/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import type { ImageSourcePropType } from 'react-native';
import { v4 as uuidv4 } from 'uuid';

export interface CategoryButtonProps {
  id: string;
  countTasks?: number;
  icon: ImageSourcePropType;
  textContent?: string;
  bgColor: string;
  bRadius: number;
  boxShadow: boolean;
  bColor?: string;
  width: number;
  height: number;
  onPress: () => void;
}

export type StackScreensParamList = {
  LoadingScreen: undefined;
  DrawerScreens: undefined;
  MainScreen: undefined;
  ToDoListScreen: { sortTag: string; searchData: string } | undefined;
};

export default function useGetCategoriesList() {
  const { MAIN_MENU_DEFAULT_FILTER_CATEGORIES } = useGetTasksCategoriesLists();
  const navigation =
    useNavigation<StackNavigationProp<StackScreensParamList>>();
  const categories = useAppSelector((state) => {
    return state.categoriesListReducer.categories;
  });
  const dispatch = useAppDispatch();
  const ADD_CATEGORIES_BUTTON = {
    id: uuidv4(),
    icon: PlusImg,
    bgColor: '#FFFFFF',
    bRadius: 16,
    boxShadow: false,
    bColor: '#D25EB0',
    width: 100,
    height: 100,
    onPress: () => {
      dispatch(changeStatusToActive());
    },
  };

  const CATEGORIES_BUTTON_LIST: CategoryButtonProps[] = [
    {
      id: uuidv4(),
      countTasks: MAIN_MENU_DEFAULT_FILTER_CATEGORIES.schoolCategory,
      icon: SchoolImg,
      textContent: 'School',
      bgColor: '#2A8899',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'school',
          searchData: '',
        });
      },
    },
    {
      id: uuidv4(),
      countTasks: MAIN_MENU_DEFAULT_FILTER_CATEGORIES.workCategory,
      icon: WorkImg,
      textContent: 'Work',
      bgColor: '#5EB0D2',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'work',
          searchData: '',
        });
      },
    },
    {
      id: uuidv4(),
      countTasks: MAIN_MENU_DEFAULT_FILTER_CATEGORIES.shopCategory,
      icon: ShopImg,
      textContent: 'Shop',
      bgColor: '#BE8972',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'shop',
          searchData: '',
        });
      },
    },
    {
      id: uuidv4(),
      countTasks: MAIN_MENU_DEFAULT_FILTER_CATEGORIES.readCategory,
      icon: ReadImg,
      textContent: 'Read',
      bgColor: '#646FD4',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'read',
          searchData: '',
        });
      },
    },
    {
      id: uuidv4(),
      countTasks: MAIN_MENU_DEFAULT_FILTER_CATEGORIES.workOutCategory,
      icon: WorkOutImg,
      textContent: 'work out',
      bgColor: '#83BC74',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: 'workout',
          searchData: '',
        });
      },
    },
  ];

  for (let i = 0; i < categories.length; i += 1) {
    const taskName = categories[i].taskCategoryName;

    CATEGORIES_BUTTON_LIST.push({
      id: uuidv4(),
      countTasks: MAIN_MENU_DEFAULT_FILTER_CATEGORIES[taskName] ?? 0,
      icon: CustomImg,
      textContent: taskName,
      bgColor: '#000000',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        return navigation.navigate('ToDoListScreen', {
          sortTag: categories[i].taskCategoryName,
          searchData: '',
        });
      },
    });
  }

  CATEGORIES_BUTTON_LIST.push(ADD_CATEGORIES_BUTTON);

  return { CATEGORIES_BUTTON_LIST };
}
