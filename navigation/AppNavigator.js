import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../src/screens/home/index'
import Product from '../src/screens/product';

const Stack = createNativeStackNavigator();

function AppNavigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product" component={Product} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
