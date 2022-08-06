import React from 'react';
import {
    View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity
} from 'react-native';
import Constants from "expo-constants";


function HeaderA(props) {
    return (
        <SafeAreaView style={styles.Screen}>
            <View style={styles.view1}>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('hs1'); }}>
                    <Image style={styles.backimg} source={require('../assets/g6.png')}></Image>
                </TouchableOpacity>
            </View>
            <View style={styles.view2}>
                <Image style={styles.homeimg} source={require('../assets/home.png')}></Image>

            </View>
        </SafeAreaView>
    );
}

export default HeaderA;
//
const styles = StyleSheet.create({
    Screen: {
        flexDirection: 'row',
        height: 50,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        alignSelf: 'center',
        paddingTop: Constants.statusBarHeight,

    },
    backimg: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        justifyContent: 'center',
    },


    view1: {
        justifyContent: 'center',
        width: '50%',
        alignSelf: 'center',

    },
    view2: {

        width: '50%',


    },
    homeimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },

})