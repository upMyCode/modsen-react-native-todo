import React from 'react';
import { Alert, Modal, Text } from 'react-native';

import { Content, ContentHeader, TextContent, Wrapper } from './styles';
import { ModalProps } from './types';

export default function ModalContainer({
  children,
  title,
  textContent,
  modalVisible,
  setModalVisible,
}: ModalProps) {
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        setModalVisible(!modalVisible);
      }}
    >
      <Wrapper>
        <Content>
          <ContentHeader>
            <TextContent>
              <Text>{title}</Text>
              <Text>{textContent}</Text>
            </TextContent>
          </ContentHeader>
          {children}
        </Content>
      </Wrapper>
    </Modal>
  );
}
