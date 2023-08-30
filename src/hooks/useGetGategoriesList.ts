import {
  CustomImg,
  PlusImg,
  ReadImg,
  SchoolImg,
  ShopImg,
  WorkImg,
  WorkOutImg,
} from '@src/assets';
import { updateCategoryList } from '@src/slices/categoriesListSlice';
import { changeStatusToActive } from '@src/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import { useEffect } from 'react';
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

export default function useGetGategoriesList() {
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
  const categoriesPreload = [
    {
      totalTask: '5',
      taskCategoryName: 'School',
    },
    {
      totalTask: '3',
      taskCategoryName: 'Work',
    },
    {
      totalTask: '12',
      taskCategoryName: 'Shop',
    },
    {
      totalTask: '2',
      taskCategoryName: 'Read',
    },
    {
      totalTask: '3',
      taskCategoryName: 'work out',
    },
  ];
  const CATIGORIES_BUTTON_LIST: CatigoryButtonProps[] = [
    {
      id: '1',
      countTasks: 5,
      icon: SchoolImg,
      textContent: 'School',
      bgColor: '#2A8899',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        console.log('School');
      },
    },
    {
      id: '2',
      countTasks: 3,
      icon: WorkImg,
      textContent: 'Work',
      bgColor: '#5EB0D2',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        console.log('Work');
      },
    },
    {
      id: '3',
      countTasks: 12,
      icon: ShopImg,
      textContent: 'Shop',
      bgColor: '#BE8972',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        console.log('Shop');
      },
    },
    {
      id: '4',
      countTasks: 2,
      icon: ReadImg,
      textContent: 'Read',
      bgColor: '#646FD4',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        console.log('Read');
      },
    },
    {
      id: '5',
      countTasks: 3,
      icon: WorkOutImg,
      textContent: 'work out',
      bgColor: '#83BC74',
      bRadius: 16,
      boxShadow: true,
      width: 100,
      height: 100,
      onPress: () => {
        console.log('Work out');
      },
    },
  ];

  useEffect(() => {
    dispatch(updateCategoryList(categoriesPreload));
  }, []);

  let id = 6;

  for (let i = 0; i < categories.length; i += 1) {
    if (CATIGORIES_BUTTON_LIST[i]) {
      CATIGORIES_BUTTON_LIST[i].countTasks = Number(categories[i].totalTask);
    } else {
      id += 1;
      CATIGORIES_BUTTON_LIST.push({
        id: id.toString(),
        countTasks: Number(categories[i].totalTask),
        icon: CustomImg,
        textContent: categories[i].taskCategoryName,
        bgColor: '#000000',
        bRadius: 16,
        boxShadow: true,
        width: 100,
        height: 100,
        onPress: () => {
          console.log('Work out');
        },
      });
    }
  }

  CATIGORIES_BUTTON_LIST.push(ADD_CATEGORIES_BUTTON);

  return { CATIGORIES_BUTTON_LIST };
}
