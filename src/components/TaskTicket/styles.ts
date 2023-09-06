import styled from 'styled-components/native';

import { WrapperProps } from './types';

export const Wrapper = styled.View<WrapperProps>`
  width: ${({ totalTaskWidth }) => {
    return totalTaskWidth;
  }}px;
  background-color: #ffffff;
  border-radius: 16px;
  margin-top: 8px;
`;

export const Time = styled.View`
  display: flex;
  justify-content: center;
  width: 64px;
`;

export const TimeText = styled.Text`
  font-size: 8px;
  font-family: 'Signika-Light';
  color: #888888;
`;

export const Container = styled.View`
  padding: 16px 22.5px 16px 16px;
  display: flex;
  flex-direction: row;
`;

export const MainContent = styled.View`
  display: flex;
  flex-direction: row;
  width: 223px;
  height: 37px;
  margin-left: 8.5px;
`;

export const ImageWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 13px;
  font-family: 'Signika-Light';
  line-height: 16.02px;
  color: #363636;
`;

export const Description = styled.Text`
  font-size: 8px;
  font-family: 'Signika-Light';
  line-height: 9.86px;
  color: #e7e7e7;
`;

export const TaskTextContent = styled.View`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
`;