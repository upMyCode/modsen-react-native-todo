import { NavigationProp, ParamListBase } from '@react-navigation/native';

export interface TaskInfoTitleItemProps {
  color: string;
  fSize: number;
  lHeight: number;
}

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
}

export interface ValidationErrors {
  textValue: string;
}
