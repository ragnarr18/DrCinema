import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './src/reducers/test';
import Navigator from './src/routes';

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
      <Navigator />
    </Provider>
  );
}
