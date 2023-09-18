import * as Yup from 'yup';

const SearchSchemaTask = Yup.object().shape({
  searchText: Yup.string()
    .min(1, '* Search text should a minimum of 3 characters')
    .max(16, '* Search text should a maximum of 16 characters')
    .matches(
      /^\s+|[A-ZА-ЯЁ\s]/gi,
      '* Search text should be consist of only characters'
    )
    .required('* Search text is required'),
});

export default SearchSchemaTask;
