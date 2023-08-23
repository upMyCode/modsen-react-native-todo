import styled from 'styled-components/native';

import { WrapperProps } from './types';

const Wrapper = styled.View<WrapperProps>`
  margin-top: ${({ marginToFromImageContainer }) => {
    return marginToFromImageContainer;
  }}px;
`;

export default Wrapper;
