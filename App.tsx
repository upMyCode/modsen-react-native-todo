import React from 'react';
import { SafeAreaView } from 'react-native';

import TestComp from '@components/TestComp';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <TestComp />
    </SafeAreaView>
  );
}

export default App;
