import useGetTasksCategoriesLists from '@hooks/useGetTasksCategoriesLists';
import { Button } from '@root';
import { DoneStatusImg, SpreadImg } from '@src/assets';
import getTime from '@src/helpers/getTime';
import { changeStatusToActive } from '@src/slices/modalSlice';
import {
  deleteTask,
  setTaskAsDone,
  setTaskAsInProgress,
} from '@src/slices/taskListSlice';
import { useAppDispatch } from '@src/store/hooks';
import React, { useState } from 'react';
import { Dimensions, Image, Modal, Text, View } from 'react-native';

import {
  Blur,
  ButtonListContainer,
  Container,
  Description,
  ImageWrapper,
  MainContent,
  SpreadMenu,
  SpreadMenuButtonContext,
  SpreadMenuContainer,
  SpreadMenuContainerButtons,
  SpreadMenuContainerText,
  TaskTextContent,
  Time,
  TimeText,
  Title,
  Wrapper,
} from './styles';
import { Task, TaskTicketProps } from './types';

export default function TaskTicket({
  id,
  timeFrom,
  timeTill,
  taskTitle,
  taskDescription,
  sortTag,
  setModalName,
  handleChangeChangedTaskStatus,
  handleSetId,
  taskDateFrom,
  taskDateTill,
  subTasks,
  doneStatus,
  setFromDate,
  setTillDate,
  setFromTime,
  setTillTime,
  setModalTitle,
  setSubTaskList,
  setModalTextContent,
  setImportantTaskStatus,
  taskImportantStatus,
}: TaskTicketProps) {
  const windowWidth = Dimensions.get('window').width;
  const [isDone, setDoneStatus] = useState<boolean>(false);
  const [isOpenedSpreadMenu, setOpenSpreadMenu] = useState<boolean>(false);
  const DONE_STATUS_IMAGE = Image.resolveAssetSource(DoneStatusImg).uri;
  const SPREAD_IMAGE = Image.resolveAssetSource(SpreadImg).uri;
  const WINDOW_PROC = 0.91;
  const totalTaskWidth = windowWidth * WINDOW_PROC;
  const dispatch = useAppDispatch();
  const { DONE_TASKS, ALL_TASKS } = useGetTasksCategoriesLists(sortTag);

  const getTaskById = (itemId: string, tasksList: Task[]) => {
    return tasksList.filter((task) => {
      return task.id === itemId;
    });
  };

  const handleDoneStatus = () => {
    setDoneStatus((done) => {
      return !done;
    });

    const task = getTaskById(id, DONE_TASKS);

    if (task.length !== 1) {
      const taskInProgress = getTaskById(id, ALL_TASKS);
      dispatch(setTaskAsDone({ id, task: taskInProgress[0] }));
    } else {
      task[0].doneStatus = false;

      dispatch(setTaskAsInProgress({ id, task: task[0] }));
    }
  };

  const handleOpenSpreadMenu = () => {
    setOpenSpreadMenu((menu) => {
      return !menu;
    });
  };

  const handleCloseSpreadMenu = () => {
    setOpenSpreadMenu(false);
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask({ id }));
  };

  const handleOpenAddTaskMenu = () => {
    handleOpenSpreadMenu();
    dispatch(changeStatusToActive());
    setModalName('date');
    handleChangeChangedTaskStatus();
    handleSetId(id);
    setFromDate(taskDateFrom);
    setTillDate(taskDateTill);
    setFromTime(timeFrom);
    setTillTime(timeFrom);
    setModalTitle(taskTitle);
    setSubTaskList(subTasks);
    setImportantTaskStatus(taskImportantStatus);
    setModalTextContent(taskDescription);
  };

  return (
    <Wrapper totalTaskWidth={totalTaskWidth}>
      <Modal
        animationType="slide"
        transparent
        visible={isOpenedSpreadMenu}
        onRequestClose={handleOpenSpreadMenu}
      >
        <Blur
          blurType="light"
          blurAmount={8}
          reducedTransparencyFallbackColor="white"
        />
        <SpreadMenu>
          <SpreadMenuContainer>
            <SpreadMenuContainerText>
              Choose what do you need
            </SpreadMenuContainerText>
            <SpreadMenuContainerButtons>
              <Button
                width={40}
                height={20}
                bRadius={8}
                bColor="#29a8ff"
                onPress={handleCloseSpreadMenu}
              >
                <SpreadMenuButtonContext>Cancel</SpreadMenuButtonContext>
              </Button>
              <ButtonListContainer>
                <Button
                  width={70}
                  height={20}
                  bRadius={8}
                  bColor="#29a8ff"
                  onPress={handleDeleteTask}
                >
                  <SpreadMenuButtonContext>Delete Task</SpreadMenuButtonContext>
                </Button>
                <Button
                  width={65}
                  height={20}
                  bRadius={8}
                  bColor="#29a8ff"
                  onPress={handleOpenAddTaskMenu}
                >
                  <SpreadMenuButtonContext>Change Task</SpreadMenuButtonContext>
                </Button>
              </ButtonListContainer>
            </SpreadMenuContainerButtons>
          </SpreadMenuContainer>
        </SpreadMenu>
      </Modal>
      <Container>
        <Time>
          <TimeText>{getTime(timeFrom)}</TimeText>
          <TimeText>{getTime(timeTill)}</TimeText>
        </Time>
        <MainContent>
          <ImageWrapper>
            <Button
              width={24}
              height={24}
              bRadius={24}
              bColor="#E7E7E7"
              onPress={handleDoneStatus}
            >
              {isDone ? (
                <Image
                  width={14}
                  height={10}
                  source={{ uri: DONE_STATUS_IMAGE }}
                />
              ) : (
                <View />
              )}
            </Button>
          </ImageWrapper>
          <TaskTextContent>
            <Title>{taskTitle}</Title>
            <Description>{taskDescription}</Description>
          </TaskTextContent>
        </MainContent>
        <ImageWrapper>
          <Button width={4} height={20} onPress={handleOpenSpreadMenu}>
            <Image width={4} height={20} source={{ uri: SPREAD_IMAGE }} />
          </Button>
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
}
