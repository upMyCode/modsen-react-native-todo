import styled from 'styled-components/native';

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  display: flex;
  background-color: #ffffff;
  width: 260px;
  height: 232px;
  box-shadow: 1px 1px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
`;

export const ContentHeader = styled.View`
  margin: 0 16px 0 17px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const TextContent = styled.View`
  max-width: 130px;
`;
