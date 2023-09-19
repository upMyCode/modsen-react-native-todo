import TextStrings from '@constants/strings';
import { useNavigation } from '@react-navigation/core';
import type { StackNavigationProp } from '@react-navigation/stack';
import { SEARCH_IMAGE } from '@src/helpers/images';
import React, { useState } from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import * as Yup from 'yup';

import {
  ErrorContentWrapper,
  ErrorTextContent,
  SearchBar,
  SearchImage,
  Wrapper,
} from './styles';
import type {
  SearchTask,
  StackScreensParamList,
  WorkWithFormProps,
} from './types';
import SearchSchemaTask from './validate';

export default function HomeScreenSearchBar() {
  const [searchText, onChangeSearchText] = useState('');

  const navigation =
    useNavigation<StackNavigationProp<StackScreensParamList>>();
  const [searchbarErrors, setSearchbarErrors] = useState<object | SearchTask>(
    {}
  );

  const workWithForm: WorkWithFormProps = async (
    validationSchema,
    fields,
    setErrorHandler
  ) => {
    let status = true;

    try {
      await validationSchema.validate(fields, { abortEarly: false });

      setErrorHandler({});

      status = true;
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        interface YupErrors {
          [key: string]: string;
        }
        const yupErrors: YupErrors = {};
        error.inner.forEach((innerError) => {
          if (innerError && innerError.path) {
            yupErrors[innerError.path] = innerError.message;
          }
        });

        status = false;
        setErrorHandler(yupErrors);
      }
    }

    return status;
  };

  const handleSubmit = async () => {
    const status = await workWithForm(
      SearchSchemaTask,
      {
        searchText,
      },
      setSearchbarErrors
    );

    if (status) {
      navigation.navigate('ToDoListScreen', {
        sortTag: 'search',
        searchData: searchText,
      });
    }
  };

  const handleChangeText = async (text: string) => {
    onChangeSearchText(text);

    await workWithForm(
      SearchSchemaTask,
      {
        searchText,
      },
      setSearchbarErrors
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback
        onPress={() => {
          return Keyboard.dismiss();
        }}
      >
        <Wrapper>
          <SearchImage
            source={{ uri: SEARCH_IMAGE }}
            width={17.06}
            height={17.06}
          />
          {(searchbarErrors as SearchTask).searchText && (
            <ErrorContentWrapper>
              <ErrorTextContent>
                {(searchbarErrors as SearchTask).searchText}
              </ErrorTextContent>
            </ErrorContentWrapper>
          )}

          <SearchBar
            editable
            clearButtonMode="always"
            keyboardType="default"
            autoCapitalize="none"
            autoCorrect={false}
            value={searchText}
            onChangeText={handleChangeText}
            placeholder={TextStrings.SearchBarPlaceholder}
            maxLength={80}
            onSubmitEditing={handleSubmit}
          />
        </Wrapper>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
