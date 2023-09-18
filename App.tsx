import { StackScreens } from '@root';
import store, { persistor } from '@src/store';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StackScreens />
      </PersistGate>
    </Provider>
  );
}

export default App;
