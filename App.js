import { Text, View, SafeAreaView } from 'react-native'
import React, { Component } from 'react'
import Home from './src/screens/home/index'
import HeaderA from './src/components/HeaderA'
import ComponentA from './src/screens/home/componentA'


import Cart from './src/screens/cart'
import BestSellers from './src/screens/home/BestSellers'
import Segmented from './src/screens/home/Segmented'
import BestDeals from './src/screens/home/BestDeals'
import Product from './src/screens/product'



import Featured from './src/screens/featured'



export default class App extends Component {
  render() {
    return (
      <SafeAreaView>
        <Product />
      </SafeAreaView>
    )
  }
}