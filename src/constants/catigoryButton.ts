import {
  PlusImg,
  ReadImg,
  SchoolImg,
  ShopImg,
  WorkImg,
  WorkOutImg,
} from '@src/assets';
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
}

export const CATIGORIES_BUTTON_LIST: CatigoryButtonProps[] = [
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
  },
  {
    id: '3',
    countTasks: 12,
    icon: ShopImg,
    textContent: 'School',
    bgColor: '#BE8972',
    bRadius: 16,
    boxShadow: true,
    width: 100,
    height: 100,
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
  },
  {
    id: '6',
    icon: PlusImg,
    bgColor: '#FFFFFF',
    bRadius: 16,
    boxShadow: false,
    bColor: '#D25EB0',
    width: 100,
    height: 100,
  },
];
