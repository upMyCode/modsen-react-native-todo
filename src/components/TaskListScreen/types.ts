import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

export interface FooterProps {
  mTop: number;
}

export interface Task {
  id: string;
  taskTitle: string;
  taskDescription: string;
  taskImportantStatus: boolean;
  taskDateFrom: Date;
  taskDateTill: Date;
  taskTimeFrom: Date;
  taskTimeTill: Date;
}
