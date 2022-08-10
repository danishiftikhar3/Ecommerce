import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../src/screens/home/index'
import Product from '../src/screens/product';
import Featureds from '../src/screens/featured/featured';
// import Featured from '../src/screens/featured/index';

const Stack = createNativeStackNavigator();

function AppNavigator(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Featureds' screenOptions={{ headerShown: false }}>

                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Product" component={Product} />
                {/* <Stack.Screen name="Featured" component={Featured} /> */}
                <Stack.Screen name="Featureds" component={Featureds} />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
