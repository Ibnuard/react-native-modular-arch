import 'react-native-gesture-handler';
import * as React from 'react';
import {LogBox} from 'react-native';
import MainApp from './src';

LogBox.ignoreAllLogs();

const App = () => {
  return <MainApp />;
};

export default App;
