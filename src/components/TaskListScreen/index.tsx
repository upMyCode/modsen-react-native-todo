import {
  Button,
  ManagedStatusBar,
  ModalContainer,
  TaskScreenImage,
} from '@root';
import { WhiteArrowImg, WhitePlusImg } from '@src/assets';
import {
  changeStatusToActive,
  changeStatusToDisable,
} from '@src/slices/modalSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React, { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import DatePicker from 'react-native-date-picker';

import {
  BackButton,
  DateContainer,
  DatePeriodText,
  Footer,
  Header,
  Title,
} from './styles';
import type { NavigationProps } from './types';

export default function TaskListScreen({ navigation }: NavigationProps) {
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalTextContent, setModalTextContent] = useState<string>('');
  const ARROW_IMAGE = Image.resolveAssetSource(WhiteArrowImg).uri;
  const WHITE_PLUS_IMAGE = Image.resolveAssetSource(WhitePlusImg).uri;
  const windowHeight = Dimensions.get('window').height;
  const PROCENT = 0.76;
  const marginTopToAddTaskButton = windowHeight * PROCENT;
  const dispatch = useAppDispatch();
  const [date, setDate] = useState<Date>(new Date());
  const [importantTaskStatus, setImportantTaskStatus] =
    useState<boolean>(false);
  const [modalName, setModalName] = useState<string>('date');
  const modalVisible = useAppSelector((state) => {
    return state.modalStatusReducer.status;
  });

  const handleImportantTaskStatus = () => {
    setImportantTaskStatus((prevStatus) => {
      return !prevStatus;
    });
  };

  const modalEventList = [
    {
      modalFirstHandler: () => {
        dispatch(changeStatusToDisable());
      },
      modalSecondHandler: () => {
        dispatch(changeStatusToDisable());
        setModalName('subtask');
        dispatch(changeStatusToActive());
      },
    },
    {
      modalFirstHandler: () => {
        dispatch(changeStatusToDisable());
        setModalName('date');
        dispatch(changeStatusToActive());
      },
      modalSecondHandler: () => {
        dispatch(changeStatusToDisable());
        setModalName('time');
        dispatch(changeStatusToActive());
      },
    },
    {
      modalFirstHandler: () => {
        dispatch(changeStatusToDisable());
      },
      modalSecondHandler: () => {
        dispatch(changeStatusToDisable());
      },
    },
  ];
  const handleGoBack = () => {
    navigation.navigate('MainScreen');
  };

  const handleOpenAddTaskMenu = () => {
    dispatch(changeStatusToActive());
  };

  const handleChangeTitle = (text: string) => {
    setModalTitle(text);
  };

  const handleChangeTextContent = (text: string) => {
    setModalTextContent(text);
  };

  return (
    <View>
      <ManagedStatusBar />
      <TaskScreenImage />
      {modalVisible && modalName === 'date' && (
        <ModalContainer
          modalTitle={modalTitle}
          importantTaskStatus={importantTaskStatus}
          modalTextContent={modalTextContent}
          handleChangeTitle={handleChangeTitle}
          handleImportantTaskStatus={handleImportantTaskStatus}
          handleChangeTextContent={handleChangeTextContent}
          modalFirstHandler={modalEventList[0].modalFirstHandler}
          modalSecondHandler={modalEventList[0].modalSecondHandler}
          title="Please, add your task title"
          textContent="Please, add your task title"
          modalFirstHandlerText="Cancel"
          modalSecondHandlerText="Ok"
          modalVisible={modalVisible}
          titleMaxSymbol={16}
          textContextMaxSymbol={40}
          isEditableModal
          important
        >
          <DateContainer>
            <DatePeriodText>from</DatePeriodText>
            <DatePicker
              style={{ height: 50, width: 300 }}
              mode="date"
              date={date}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>till</DatePeriodText>
            <DatePicker
              style={{ height: 50, width: 300 }}
              mode="date"
              date={date}
            />
          </DateContainer>
        </ModalContainer>
      )}
      {modalVisible && modalName === 'time' && (
        <ModalContainer
          modalTitle={modalTitle}
          modalTextContent={modalTextContent}
          importantTaskStatus={importantTaskStatus}
          handleChangeTitle={handleChangeTitle}
          handleChangeTextContent={handleChangeTextContent}
          handleImportantTaskStatus={handleImportantTaskStatus}
          modalFirstHandler={modalEventList[2].modalFirstHandler}
          modalSecondHandler={modalEventList[2].modalSecondHandler}
          title={modalTitle || 'Please, add your task title'}
          textContent={modalTextContent || 'Please, add your task title'}
          modalFirstHandlerText="Cancel"
          modalSecondHandlerText="Ok"
          modalVisible={modalVisible}
          titleMaxSymbol={16}
          isEditableModal={false}
          textContextMaxSymbol={40}
          important
        >
          <DateContainer>
            <DatePeriodText>from</DatePeriodText>
            <DatePicker
              style={{ height: 50, width: 300 }}
              mode="time"
              date={date}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>till</DatePeriodText>
            <DatePicker
              style={{ height: 50, width: 300 }}
              mode="time"
              date={date}
            />
          </DateContainer>
        </ModalContainer>
      )}
      {modalVisible && modalName === 'subtask' && (
        <ModalContainer
          modalTitle={modalTitle}
          modalTextContent={modalTextContent}
          importantTaskStatus={importantTaskStatus}
          handleChangeTitle={handleChangeTitle}
          title={modalTitle || 'Please, add your task title'}
          textContent={modalTextContent || 'Please, add your task title'}
          handleChangeTextContent={handleChangeTextContent}
          handleImportantTaskStatus={handleImportantTaskStatus}
          modalFirstHandler={modalEventList[1].modalFirstHandler}
          modalSecondHandler={modalEventList[1].modalSecondHandler}
          modalFirstHandlerText="Back"
          modalSecondHandlerText="Next"
          modalVisible={modalVisible}
          titleMaxSymbol={16}
          isEditableModal={false}
          textContextMaxSymbol={40}
          important
        />
      )}
      <SafeAreaView>
        <Header>
          <BackButton onPress={handleGoBack}>
            <Image width={32} height={32} source={{ uri: ARROW_IMAGE }} />
          </BackButton>
          <Title>Today’s task</Title>
        </Header>
        <Footer mTop={marginTopToAddTaskButton}>
          <Button
            width={56}
            height={56}
            bRadius={56}
            bgColor="#646FD4"
            onPress={handleOpenAddTaskMenu}
          >
            <Image width={32} height={32} source={{ uri: WHITE_PLUS_IMAGE }} />
          </Button>
        </Footer>
      </SafeAreaView>
    </View>
  );
}
