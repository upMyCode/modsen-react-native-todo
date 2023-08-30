import { StackScreens } from '@root';
import store from '@src/store';
import React from 'react';
import { Provider } from 'react-redux';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <StackScreens />
    </Provider>
  );
}

export default App;
