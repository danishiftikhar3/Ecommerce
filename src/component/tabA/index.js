import * as React from 'react';
import { Text, View, Image } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import home from '../../screens/home/index';
import wishlist from '../../screens/wishlist/index';
import cart from '../../screens/cart/index';
import profile from '../../screens/profile/index';



const Tab = createMaterialBottomTabNavigator();

export default function App1() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="home" component={home}
        options={{
          tabBarLabel: 'home',
          tabBarColor: '#1397D5',

          tabBarIcon: ({ color }) => (
            <FontAwesome name="home" color={color} size={26} />
          ),
        }} />

      <Tab.Screen name="wishlistt" component={wishlist}

        options={{
          tabBarLabel: 'Wishlist',
          tabBarColor: '#1397D5',

          tabBarIcon: ({ color }) => (
            <Image style={{ width: 25, height: 25 }} source={require('../../assets/wishlist.png')}></Image>
          ),
        }} />
      <Tab.Screen name="cart" component={cart}

        options={{
          tabBarLabel: 'Cart',
          tabBarColor: '#1397D5',


          tabBarIcon: ({ color }) => (
            <FontAwesome name="shopping-bag" color={color} size={26} />
          ),
        }} />
      <Tab.Screen name="profile" component={profile}

        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1397D5',


          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />

          ),
        }} />



    </Tab.Navigator>



  );
}
