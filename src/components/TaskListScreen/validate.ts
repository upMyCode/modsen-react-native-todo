import * as Yup from 'yup';

export const formSchemaTask = Yup.object().shape({
  modalTitle: Yup.string()
    .min(10, 'Task title should a minimum of 10 characters')
    .max(20, 'Task title should a maximum of 20 characters')
    .matches(/^[A-Za-z]+$/g, 'Task title should be consist of only characters')
    .required('Task title is required'),
  modalTextContent: Yup.string()
    .min(10, 'Task text should a minimum of 10 characters')
    .max(20, 'Task text should a maximum of 20 characters')
    .required('Task text is required'),
});

export const formSchemaSubTask = Yup.object().shape({
  modalAddSubTaskTitle: Yup.string()
    .min(10, 'Subtask title should a minimum of 10 characters')
    .max(20, 'Subtask title should a maximum of 20 characters')
    .matches(/^[A-Za-z]+$/g, 'Subtask should be consist of only characters')
    .required('Subtask title is required'),
});
