import * as React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store';
import MainNavigator from './navigation';

const MainApp = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default MainApp;
