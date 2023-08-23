import styled from 'styled-components/native';

import type {
  RedirectionButtonWrapperProps,
  TextContainerProps,
  TextContentProps,
} from './types';

export const TextContainer = styled.View<TextContainerProps>`
  display: flex;
  align-items: center;
  margin-top: ${({ marginToFromTitleContainer }) => {
    return marginToFromTitleContainer;
  }}px;
`;
export const Title = styled.Text`
  font-family: 'Jost-Medium';
  color: #363636;
  font-size: 24px;
  line-height: 34.68px;
`;

export const TextContent = styled.Text<TextContentProps>`
  font-family: 'Roboto-Regular';
  color: #8d93ab;
  font-size: 12px;
  width: 276px;
  text-align: center;
  margin-top: ${({ marginToFromTextContentContainer }) => {
    return marginToFromTextContentContainer;
  }}px;
  line-height: 14.06px;
`;

export const RedirectionButtonContext = styled.Text`
  color: #ffffff;
`;

export const RedirectionButtonWrapper = styled.View<RedirectionButtonWrapperProps>`
  flex: 1;
  align-items: center;
  margin-top: ${({ marginToFromButtonContainer }) => {
    return marginToFromButtonContainer;
  }}px;
`;

export const RedirectionButton = styled.TouchableOpacity`
  width: 240px;
  height: 40px;
  background-color: #9ba3eb;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  font-family: 'Roboto-Medium';
`;
