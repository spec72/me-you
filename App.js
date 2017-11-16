/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { configureStore }  from '@redux/configureStore';

import { RootNavigator } from "@components";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <RootNavigator />
      </Provider>
    );
  }
}
