import TextStrings from '@constants/strings';
import useGetTasksCategoriesLists from '@hooks/useGetTasksCategoriesLists';
import notifee from '@notifee/react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {
  Button,
  ManagedStatusBar,
  ModalContainer,
  SubTaskItem,
  TaskScreenImage,
  TaskTicket,
} from '@root';
import {
  ARROW_DOWN_IMAGE,
  ARROW_IMAGE,
  WHITE_PLUS_IMAGE,
} from '@src/helpers/images';
import {
  changeStatusToActive,
  changeStatusToDisable,
} from '@src/slices/modalSlice';
import { addNewTask, changeTask } from '@src/slices/taskListSlice';
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
  ErrorTextContent,
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
  CategoryItem,
  DateError,
  FormSubTask,
  FormTask,
  ModalDate,
  MyStackParamList,
  SubTask,
  Task,
  WorkWithFormProps,
} from './types';
import { formSchemaSubTask, formSchemaTask } from './validate';

export default function TaskListScreen({
  route,
  navigation,
}: StackScreenProps<MyStackParamList, 'ToDoListScreen'>) {
  const { sortTag, searchData } = route.params;
  const { IMPORTANT_TASK_LIST, DONE_TASKS, ALL_TASKS } =
    useGetTasksCategoriesLists(sortTag, searchData);
  const DATE_CATEGORY = useAppSelector((state) => {
    return state.addDateCategorySlice.dateCategory;
  });
  const [taskIdForChange, setTaskIdForChange] = useState<string>('');
  const [subTaskList, setSubTaskList] = useState<Array<SubTask>>([]);
  const [changeTaskStatus, setChangeTaskStatus] = useState<boolean>(false);

  const [modalTitle, setModalTitle] = useState<string>('');
  const [modalAddSubTaskTitle, setModalAddSubTaskTitle] = useState<string>('');
  const [modalTextContent, setModalTextContent] = useState<string>('');

  const categories = useAppSelector((state) => {
    return state.categoriesListReducer.categories;
  });
  const windowHeight = Dimensions.get('window').height;
  const PROCENT = 0.3;
  const marginTopToAddTaskButton = windowHeight * PROCENT;
  const dispatch = useAppDispatch();
  const [modalDate, setDate] = useState<ModalDate>({
    fromDate: new Date(),
    tillDate: new Date(),
    fromTime: new Date(),
    tillTime: new Date(),
  });
  const [ticketForChangeDoneStatus, setTicketForChangeDoneStatus] =
    useState<boolean>(false);
  const [taskModalErrors, setTaskModalErrors] = useState<FormTask | object>({});
  const [subTaskModalErrors, setSubTaskModalErrors] = useState<
    FormSubTask | object
  >({});
  const [dateError, setDateError] = useState<DateError>({
    dateError: '',
    timeError: '',
  });
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

  const setChangedTaskStatusToActive = () => {
    setChangeTaskStatus(true);
  };

  const setChangedTaskStatusToDisable = () => {
    setChangeTaskStatus(false);
  };
  const isAllTasksHaveCustomCategory =
    categories.filter((item: CategoryItem) => {
      return item.taskCategoryName === sortTag;
    }).length > 0;

  const handleResetAllStates = () => {
    setModalName('date');
    setModalTitle('');
    setModalTextContent('');
    setImportantTaskStatus(false);
    setDate({
      fromDate: new Date(),
      tillDate: new Date(),
      fromTime: new Date(),
      tillTime: new Date(),
    });
    setDateError({
      dateError: '',
      timeError: '',
    });
    setSubTaskList([]);
    setChangedTaskStatusToDisable();
    dispatch(changeStatusToDisable());
  };

  const handleChangeTask = () => {
    dispatch(
      changeTask({
        id: taskIdForChange,
        taskTitle: modalTitle,
        taskDescription: modalTextContent,
        taskImportantStatus: importantTaskStatus,
        taskDateFrom: modalDate.fromDate,
        taskDateTill: modalDate.tillDate,
        taskTimeFrom: modalDate.fromTime,
        taskTimeTill: modalDate.tillTime,
        subTasks: subTaskList,
        doneStatus: ticketForChangeDoneStatus,
      })
    );
  };
  const handleSetId = (id: string) => {
    setTaskIdForChange(id);
  };

  const renderItemTask = ({ item }: ListRenderItemInfo<Task>) => {
    return (
      <TaskTicket
        sortTag={sortTag}
        id={item.id}
        task={item}
        timeFrom={item.taskTimeFrom}
        timeTill={item.taskTimeTill}
        taskTitle={item.taskTitle}
        taskDescription={item.taskDescription}
        setChangedTaskStatusToActive={setChangedTaskStatusToActive}
        setModalName={setModalName}
        handleSetId={handleSetId}
        taskImportantStatus={item.taskImportantStatus}
        taskDateFrom={item.taskDateFrom}
        taskDateTill={item.taskDateTill}
        subTasks={item.subTasks}
        doneStatus={item.doneStatus}
        setDate={setDate}
        setModalTitle={setModalTitle}
        setModalTextContent={setModalTextContent}
        setSubTaskList={setSubTaskList}
        setImportantTaskStatus={setImportantTaskStatus}
        setTicketForChangeDoneStatus={setTicketForChangeDoneStatus}
        doneTasks={DONE_TASKS}
        allTasks={ALL_TASKS}
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
        taskDateFrom: modalDate.fromDate,
        taskDateTill: modalDate.tillDate,
        taskTimeFrom: modalDate.fromTime,
        taskTimeTill: modalDate.tillTime,
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
          doneStatus: false,
        },
      ];
    });
  };

  const checkIsDateCorrect = (dateFor: Date, dateTill: Date, type: string) => {
    if (dateFor <= dateTill) {
      return true;
    }
    if (type === 'date') {
      setDateError((error) => {
        return {
          ...error,
          dateError: 'Please, add correct date',
        };
      });
      return false;
    }
    if (type === 'time') {
      setDateError((error) => {
        return {
          ...error,
          timeError: 'Please, add correct time',
        };
      });
      return false;
    }

    return false;
  };

  const handleLocalNotification = async (
    title: string,
    body: string,
    isUpdateTask: boolean
  ) => {
    await notifee.requestPermission();

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.displayNotification({
      title: isUpdateTask
        ? `You updated task to title ${title}`
        : `You created task with title ${title}`,
      body: isUpdateTask
        ? `You updated task to description ${body}`
        : `You created task with description ${body}`,
      android: {
        channelId,
        smallIcon: ARROW_DOWN_IMAGE,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const modalEventList = [
    {
      modalFirstHandler: () => {
        dispatch(changeStatusToDisable());
        setChangedTaskStatusToDisable();
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
          const isCorrectDate = checkIsDateCorrect(
            modalDate.fromDate,
            modalDate.tillDate,
            'date'
          );
          if (isCorrectDate) {
            dispatch(changeStatusToDisable());
            setModalName('subtask');
            dispatch(changeStatusToActive());
          }
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
        setChangedTaskStatusToDisable();
      },
      modalSecondHandler: async () => {
        const isCorrectDate = checkIsDateCorrect(
          modalDate.fromTime,
          modalDate.tillTime,
          'time'
        );
        if (isCorrectDate) {
          if (!changeTaskStatus) {
            handleAddNewTask();
            handleResetAllStates();
            handleLocalNotification(
              modalTitle,
              modalTextContent,
              changeTaskStatus
            );
          } else {
            handleChangeTask();
            handleResetAllStates();
            handleLocalNotification(
              modalTitle,
              modalTextContent,
              changeTaskStatus
            );
          }
        }
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
    handleResetAllStates();
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
    setDate((prevDate) => {
      return {
        ...prevDate,
        fromDate: date,
      };
    });
  };

  const handleChangeDateTill = (date: Date) => {
    setDate((prevDate) => {
      return {
        ...prevDate,
        tillDate: date,
      };
    });
  };

  const handleChangeTimeFrom = (date: Date) => {
    setDate((prevDate) => {
      return {
        ...prevDate,
        fromTime: date,
      };
    });
  };

  const handleChangeTimeTill = (date: Date) => {
    setDate((prevDate) => {
      return {
        ...prevDate,
        tillTime: date,
      };
    });
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
      {modalVisible && modalName === TextStrings.ModalNameDate && (
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
          title={
            changeTaskStatus
              ? TextStrings.ModalForChangeDateTitle
              : TextStrings.ModalForAddDateTitle
          }
          textContent={
            changeTaskStatus
              ? TextStrings.ModalForChangeDateDescription
              : TextStrings.ModalForAddDateDescription
          }
          modalFirstHandlerText={TextStrings.ModalHandlerTitleCancel}
          modalSecondHandlerText={TextStrings.ModalHandlerTitleConfirm}
          modalVisible={modalVisible}
          titleMaxSymbol={16}
          textContextMaxSymbol={40}
          isEditableModal
          important
        >
          <DateContainer>
            <DatePeriodText>{TextStrings.DatePeriodFrom}</DatePeriodText>
            <DatePicker
              style={{ height: 40, width: 300 }}
              mode="date"
              date={modalDate.fromDate}
              onDateChange={handleChangeDateFrom}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>{TextStrings.DatePeriodTill}</DatePeriodText>
            <DatePicker
              style={{ height: 40, width: 300 }}
              mode="date"
              date={modalDate.tillDate}
              onDateChange={handleChangeDateTill}
            />
          </DateContainer>
          {dateError.dateError && (
            <ErrorTextContent>{dateError.dateError}</ErrorTextContent>
          )}
        </ModalContainer>
      )}
      {modalVisible && modalName === TextStrings.ModalNameTime && (
        <ModalContainer
          modalTitle={modalTitle}
          modalTextContent={modalTextContent}
          importantTaskStatus={importantTaskStatus}
          handleChangeTitle={handleChangeTitle}
          handleChangeTextContent={handleChangeTextContent}
          handleImportantTaskStatus={handleImportantTaskStatus}
          modalFirstHandler={modalEventList[2].modalFirstHandler}
          modalSecondHandler={modalEventList[2].modalSecondHandler}
          title={modalTitle || TextStrings.ModalForAddDateTitle}
          textContent={
            modalTextContent || TextStrings.ModalForAddDateDescription
          }
          modalFirstHandlerText={TextStrings.ModalHandlerTitleCancel}
          modalSecondHandlerText={TextStrings.ModalHandlerTitleConfirm}
          modalVisible={modalVisible}
          titleMaxSymbol={16}
          isEditableModal={false}
          textContextMaxSymbol={40}
          important
        >
          <DateContainer>
            <DatePeriodText>{TextStrings.DatePeriodFrom}</DatePeriodText>
            <DatePicker
              style={{ height: 40, width: 300 }}
              mode="time"
              date={modalDate.fromTime}
              onDateChange={handleChangeTimeFrom}
            />
          </DateContainer>
          <DateContainer>
            <DatePeriodText>{TextStrings.DatePeriodTill}</DatePeriodText>
            <DatePicker
              style={{ height: 40, width: 300 }}
              mode="time"
              date={modalDate.tillTime}
              onDateChange={handleChangeTimeTill}
            />
          </DateContainer>
          {dateError.timeError && (
            <ErrorTextContent>{dateError.timeError}</ErrorTextContent>
          )}
        </ModalContainer>
      )}
      {modalVisible && modalName === TextStrings.ModalNameSubtask && (
        <ModalContainer
          modalTitle={modalTitle}
          modalTextContent={modalTextContent}
          importantTaskStatus={importantTaskStatus}
          handleChangeTitle={handleChangeTitle}
          title={modalTitle || TextStrings.ModalForAddDateTitle}
          textContent={
            modalTextContent || TextStrings.ModalForAddDateDescription
          }
          handleChangeTextContent={handleChangeTextContent}
          handleImportantTaskStatus={handleImportantTaskStatus}
          modalFirstHandler={modalEventList[1].modalFirstHandler}
          modalSecondHandler={modalEventList[1].modalSecondHandler}
          modalFirstHandlerText={TextStrings.ModalHandlerTitleBack}
          modalSecondHandlerText={TextStrings.ModalHandlerTitleNext}
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
      {modalVisible && modalName === TextStrings.ModalNameAddSubtask && (
        <ModalContainer
          errors={subTaskModalErrors}
          modalTitle={modalTitle}
          modalTextContent={modalAddSubTaskTitle}
          importantTaskStatus={importantTaskStatus}
          handleChangeTitle={handleChangeTitle}
          subTaskTitle={TextStrings.ModalForAddSubtaskTitle}
          textContent={
            modalAddSubTaskTitle || TextStrings.ModalForAddSubtaskDescription
          }
          handleChangeTextContent={handleChangeAddSubTaskTextContent}
          handleImportantTaskStatus={handleImportantTaskStatus}
          modalFirstHandler={modalEventList[3].modalFirstHandler}
          modalSecondHandler={modalEventList[3].modalSecondHandler}
          modalFirstHandlerText={TextStrings.ModalHandlerTitleCancel}
          modalSecondHandlerText={TextStrings.ModalHandlerTitleConfirm}
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
            {sortTag === TextStrings.SortTagTitleDaily
              ? TextStrings.TodayTasks
              : DATE_CATEGORY === TextStrings.TodayCategory
              ? TextStrings.TodayTasks
              : DATE_CATEGORY === TextStrings.MonthCategory
              ? TextStrings.MonthTasks
              : DATE_CATEGORY === TextStrings.WeekCategory
              ? TextStrings.WeekTasks
              : DATE_CATEGORY === TextStrings.AllCategory &&
                sortTag === TextStrings.SortTagTitleDaily
              ? TextStrings.TodayTasks
              : TextStrings.TaskInAllTime}
          </Title>
        </Header>
        <Main>
          {sortTag === TextStrings.SortTagTitleRead && (
            <FlatList
              nestedScrollEnabled
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
          {sortTag === TextStrings.SortTagTitleSearch && (
            <FlatList
              nestedScrollEnabled
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
          {isAllTasksHaveCustomCategory && (
            <FlatList
              nestedScrollEnabled
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
          {sortTag === TextStrings.SortTagTitleSchool && (
            <FlatList
              nestedScrollEnabled
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={ALL_TASKS}
              extraData={ALL_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === TextStrings.SortTagTitleWork && (
            <FlatList
              nestedScrollEnabled
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={ALL_TASKS}
              extraData={ALL_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === TextStrings.SortTagTitleWorkout && (
            <FlatList
              nestedScrollEnabled
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={ALL_TASKS}
              extraData={ALL_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === TextStrings.SortTagTitleShop && (
            <FlatList
              nestedScrollEnabled
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={ALL_TASKS}
              extraData={ALL_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === TextStrings.SortTagTitleDaily &&
            isTaskListDoneOpened && (
              <FlatList
                nestedScrollEnabled
                contentContainerStyle={{
                  alignItems: 'center',
                }}
                data={DONE_TASKS}
                extraData={DONE_TASKS}
                keyExtractor={({ id }) => {
                  return id;
                }}
                renderItem={renderItemTask}
              />
            )}
          {sortTag === TextStrings.SortTagTitleDaily &&
            !isTaskListDoneOpened && (
              <FlatList
                nestedScrollEnabled
                contentContainerStyle={{
                  alignItems: 'center',
                }}
                data={ALL_TASKS}
                extraData={ALL_TASKS}
                keyExtractor={({ id }) => {
                  return id;
                }}
                renderItem={renderItemTask}
              />
            )}
          {sortTag === TextStrings.SortTagTitleImportant && (
            <FlatList
              nestedScrollEnabled
              contentContainerStyle={{
                alignItems: 'center',
              }}
              data={IMPORTANT_TASK_LIST}
              extraData={IMPORTANT_TASK_LIST}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === TextStrings.SortTagTitleDone && (
            <FlatList
              contentContainerStyle={{
                alignItems: 'center',
              }}
              nestedScrollEnabled
              data={DONE_TASKS}
              extraData={DONE_TASKS}
              keyExtractor={({ id }) => {
                return id;
              }}
              renderItem={renderItemTask}
            />
          )}
          {sortTag === TextStrings.SortTagTitleDaily && <LineDevider />}
          {sortTag === TextStrings.SortTagTitleDaily && (
            <TaskSwitcher>
              {sortTag === TextStrings.SortTagTitleDaily &&
              isTaskListDoneOpened ? (
                <TaskSwitcherText>{`tasks in progress (${ALL_TASKS.length})`}</TaskSwitcherText>
              ) : (
                <TaskSwitcherText>
                  {`${TextStrings.DoneTasks} (${DONE_TASKS.length})`}
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
