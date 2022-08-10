import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


import Home from '../src/screens/home/index'
import Product from '../src/screens/product';
import Featureds from '../src/screens/featured/featured';
import color from '../constants/color';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: { position: 'absolute', backgroundColor: color.header, borderRadius: 20 }, tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: color.white,
        }}>
            <Tab.Screen name="Home" component={Home}
                options={{
                    tabBarLabel: 'Home',
                    // tabBarActiveTintColor: '#e91e63',
                    tabBarColor: '#1397D5',
                    tabBarIcon: ({ color }) => (<FontAwesome name="home" color={color} size={26} />),
                }}

            />
            <Tab.Screen name="Featureds" component={Featureds}
                options={{
                    tabBarLabel: 'Features',
                    tabBarColor: 'red',

                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={26} />
                    ),
                }} />
        </Tab.Navigator>

    );
}