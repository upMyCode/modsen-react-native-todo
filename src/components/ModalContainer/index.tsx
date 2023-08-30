import { Button } from '@root';
import { AsteriskOff, AsteriskOn } from '@src/assets';
import { changeStatusToDisable } from '@src/slices/modalSlice';
import { useAppDispatch } from '@src/store/hooks';
import React from 'react';
import { Image, Modal, View } from 'react-native';

import {
  Blur,
  ButtonTextContent,
  Content,
  ContentFooter,
  ContentHeader,
  ContentMain,
  TextContent,
  TextContentContainer,
  Title,
  Wrapper,
} from './styles';
import { ModalProps } from './types';

export default function ModalContainer({
  children,
  title,
  textContent,
  modalVisible,
  important,
  modalFirstHandler,
  modalSecondHandler,
}: ModalProps) {
  const ASTERISK_ON_IMAGE = Image.resolveAssetSource(AsteriskOn).uri;
  const ASTERISK_OFF_IMAGE = Image.resolveAssetSource(AsteriskOff).uri;
  const dispatch = useAppDispatch();
  const importantTaskStatus = false;

  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        dispatch(changeStatusToDisable());
      }}
    >
      <Blur
        blurType="light"
        blurAmount={8}
        reducedTransparencyFallbackColor="white"
      />
      <Wrapper>
        <Content>
          <ContentHeader>
            <TextContentContainer>
              <Title>{title}</Title>
              <TextContent>{textContent}</TextContent>
            </TextContentContainer>
            <Button
              width={32}
              height={32}
              mt={15.2}
              boxShadow={false}
              onPress={() => {
                return console.log('Change important status');
              }}
            >
              {important ? (
                <Image
                  width={32}
                  height={32}
                  source={{
                    uri: importantTaskStatus
                      ? ASTERISK_ON_IMAGE
                      : ASTERISK_OFF_IMAGE,
                  }}
                />
              ) : (
                <View />
              )}
            </Button>
          </ContentHeader>
          <ContentMain>{children}</ContentMain>
          <ContentFooter>
            <Button width={43} height={15} onPress={modalFirstHandler}>
              <ButtonTextContent>Cancel</ButtonTextContent>
            </Button>
            <Button width={16} height={15} ml={24} onPress={modalSecondHandler}>
              <ButtonTextContent>Ok</ButtonTextContent>
            </Button>
          </ContentFooter>
        </Content>
      </Wrapper>
    </Modal>
  );
}
