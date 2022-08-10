import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../src/screens/home';
import Featureds from '../src/screens/featured/featured';



const Drawer = createDrawerNavigator();

export default function DrawerNav() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Features" component={Featureds} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}