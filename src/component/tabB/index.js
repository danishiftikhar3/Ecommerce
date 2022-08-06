import * as React from 'react';
import { Text, View, Image } from 'react-native';

import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Fontisto from 'react-native-vector-icons/Fontisto'
import s3 from '../../screens/s3/index';
import s7 from '../../screens/s7/index';
import profilesv from '../../screens/profilesv/index';
import lssetting1 from '../../screens/lssetting1/index';









const Tab = createMaterialBottomTabNavigator();

export default function App1() {
  return (

    <Tab.Navigator>
      <Tab.Screen name="s3" component={s3}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarColor: '#1397D5',
          tabBarIcon: ({ color }) => (
            <Image style={{width:20,height:20}} source={require('../../assets/dashb.png')}></Image>
          ),
        }} />
      <Tab.Screen name="s7" component={s7}
        options={{
          tabBarLabel: 'Chat',
          tabBarColor: '#1397D5',

          tabBarIcon: ({ color }) => (
            <Image style={{width:25,height:25}} source={require('../../assets/chatd.png')}></Image>
          ),
        }} />

      <Tab.Screen name="profilesv" component={profilesv}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#1397D5',

          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" color={color} size={26} />
          ),
        }} />
        <Tab.Screen name="lssetting1" component={lssetting1}
        options={{
          tabBarLabel: 'Live Streaming',
          tabBarColor: '#1397D5',

          tabBarIcon: ({ color }) => (
            <Image style= {{width:25, height:25}} source={require('../../assets/video.png')}></Image>

          ),
        }} />




    </Tab.Navigator>



  );
}
