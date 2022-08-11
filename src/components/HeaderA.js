import React from 'react'
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Modal, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import color from '../../constants/color';
import { DrawerActions } from '@react-navigation/native';


export default function HeaderA(props) {
    const navigation = useNavigation();

    return (
        <View>
            <View style={styles.mainview}>
                <TouchableOpacity style={styles.view1} onPress={() => { navigation.dispatch(DrawerActions.openDrawer()); }}>
                    <Image style={styles.backimg} source={require('../images/drawerButton.png')}></Image>
                </TouchableOpacity>
                <View style={styles.view2}>
                    <Image style={styles.homeimg} source={require('../images/logo.png')}></Image>
                    <Text style={styles.txt1}>{props.Title}</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity onPress={props.onPress} style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        <Image style={[styles.img1, { tintColor: color.header }, props.style]} source={require('../images/filter.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    view1: {
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10
        // backgroundColor: 'red'

    },
    mainview: {
        flexDirection: 'row',
        height: 70,
        padding: 10,
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '100%',
        alignSelf: 'center',
        position: "relative",
        backgroundColor: color.header
    },
    backimg: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,


    },
    homeimg: {
        width: 40,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,
        textTransform: 'uppercase',
        // fontWeight: 'bold',
        color: color.black
    },
    img1: {
        width: 50,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
});
