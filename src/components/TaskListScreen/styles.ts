import styled from 'styled-components/native';

import { FooterProps } from './types';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 16px 0 16px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  font-family: 'Jost-Bold';
  font-weight: 600;
  font-size: 20px;
  line-height: 29px;
  color: #ffffff;
`;

export const BackButton = styled.Pressable`
  top: 2px;
  right: 100px;
`;

export const Footer = styled.View<FooterProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${({ mTop }) => {
    return mTop;
  }}px;
`;

export const DateContainer = styled.View`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 10px;
  transform: scale(0.5, 0.5);
`;

export const DatePeriodText = styled.Text`
  font-family: 'Signika-Light';
  font-size: 16px;
  line-height: 16px;
  color: #888888;
`;

export const Main = styled.View`
  display: flex;
  align-items: center;
  height: 50%;
  margin-top: 20px;
`;

export const ModalFooter = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SubTaskList = styled.View`
  height: 51%;
`;

export const LineDevider = styled.View`
  width: 90%;
  height: 1px;
  background-color: #888888;
`;

export const TaskSwitcher = styled.View`
  display: flex;
  width: 90%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
`;

export const TaskSwitcherText = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 16px;
  line-height: 23px;
  color: #363636;
`;

export const ErrorTextContent = styled.Text`
  position: absolute;
  font-family: 'Signika-Light';
  color: #c70216;
  font-size: 12px;
  line-height: 10px;
  padding: 10px 5px;
  top: 95%;
  left: 20%;
`;
