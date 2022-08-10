import 'react-native-gesture-handler';
import React, { Component } from 'react'

import AppNavigator from './navigation/AppNavigator'
import Featureds from './src/screens/featured/featured';




export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}