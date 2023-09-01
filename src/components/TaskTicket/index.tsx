import { Button } from '@root';
import { DoneStatusImg, SpreadImg } from '@src/assets';
import React, { useState } from 'react';
import { Dimensions, Image, View } from 'react-native';

import {
  Container,
  Description,
  ImageWrapper,
  MainContent,
  TaskTextContent,
  Time,
  TimeText,
  Title,
  Wrapper,
} from './styles';
import { TaskTicketProps } from './types';

export default function TaskTicket({
  timeFrom,
  timeTill,
  taskTitle,
  taskDescription,
}: TaskTicketProps) {
  const windowWidth = Dimensions.get('window').width;
  const [isDone, setDoneStatus] = useState<boolean>(false);
  const DONE_STATUS_IMAGE = Image.resolveAssetSource(DoneStatusImg).uri;
  const SPREAD_IMAGE = Image.resolveAssetSource(SpreadImg).uri;
  const WINDOW_PROC = 0.91;
  const totalTaskWidth = windowWidth * WINDOW_PROC;

  const handleDoneStatus = () => {
    setDoneStatus((done) => {
      return !done;
    });
  };

  return (
    <Wrapper totalTaskWidth={totalTaskWidth}>
      <Container>
        <Time>
          <TimeText>{timeFrom}</TimeText>
          <TimeText>{timeTill}</TimeText>
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
          <Button
            width={4}
            height={20}
            onPress={() => {
              return console.log(1);
            }}
          >
            <Image width={4} height={20} source={{ uri: SPREAD_IMAGE }} />
          </Button>
        </ImageWrapper>
      </Container>
    </Wrapper>
  );
}
