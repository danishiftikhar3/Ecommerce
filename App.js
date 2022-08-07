import { Text, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Home from './src/screens/home/index'
import HeaderA from './src/components/HeaderA'
import ComponentA from './src/screens/home/componentA'
import HS1 from './src/screens/hs1'

import Cart from './src/screens/cart'

export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    )
  }
}