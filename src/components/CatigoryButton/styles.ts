import styled from 'styled-components/native';

interface WrapperProps {
  isThird: boolean | undefined;
}

export const CounterTaskContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  margin-right: 8px;
`;

export const CounterTaskTextContent = styled.Text`
  font-family: 'Jost-Regular';
  font-size: 16px;
  line-height: 23.12px;
  color: #ffffff;
`;

export const TaskTextContent = styled.Text`
  font-family: 'Jost-Medium';
  font-size: 16px;
  line-height: 23.12px;
  color: #ffffff;
  margin-top: 8px;
`;

export const Wrapper = styled.View<WrapperProps>`
  margin: ${({ isThird }) => {
    return isThird ? '16px 0 0 0' : '16px 14px 0 15px';
  }};
`;
