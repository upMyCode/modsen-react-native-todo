import styled from 'styled-components/native';

import type { TaskInfoTitleItemProps } from './types';

export const Header = styled.View`
  margin: 8px 16px 0 16px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: 'Jost-Bold';
  font-weight: 600;
  font-size: 20px;
  line-height: 28.9px;
  color: #ffffff;
`;

export const Main = styled.View`
  margin-top: 42px;
`;

export const TaskInfo = styled.View`
  display: flex;
  align-items: center;
`;

export const TaskInfoTitle = styled.Text`
  font-family: 'Jost-Bold';
  font-weight: 600;
`;

export const TaskInfoTextContent = styled.Text`
  font-family: 'Jost-Regular';
  font-weight: 500;
  font-size: 12px;
  line-height: 17.34px;
  color: #363636;
`;

export const TaskInfoTitleItem = styled.Text<TaskInfoTitleItemProps>`
  color: ${({ color }) => {
    return color;
  }};
  font-size: ${({ fSize }) => {
    return fSize;
  }}px;
  line-height: ${({ lHeight }) => {
    return lHeight;
  }}px;
`;

export const DateButtonsWrapper = styled.View`
  margin-top: 42px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const DateButtonsContainer = styled.View`
  display: flex;
  width: 265px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin: 16px 16px;
`;

export const DateText = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 16px;
  line-height: 23.12px;
  color: #7d7d7d;
`;

export const TaskCategoriesContainer = styled.View`
  width: 100%;
  display: flex;
  align-items: center;
  height: 55%;
`;

export const TaskCatigories = styled.View`
  max-width: 400px;
  margin-top: 8px;
`;

export const ModalContext = styled.View`
  display: flex;
  margin: 0 20px;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 17.5px;
  margin-bottom: 70px;
`;

export const CategoryInput = styled.TextInput`
  width: 120px;
  border-bottom-width: 0.25px;
  color: #888888;
  height: 22px;
`;

export const CategoryText = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 16px;
  line-height: 23.12px;
  height: 30px;
  color: #363636;
`;
