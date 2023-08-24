import styled from 'styled-components/native';

import type { PositionParams } from './types';

const Circle = styled.Image<{ positionParams: PositionParams }>`
  position: absolute;
  top: ${({ positionParams }) => {
    return positionParams.top ? `${positionParams.top}px` : '';
  }};
  right: ${({ positionParams }) => {
    return positionParams.right ? `${positionParams.right}px` : '';
  }};
  left: ${({ positionParams }) => {
    return positionParams.left ? `${positionParams.left}px` : '';
  }};
  bottom: ${({ positionParams }) => {
    return positionParams.bottom ? `${positionParams.bottom}px` : '';
  }};
`;

export default Circle;
