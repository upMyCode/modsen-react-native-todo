import {
  NavigationProp,
  ParamListBase,
  RouteProp,
} from '@react-navigation/native';
import * as yup from 'yup';

export interface NavigationProps {
  navigation: NavigationProp<ParamListBase>;
  route: RouteProp<
    { params: { sortTag: string; searchData: string } },
    'params'
  >;
}

export interface FooterProps {
  mTop: number;
}

export interface SubTask {
  id: string;
  subTaskText: string;
  doneStatus: boolean;
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
  subTasks: Array<SubTask>;
  doneStatus: boolean;
}

export interface FormTask {
  modalTitle: string;
  modalTextContent: string;
}

export interface FormSubTask {
  modalAddSubTaskTitle: string;
}

export type WorkWithFormProps = (
  validationSchema: FormSchemaTask | FormSchemaSubTask,
  fields: FormTask | FormSubTask,
  setErrorHandler:
    | React.Dispatch<React.SetStateAction<object | FormTask>>
    | React.Dispatch<React.SetStateAction<object | FormSubTask>>
) => Promise<boolean>;

export type FormSchemaTask = yup.ObjectSchema<{
  modalTitle: string;
  modalTextContent: string;
}>;

export type FormSchemaSubTask = yup.ObjectSchema<{
  modalAddSubTaskTitle: string;
}>;
