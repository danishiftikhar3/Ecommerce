import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
    View,
    Text,
    StyleSheet,
    useWindowDimensions,
    Button,
    Image,
    Dimensions,
    SafeAreaView
} from 'react-native';
import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import color from '../constants/color';

import Home from "../src/screens/home";
import Product from '../src/screens/product';
import Featureds from '../src/screens/featured/featured';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Wishlist from '../src/screens/wishlist';
import Cart from '../src/screens/cart/cart';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const windowHeight = Dimensions.get('window').height;

function CustomDrawerContent(props) {
    const width = useWindowDimensions().width * 0.3;

    return (
        <DrawerContentScrollView {...props}>
            <SafeAreaView style={styles.menuContainer}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')} style={styles.bar}>
                    <View style={styles.inBar} >
                        <Image source={require('../src/images/home.png')} />
                    </View>
                    <Text style={styles.txt}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Featureds')} style={styles.bar}>
                    <View style={styles.inBar} >
                        <Image source={require('../src/images/home.png')} />
                    </View>
                    <Text style={styles.txt}>Features</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Wishlist')} style={styles.bar}>
                    <View style={styles.inBar} >
                        <Image source={require('../src/images/home.png')} />
                    </View>
                    <Text style={styles.txt}>Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => props.navigation.navigate('Cart')} style={styles.bar}>
                    <View style={styles.inBar} >
                        <Image source={require('../src/images/home.png')} />
                    </View>
                    <Text style={styles.txt}>Cart</Text>
                </TouchableOpacity>


            </SafeAreaView>
        </DrawerContentScrollView>
    );
}

function TabNavigation() {
    return (
        <SafeAreaProvider>
            <Tab.Navigator screenOptions={{
                headerShown: false, tabBarStyle: { borderTopLeftRadius: 25, borderTopRightRadius: 25 }, tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: color.white, tabBarActiveBackgroundColor: color.header, tabBarInactiveBackgroundColor: color.header,
            }}>
                <Tab.Screen name="Home" component={StackScreen}
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
                <Tab.Screen name="Wishlist" component={Wishlist}
                    options={{
                        tabBarLabel: 'Wishlist',
                        tabBarColor: 'red',

                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="home" color={color} size={26} />
                        ),
                    }} />
                <Tab.Screen name="Cart" component={Cart}
                    options={{
                        tabBarLabel: 'Cart',
                        tabBarColor: 'red',

                        tabBarIcon: ({ color }) => (
                            <FontAwesome name="home" color={color} size={26} />
                        ),
                    }} />
            </Tab.Navigator>
        </SafeAreaProvider>

    );
}

function StackScreen() {
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Product" component={Product} />



        </Stack.Navigator>

    );
}


export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <Drawer.Navigator drawerContent={(props) => <CustomDrawerContent {...props} />} initialRouteName="Wishlist" screenOptions={{ headerShown: false }}>
                    <Drawer.Screen name="Homed" component={TabNavigation} />


                </Drawer.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
    menuContainer: {
        flex: 1,
        backgroundColor: color.header,
        height: windowHeight,
        alignContent: 'center',
        justifyContent: 'center',
    },
    bar: {
        backgroundColor: color.white,
        width: '80%',
        height: 60,
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5

    },
    inBar: {
        backgroundColor: color.header,
        height: '80%',
        margin: '5%',
        width: '20%',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt: {
        fontWeight: 'bold',
        fontSize: 18,
        color: color.darkBlue
    },


});