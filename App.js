import 'react-native-gesture-handler';
import React, { Component } from 'react'

import AppNavigator from './navigation/AppNavigator'
import Featureds from './src/screens/featured/featured';
import Wishlist from './src/screens/wishlist';
import Cart from './src/screens/cart';




export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    )
  }
}