import "react-native-gesture-handler";
import React, { Component } from "react";

import AppNavigator from "./navigation/AppNavigator";

import SplashScreen from "./src/screens/splash";
import { Provider } from "react-redux";
import configureReduxStore from "./store/configStore";

const store = configureReduxStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
