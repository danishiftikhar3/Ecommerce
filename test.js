import React from 'react';
import {
    View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity
} from 'react-native';
import Constants from "expo-constants";
import color from '../../constants/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';


function HeaderB(props) {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.Screen}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image style={styles.backimg} source={require('../images/backArrow.png')}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.dispatch(DrawerActions.openDrawer()); }}>
                    <Image style={styles.backimg} source={require('../images/drawerButton.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <Image style={styles.homeimg} source={require('../images/logo.png')}></Image>

            </View>
        </SafeAreaView>
    );
}

export default HeaderB;
//
const styles = StyleSheet.create({
    Screen: {
        flexDirection: 'row',
        height: 70,
        padding: 10,
        justifyContent: 'space-around',
        alignContent: 'center',
        width: '100%',
        alignSelf: 'center',
        paddingTop: Constants.statusBarHeight,
        position: "relative",
        backgroundColor: color.header

    },
    backimg: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        justifyContent: 'center',
        margin: 15
        // marginTop: 120,

    },


    view1: {
        justifyContent: 'center',
        width: '30%',
        alignSelf: 'center',
        flexDirection: 'row'
        // backgroundColor: 'red'

    },
    view2: {
        justifyContent: 'center',

        width: '50%',


    },
    homeimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

})