import { BlurView } from '@react-native-community/blur';
import styled from 'styled-components/native';

import { ContentHeaderProps } from './types';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  background-color: #ffffff;
  width: 260px;
  height: 232px;
  shadow-color: #000;
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 2px;
  elevation: 1;
  border-radius: 18px;
`;

export const ContentHeader = styled.View`
  padding: 0 16px 0 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextContentContainer = styled.View`
  max-width: 160px;
  margin-top: 21px;
`;

export const Title = styled.Text`
  font-family: 'Signika-Light';
  color: #363636;
  font-size: 13px;
  line-height: 16.02px;
`;

export const TextContent = styled.Text`
  font-family: 'Signika-Light';
  max-width: 130px;
  color: #cccccc;
  font-size: 8px;
  line-height: 9.86px;
`;

export const ContentMain = styled.View`
  max-height: 130px;
`;

export const ContentFooter = styled.View`
  margin: 26px 16.1px 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonTextContent = styled.Text`
  color: #242f9b;
  font-family: 'Roboto-Regular';
  font-size: 13px;
  line-height: 15.23px;
`;

export const Blur = styled(BlurView)`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

export const TitleInput = styled.TextInput`
  font-family: 'Signika-Light';
  color: #363636;
  font-size: 13px;
  line-height: 16.02px;
`;

export const TextContentInput = styled.TextInput`
  font-family: 'Signika-Light';
  max-width: 130px;
  color: #cccccc;
  font-size: 8px;
  line-height: 9.86px;
`;
