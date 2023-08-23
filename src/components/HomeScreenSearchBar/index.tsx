import { SearchImg } from '@src/assets';
import React, { useState } from 'react';
import { Image } from 'react-native';

import { SearchBar, SearchImage, Wrapper } from './styles';

export default function HomeScreenSearchBar() {
  const [value, onChangeText] = useState('');
  const SEARCH_IMAGE = Image.resolveAssetSource(SearchImg).uri;

  const handleChangeText = (text: string) => {
    onChangeText(text);
  };
  return (
    <Wrapper>
      <SearchImage
        source={{ uri: SEARCH_IMAGE }}
        width={17.06}
        height={17.06}
      />
      <SearchBar
        editable
        value={value}
        onChangeText={handleChangeText}
        placeholder="Search tasks"
        maxLength={80}
      />
    </Wrapper>
  );
}
