import useGetTasksCategoriesLists from '@hooks/useGetTasksCategoriesLists';
import {
  Button,
  ManagedStatusBar,
  ModalContainer,
  SubTaskItem,
  TaskScreenImage,
  TaskTicket,
} from '@root';
import { ArrowDownImg, WhiteArrowImg, WhitePlusImg } from '@src/assets';
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
import * as Yup from 'yup';

import {
  BackButton,
  DateContainer,
  DatePeriodText,
  Footer,
  Header,
  LineDevider,
  Main,
  ModalFooter,
  SubTaskList,
  TaskSwitcher,
  TaskSwitcherText,
  Title,
} from './styles';
import type {
  FormSubTask,
  FormTask,
  NavigationProps,
  SubTask,
  Task,
  WorkWithFormProps,
} from './types';
import { formSchemaSubTask, formSchemaTask } from './validate';

export default function TaskListScreen({ route, navigation }: NavigationProps) {
  const { sortTag } = route.params;
  const { IMPORTANT_TASK_LIST, DONE_TASKS, ALL_TASKS } =
    useGetTasksCategoriesLists(sortTag);
  const DATE_CATEGORY = useAppSelector((state) => {
    return state.addDateCategorySlice.dateCategory;
  });
  const tasks = useAppSelector((state) => {
    return state.tasksListSlice.tasks;
  });
  const doneTasks = useAppSelector((state) => {
    return state.tasksListSlice.doneTasks;
  });
  const [subTaskList, setSubTaskList] = useState<Array<SubTask>>([]);

  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalAddSubTaskTitle, setModalAddSubTaskTitle] = useState<string>('');
  const [modalTextContent, setModalTextContent] = useState<string>('');
  const ARROW_IMAGE = Image.resolveAssetSource(WhiteArrowImg).uri;
  const WHITE_PLUS_IMAGE = Image.resolveAssetSource(WhitePlusImg).uri;
  const ARROW_DOWN_IMAGE = Image.resolveAssetSource(ArrowDownImg).uri;
  const windowHeight = Dimensions.get('window').height;
  const PROCENT = 0.3;
  const marginTopToAddTaskButton = windowHeight * PROCENT;
  const dispatch = useAppDispatch();
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [tillDate, setTillDate] = useState<Date>(new Date());
  const [fromTime, setFromTime] = useState<Date>(new Date());
  const [tillTime, setTillTime] = useState<Date>(new Date());
  const [taskModalErrors, setTaskModalErrors] = useState<FormTask | object>({});
  const [subTaskModalErrors, setSubTaskModalErrors] = useState<
    FormSubTask | object
  >({});
  const [importantTaskStatus, setImportantTaskStatus] =
    useState<boolean>(false);
  const [modalName, setModalName] = useState<string>('date');
  const modalVisible = useAppSelector((state) => {
    return state.modalStatusReducer.status;
  });
  const [isTaskListDoneOpened, setTaskListDoneOpened] = useState(false);

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
        const yupErrors = {};

        error.inner.forEach((innerError) => {
          yupErrors[innerError.path] = innerError.message;
        });

        status = false;
        setErrorHandler(yupErrors);
      }
    }

    return status;
  };

  const renderItemTask = ({ item }: ListRenderItemInfo<Task>) => {
    return (
      <TaskTicket
        sortTag={sortTag}
        id={item.id}
        timeFrom={item.taskTimeFrom}
        timeTill={item.taskTimeTill}
        taskTitle={item.taskTitle}
        taskDescription={item.taskDescription}
      />
    );
  };

  const renderItemSubTask = ({ item }: ListRenderItemInfo<SubTask>) => {
    return <SubTaskItem subtask={item.subTaskText} />;
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
        subTasks: [...subTaskList],
        doneStatus: false,
      })
    );
  };

  const handleAddSubTask = () => {
    const initId = 0;
    setSubTaskList((subtask) => {
      return [
        ...subtask,
        {
          id: subtask[subtask.length - 1]
            ? (Number(subtask[subtask.length - 1].id) + 1).toString()
            : initId.toString(),
          subTaskText: modalAddSubTaskTitle,
        },
      ];
    });
  };
  const modalEventList = [
    {
      modalFirstHandler: () => {
        dispatch(changeStatusToDisable());
      },
      modalSecondHandler: async () => {
        const status = await workWithForm(
          formSchemaTask,
          {
            modalTitle,
            modalTextContent,
          },
          setTaskModalErrors
        );

        if (status) {
          dispatch(changeStatusToDisable());
          setModalName('subtask');
          dispatch(changeStatusToActive());
        }
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
        setSubTaskList([]);
      },
    },
    {
      modalFirstHandler: () => {
        dispatch(changeStatusToDisable());
        setModalName('subtask');
        dispatch(changeStatusToActive());
      },
      modalSecondHandler: async () => {
        const status = await workWithForm(
          formSchemaSubTask,
          {
            modalAddSubTaskTitle,
          },
          setSubTaskModalErrors
        );

        if (status) {
          dispatch(changeStatusToDisable());
          setModalName('subtask');
          setModalAddSubTaskTitle('');
          handleAddSubTask();
          dispatch(changeStatusToActive());
        }
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

  const handleChangeAddSubTaskTextContent = (text: string) => {
    setModalAddSubTaskTitle(text);
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

  const handleOpenAddSubTaskMenu = () => {
    setModalName('add-subtask');
  };

  const handleChangeTasksGroup = () => {
    setTaskListDoneOpened((opened) => {
      return !opened;
    });
  };

  return (
    <View>
      <ManagedStatusBar />
      <TaskScreenImage />
      {modalVisible && modalName === 'date' && (
        <ModalContainer
          errors={taskModalErrors}
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
              style={{ height: 40, width: 300 }}
              mode="date"
              date={fromDate}
              onDateChange={handleChangeDateFrom}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>till</DatePeriodText>
            <DatePicker
              style={{ height: 40, width: 300 }}
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
              style={{ height: 40, width: 300 }}
              mode="time"
              date={fromTime}
              onDateChange={handleChangeTimeFrom}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>till</DatePeriodText>
            <DatePicker
              style={{ height: 40, width: 300 }}
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
        >
          <SubTaskList>
            <FlatList
              data={subTaskList}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemSubTask}
            />
          </SubTaskList>
          <ModalFooter>
            <Button
              width={32}
              height={32}
              bRadius={32}
              bgColor="#646FD4"
              onPress={handleOpenAddSubTaskMenu}
            >
              <Image
                width={14}
                height={14}
                source={{ uri: WHITE_PLUS_IMAGE }}
              />
            </Button>
          </ModalFooter>
        </ModalContainer>
      )}
      {modalVisible && modalName === 'add-subtask' && (
        <ModalContainer
          errors={subTaskModalErrors}
          modalTitle={modalTitle}
          modalTextContent={modalAddSubTaskTitle}
          importantTaskStatus={importantTaskStatus}
          handleChangeTitle={handleChangeTitle}
          subTaskTitle="Please, add your subtask title"
          textContent={modalAddSubTaskTitle || 'Please, add your subtask'}
          handleChangeTextContent={handleChangeAddSubTaskTextContent}
          handleImportantTaskStatus={handleImportantTaskStatus}
          modalFirstHandler={modalEventList[3].modalFirstHandler}
          modalSecondHandler={modalEventList[3].modalSecondHandler}
          modalFirstHandlerText="Cancel"
          modalSecondHandlerText="Ok"
          modalVisible={modalVisible}
          isOpenAddSubtaskMenu
          titleMaxSymbol={16}
          isEditableModal
          textContextMaxSymbol={40}
          isNullChildren
        />
      )}
      <SafeAreaView>
        <Header>
          <BackButton onPress={handleGoBack}>
            <Image width={32} height={32} source={{ uri: ARROW_IMAGE }} />
          </BackButton>
          <Title>
            {sortTag === 'daily'
              ? 'Today’s task'
              : DATE_CATEGORY === 'Today'
              ? 'Today’s task'
              : DATE_CATEGORY === 'Month'
              ? 'Month’s task'
              : 'Weeks’s task'}
          </Title>
        </Header>
        <Main>
          {sortTag === 'daily' && isTaskListDoneOpened && (
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={DONE_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === 'daily' && !isTaskListDoneOpened && (
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={ALL_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === 'important' && (
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={IMPORTANT_TASK_LIST}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === 'done' && (
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={DONE_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === 'daily' && <LineDevider />}
          {sortTag === 'daily' && (
            <TaskSwitcher>
              {sortTag === 'daily' && isTaskListDoneOpened ? (
                <TaskSwitcherText>{`tasks in progress (${tasks.length})`}</TaskSwitcherText>
              ) : (
                <TaskSwitcherText>
                  {`done tasks (${doneTasks.length})`}
                </TaskSwitcherText>
              )}

              <Button width={24} height={24} onPress={handleChangeTasksGroup}>
                <Image
                  width={13.92}
                  height={8.16}
                  source={{ uri: ARROW_DOWN_IMAGE }}
                />
              </Button>
            </TaskSwitcher>
          )}
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
