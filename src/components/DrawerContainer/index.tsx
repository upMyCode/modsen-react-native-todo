import type { TaskItem } from '@constants/drawerButtons';
import { TASK_LIST } from '@constants/drawerButtons';
import { BackButton } from '@root';
import React from 'react';
import type { ListRenderItemInfo } from 'react-native';
import { FlatList, Image } from 'react-native';

import { Container, TextContext, Wrapper } from './styles';
import { NavigationProps } from './types';

const renderItem = ({ item }: ListRenderItemInfo<TaskItem>) => {
  const TASK_IMAGE = Image.resolveAssetSource(item.img).uri;
  return (
    <Container mTop={item.mTop}>
      <Image width={20} height={20} source={{ uri: TASK_IMAGE }} />
      <TextContext>{item.textContent}</TextContext>
    </Container>
  );
};

export default function DrawerContainer({ navigation }: NavigationProps) {
  return (
    <Wrapper>
      <BackButton navigation={navigation} />

      <FlatList
        data={TASK_LIST}
        keyExtractor={({ id }) => {
          return id;
        }}
        renderItem={renderItem}
      />
    </Wrapper>
  );
}
