import "react-native-gesture-handler";

import AppNavigator from "./navigation/AppNavigator";

import { Provider } from "react-redux";
import configureReduxStore from "./store/configStore";
import React, { useEffect } from "react";

const store = configureReduxStore();

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
