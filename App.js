import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider, applyMiddleware } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Navigator from './src/routes';

export default function App() {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <Navigator />
    </Provider>
  );
}
