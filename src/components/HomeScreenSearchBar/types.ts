import * as yup from 'yup';

export type StackScreensParamList = {
  LoadingScreen: undefined;
  DrawerScreens: undefined;
  MainScreen: undefined;
  ToDoListScreen: { sortTag: string; searchData: string } | undefined;
};

export interface SearchTask {
  searchText: string;
}

export type SearchSchemaTask = yup.ObjectSchema<{
  searchText: string;
}>;

export type WorkWithFormProps = (
  validationSchema: SearchSchemaTask,
  fields: SearchTask,
  setErrorHandler: React.Dispatch<React.SetStateAction<object | SearchTask>>
) => Promise<boolean>;
