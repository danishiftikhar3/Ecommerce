import 'react-native-gesture-handler';
import React, { Component } from 'react'

import AppNavigator from './navigation/AppNavigator'

import SplashScreen from './src/screens/splash';





export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}