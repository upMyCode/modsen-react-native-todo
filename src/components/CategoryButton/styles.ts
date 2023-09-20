import styled from 'styled-components/native';

import { WrapperProps } from './types';

export const CounterTaskContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 8px;
`;

export const CounterTaskTextContent = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
`;

export const TaskTextContent = styled.Text`
  font-family: 'Jost-Medium';
  font-size: 16px;
  line-height: 23px;
  color: #ffffff;
  margin-top: 8px;
`;

export const Wrapper = styled.View<WrapperProps>`
  margin: ${({ isThird, isBigDevice }) => {
    return isThird
      ? '16px 0 0 0'
      : isBigDevice
      ? '16px 14px 0 15px'
      : '16px 12px 0 12px';
  }};
`;
