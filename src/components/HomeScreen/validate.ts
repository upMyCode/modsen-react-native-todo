import * as Yup from 'yup';

const formSchema = Yup.object().shape({
  textValue: Yup.string()
    .min(3, 'Category should a minimum of 3 characters')
    .max(8, 'Category should a maximum of 8 characters')
    .matches(
      /^\s+|[A-ZА-ЯЁ\s]/gi,
      'Category should be consist of only characters'
    )
    .required('Category should be required'),
});

export default formSchema;
