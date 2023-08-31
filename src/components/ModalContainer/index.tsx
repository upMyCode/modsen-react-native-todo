import { Button } from '@root';
import { AsteriskOff, AsteriskOn } from '@src/assets';
import { changeStatusToDisable } from '@src/slices/modalSlice';
import { useAppDispatch } from '@src/store/hooks';
import React, { useState } from 'react';
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
  TextContentInput,
  Title,
  TitleInput,
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
  isEditableModal,
  modalFirstHandlerText,
  modalSecondHandlerText,
  titleMaxSymbol,
  textContextMaxSymbol,
  modalTitle,
  handleChangeTitle,
  modalTextContent,
  handleChangeTextContent,
  importantTaskStatus,
  handleImportantTaskStatus,
}: ModalProps) {
  const ASTERISK_ON_IMAGE = Image.resolveAssetSource(AsteriskOn).uri;
  const ASTERISK_OFF_IMAGE = Image.resolveAssetSource(AsteriskOff).uri;
  const dispatch = useAppDispatch();

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
              {isEditableModal ? (
                <View>
                  <TitleInput
                    editable={isEditableModal}
                    value={modalTitle}
                    placeholderTextColor="#363636"
                    onChangeText={handleChangeTitle}
                    placeholder={title}
                    maxLength={titleMaxSymbol}
                  />
                  <TextContentInput
                    editable={isEditableModal}
                    placeholderTextColor="#cccccc"
                    value={modalTextContent}
                    onChangeText={handleChangeTextContent}
                    placeholder={textContent}
                    maxLength={textContextMaxSymbol}
                    numberOfLines={2}
                    multiline
                  />
                </View>
              ) : (
                <View>
                  <Title>{title}</Title>
                  <TextContent>{textContent}</TextContent>
                </View>
              )}
            </TextContentContainer>
            <Button
              disabled={!isEditableModal}
              width={32}
              height={32}
              mt={15.2}
              boxShadow={false}
              onPress={handleImportantTaskStatus}
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
              <ButtonTextContent>{modalFirstHandlerText}</ButtonTextContent>
            </Button>
            <Button width={46} height={15} ml={24} onPress={modalSecondHandler}>
              <ButtonTextContent>{modalSecondHandlerText}</ButtonTextContent>
            </Button>
          </ContentFooter>
        </Content>
      </Wrapper>
    </Modal>
  );
}
