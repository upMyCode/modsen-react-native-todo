import { ParamListBase } from '@react-navigation/native';

export interface MyStackParamList extends ParamListBase {
  LoadingScreen: undefined;
  DrawerScreens: undefined;
  MainScreen: undefined;
  ToDoListScreen: { sortTag: string; searchData: string };
}
