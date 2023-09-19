import { BlurView } from '@react-native-community/blur';
import styled from 'styled-components/native';

import { ContentFooterProps } from './types';

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
  height: 60px;
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
  line-height: 16px;
`;

export const TextContent = styled.Text`
  font-family: 'Signika-Light';
  max-width: 130px;
  color: #cccccc;
  font-size: 10px;
  line-height: 10px;
`;

export const ErrorTextContent = styled.Text`
  font-family: 'Signika-Light';
  width: 300px;
  color: #c70216;
  font-size: 10px;
  line-height: 10px;
`;

export const ContentMain = styled.View`
  max-height: 130px;
`;

export const ContentFooter = styled.View<ContentFooterProps>`
  margin: ${({ isNullChildren }) => {
    return isNullChildren ? '140px 0 0 0' : '46px 16px 16px 0';
  }};
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const ButtonTextContent = styled.Text`
  color: #242f9b;
  font-family: 'Roboto-Regular';
  font-size: 13px;
  line-height: 15px;
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
  line-height: 16px;
`;

export const TextContentInput = styled.TextInput`
  font-family: 'Signika-Light';
  max-width: 130px;
  color: #cccccc;
  font-size: 10px;
  line-height: 10px;
`;

export const TextContentContainerSubTask = styled.View`
  margin-bottom: 110px;
`;
