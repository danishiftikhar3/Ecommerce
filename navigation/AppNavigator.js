import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from '../src/screens/home/index'
import Product from '../src/screens/product';
import Featureds from '../src/screens/featured/featured';
import TabNavigation from './TabNavigator';
import DrawerNav from './DrawerNav';



const Stack = createNativeStackNavigator();

function AppNavigator(props) {
    return (

        <NavigationContainer>
            <Stack.Navigator initialRouteName='Tab' screenOptions={{ headerShown: false }}>
                <Stack.Screen name="DrawerNav" component={DrawerNav} />

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product" component={Product} />
                <Stack.Screen name="Tab" component={TabNavigation} />


            </Stack.Navigator>
        </NavigationContainer>

    );
}

export default AppNavigator;
