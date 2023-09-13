import { BlurView } from '@react-native-community/blur';
import styled from 'styled-components/native';

import { WrapperProps } from './types';

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
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

export const SpreadMenuButtonContext = styled.Text`
  font-size: 10px;
  font-family: 'Signika-Light';
  line-height: 9.86px;
  color: #194aa6;
`;

export const TaskTextContent = styled.View`
  margin-left: 4px;
  display: flex;
  flex-direction: column;
`;

export const SpreadMenu = styled.View`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 100;
  top: 40%;
  left: 20%;
  border-radius: 12px;
  background-color: #ffffff;
  width: 250px;
  height: 75px;
`;

export const SpreadMenuContainer = styled.View`
  display: flex;
  margin: 10px 20px;
`;

export const SpreadMenuContainerText = styled.Text`
  font-size: 13px;
  font-family: 'Signika-Light';
  line-height: 16.02px;
  color: #363636;
  text-align: center;
`;

export const SpreadMenuContainerButtons = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const Blur = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const ButtonListContainer = styled.View`
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  width: 150px;
  justify-content: space-between;
`;

export const SubtaskListWrapper = styled.ScrollView`
  margin-left: 72px;
  margin-bottom: 4px;
`;
