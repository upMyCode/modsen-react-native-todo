import styled from 'styled-components/native';

export const Wrapper = styled.View`
  display: flex;
  align-items: center;
  margin-top: 17px;
  position: relative;
`;
export const SearchBar = styled.TextInput`
  width: 280px;
  height: 48px;
  border-radius: 12px;
  background-color: #ffffff;
  color: #888888;
  padding: 12.5px 20px 12.5px 48px;
  box-shadow: 0 4px rgba(0, 0, 0, 0.25);
`;

export const SearchImage = styled.Image`
  position: absolute;
  top: 16px;
  left: 67px;
  z-index: 100;
`;

export const ErrorContentWrapper = styled.View`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 50px;
  left: 55px;
  z-index: 100;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 4px rgba(0, 0, 0, 0.25);
  width: 280px;
`;

export const ErrorTextContent = styled.Text`
  font-family: 'Signika-Light';
  color: #c70216;
  font-size: 10px;
  line-height: 9.86px;
  padding: 10px 5px;
`;
