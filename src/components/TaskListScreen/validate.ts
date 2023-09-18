import * as Yup from 'yup';

export const formSchemaTask = Yup.object().shape({
  modalTitle: Yup.string()
    .min(3, 'Task title should a minimum of 3 characters')
    .max(16, 'Task title should a maximum of 16 characters')
    .matches(
      /^\s+|[A-ZА-ЯЁ\s]/gi,
      'Task title should be consist of only characters'
    )
    .required('Task title is required'),
  modalTextContent: Yup.string()
    .min(3, 'Task text should a minimum of 3 characters')
    .max(40, 'Task text should a maximum of 40 characters')
    .required('Task text is required'),
});

export const formSchemaSubTask = Yup.object().shape({
  modalAddSubTaskTitle: Yup.string()
    .min(3, 'Subtask title should a minimum of 3 characters')
    .max(16, 'Subtask title should a maximum of 16 characters')
    .matches(
      /^\s+|[A-ZА-ЯЁ\s]/gi,
      'Subtask should be consist of only characters'
    )
    .required('Subtask title is required'),
});
