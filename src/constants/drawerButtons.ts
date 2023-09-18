import { DailyImg, DoneImg, ImportantImg } from '@src/assets';
import type { ImageSourcePropType } from 'react-native';

export interface TaskItem {
  id: string;
  mTop: number;
  textContent: string;
  img: ImageSourcePropType;
}

export const TASK_LIST = [
  { id: '1', mTop: 21, textContent: 'Daily tasks', img: DailyImg },
  { id: '2', mTop: 19.5, textContent: 'Important tasks', img: ImportantImg },
  { id: '3', mTop: 12.5, textContent: 'Done tasks', img: DoneImg },
];
