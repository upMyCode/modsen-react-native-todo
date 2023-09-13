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

export interface CatigoryButtonProps {
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

export default function useGetGategoriesList() {
  const { MAIN_MENU_DEFAULT_FILTER_CATEGORIES } = useGetTasksCategoriesLists();
  const navigation =
    useNavigation<StackNavigationProp<StackScreensParamList>>();
  const categories = useAppSelector((state) => {
    return state.categoriesListReducer.categories;
  });
  const dispatch = useAppDispatch();
  const ADD_CATEGORIES_BUTTON = {
    id: '6',
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

  const CATIGORIES_BUTTON_LIST: CatigoryButtonProps[] = [
    {
      id: '1',
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
      id: '2',
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
      id: '3',
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
      id: '4',
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
      id: '5',
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

  let id = 6;

  for (let i = 0; i < categories.length; i += 1) {
    const taskName = categories[i].taskCategoryName;

    id += 1;

    CATIGORIES_BUTTON_LIST.push({
      id: id.toString(),
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

  CATIGORIES_BUTTON_LIST.push(ADD_CATEGORIES_BUTTON);

  return { CATIGORIES_BUTTON_LIST };
}
