import styled from 'styled-components/native';

import type { TextContainerProps } from './types';

export const TextContainer = styled.View<TextContainerProps>`
  display: flex;
  align-items: center;
  margin-top: ${({ marginToFromTextContainer }) => {
    return marginToFromTextContainer;
  }}px;
`;
export const Title = styled.Text`
  font-family: 'Jost-Regular';
  font-weight: 500;
  color: #363636;
  font-size: 24px;
  width: 200px;
  line-height: 34.68px;
`;

export const TextContent = styled.Text`
  font-family: 'Roboto-Regular';
  color: #8d93ab;
  font-size: 12px;
  width: 276px;
  text-align: center;
  margin-top: 8px;
  line-height: 14.06px;
`;

export const RedirectionButtonContext = styled.Text`
  color: #ffffff;
`;

export const RedirectionButtonWrapper = styled.View`
  flex: 1;
  align-items: center;
`;

export const RedirectionButton = styled.TouchableOpacity`
  width: 240px;
  height: 40px;
  background-color: #9ba3eb;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  margin-top: 32px;
  font-family: 'Roboto-Medium';
`;
