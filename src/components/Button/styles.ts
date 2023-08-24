import styled from 'styled-components/native';

import type { PaintedButtonProps } from './types';

const PaintedButton = styled.TouchableOpacity<PaintedButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => {
    return width || 0;
  }}px;
  height: ${({ height }) => {
    return height || 0;
  }}px;
  background-color: ${({ bgColor }) => {
    return bgColor;
  }};
  border-radius: ${({ bRadius }) => {
    return bRadius || 0;
  }}px;
  border: ${({ bColor }) => {
    return bColor || 'none';
  }};
`;
export default PaintedButton;
