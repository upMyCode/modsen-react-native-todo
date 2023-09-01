import {
  Button,
  ManagedStatusBar,
  ModalContainer,
  TaskScreenImage,
  TaskTicket,
} from '@root';
import { WhiteArrowImg, WhitePlusImg } from '@src/assets';
import {
  changeStatusToActive,
  changeStatusToDisable,
} from '@src/slices/modalSlice';
import { addNewTask } from '@src/slices/taskListSlice';
import { useAppDispatch, useAppSelector } from '@src/store/hooks';
import React, { useState } from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { Dimensions, FlatList, Image, SafeAreaView, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import {
  BackButton,
  DateContainer,
  DatePeriodText,
  Footer,
  Header,
  Main,
  Title,
} from './styles';
import type { NavigationProps, Task } from './types';

export default function TaskListScreen({ navigation }: NavigationProps) {
  const tasks = useAppSelector((state) => {
    return state.tasksListSlice.tasks;
  });
  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalTextContent, setModalTextContent] = useState<string>('');
  const ARROW_IMAGE = Image.resolveAssetSource(WhiteArrowImg).uri;
  const WHITE_PLUS_IMAGE = Image.resolveAssetSource(WhitePlusImg).uri;
  const windowHeight = Dimensions.get('window').height;
  const PROCENT = 0.3;
  const marginTopToAddTaskButton = windowHeight * PROCENT;
  const dispatch = useAppDispatch();
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [tillDate, setTillDate] = useState<Date>(new Date());
  const [fromTime, setFromTime] = useState<Date>(new Date());
  const [tillTime, setTillTime] = useState<Date>(new Date());
  const [importantTaskStatus, setImportantTaskStatus] =
    useState<boolean>(false);
  const [modalName, setModalName] = useState<string>('date');
  const modalVisible = useAppSelector((state) => {
    return state.modalStatusReducer.status;
  });

  const renderItemTask = ({ item }: ListRenderItemInfo<Task>) => {
    return (
      <TaskTicket
        timeFrom={item.taskTimeFrom.toString()}
        timeTill={item.taskTimeTill.toString()}
        taskTitle={item.taskTitle}
        taskDescription={item.taskDescription}
      />
    );
  };
  const handleImportantTaskStatus = () => {
    setImportantTaskStatus((prevStatus) => {
      return !prevStatus;
    });
  };

  const handleAddNewTask = () => {
    dispatch(
      addNewTask({
        taskTitle: modalTitle,
        taskDescription: modalTextContent,
        taskImportantStatus: importantTaskStatus,
        taskDateFrom: fromDate,
        taskDateTill: tillDate,
        taskTimeFrom: fromTime,
        taskTimeTill: tillTime,
      })
    );
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
        handleAddNewTask();
        dispatch(changeStatusToDisable());
        setModalName('date');
        setModalTitle('');
        setModalTextContent('');
        setImportantTaskStatus(false);
        setFromDate(new Date());
        setTillDate(new Date());
        setFromTime(new Date());
        setTillTime(new Date());
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

  const handleChangeDateFrom = (date: Date) => {
    setFromDate(date);
  };

  const handleChangeDateTill = (date: Date) => {
    setTillDate(date);
  };

  const handleChangeTimeFrom = (date: Date) => {
    setFromTime(date);
  };

  const handleChangeTimeTill = (date: Date) => {
    setTillTime(date);
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
              date={fromDate}
              onDateChange={handleChangeDateFrom}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>till</DatePeriodText>
            <DatePicker
              style={{ height: 50, width: 300 }}
              mode="date"
              date={tillDate}
              onDateChange={handleChangeDateTill}
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
              date={fromTime}
              onDateChange={handleChangeTimeFrom}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>till</DatePeriodText>
            <DatePicker
              style={{ height: 50, width: 300 }}
              mode="time"
              date={tillTime}
              onDateChange={handleChangeTimeTill}
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
        <Main>
          <FlatList
            contentContainerStyle={{
              alignItems: 'center',
            }}
            data={tasks}
            keyExtractor={({ id }) => {
              return id;
            }}
            renderItem={renderItemTask}
          />
        </Main>
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
