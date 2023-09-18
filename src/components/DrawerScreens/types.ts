import { ParamListBase } from '@react-navigation/native';

export interface RootDrawerParamList extends ParamListBase {
  MainScreen: undefined;
  ToDoListScreen: { sortTag: string; searchData: string } | undefined;
}
