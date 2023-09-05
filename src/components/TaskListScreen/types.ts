import { NavigationProp, ParamListBase } from '@react-navigation/native';
import * as yup from 'yup';

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

export interface SubTask {
  id: string;
  subTaskText: string;
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
