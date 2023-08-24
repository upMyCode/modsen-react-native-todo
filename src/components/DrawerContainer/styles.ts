import styled from 'styled-components/native';

import { ContainerProps } from './types';

export const Wrapper = styled.SafeAreaView`
  margin-left: 16px;
`;

export const Container = styled.View<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: ${({ mTop }) => {
    return mTop;
  }}px;
`;

export const TextContext = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 12px;
  line-height: 17.34px;
  color: #888888;
  margin-left: 2px;
`;
