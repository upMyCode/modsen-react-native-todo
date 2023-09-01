import styled from 'styled-components/native';

import { FooterProps } from './types';

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  margin: 9.5px 16px 0 16px;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const Title = styled.Text`
  font-family: 'Jost-Bold';
  font-weight: 600;
  font-size: 20px;
  line-height: 28.9px;
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
  margin-bottom: 10px;
  transform: scale(0.5, 0.5);
`;

export const DatePeriodText = styled.Text`
  font-family: 'Signika-Light';
  font-size: 16px;
  line-height: 16.02px;
  color: #888888;
`;

export const Main = styled.View`
  height: 50%;
  margin-top: 20px;
`;
