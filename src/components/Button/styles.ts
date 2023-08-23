import styled from 'styled-components/native';

import type { PaintedButtonProps } from './types';

const PaintedButton = styled.TouchableOpacity<PaintedButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => {
    return width;
  }}px;
  height: ${({ height }) => {
    return height;
  }}px;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  border-radius: ${({ bRadius }) => {
    return bRadius && bRadius;
  }}px;
  border: ${({ bColor }) => {
    return bColor || 'none';
  }};
`;
export default PaintedButton;
