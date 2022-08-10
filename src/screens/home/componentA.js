import React from 'react';
import {
    View, Text, Image,
    StyleSheet, ImageBackground, TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';



function ComponentA() {
    const navigation = useNavigation();

    return (

        <View style={styles.main}>

            <View style={styles.view1}>
                <TouchableOpacity onPress={() => navigation.navigate('Product')} style={styles.view12}>
                    <ImageBackground style={styles.mbackimg} source={require('../../images/kidsFashion.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                    </View>
                </TouchableOpacity>
                <View style={styles.view12}>
                    <ImageBackground style={styles.mbackimg} source={require('../../images/womenFashion.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Women Fashion</Text>
                    </View>
                </View>
            </View>

            <View style={styles.view1}>
                <View style={styles.view12}>
                    <ImageBackground style={styles.mbackimg} source={require('../../images/menFashion.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                    </View>
                </View>
                <View style={styles.view12}>
                    <ImageBackground style={styles.mbackimg} source={require('../../images/accessories.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Accessories</Text>
                    </View>
                </View>
            </View>


        </View>
    );
}

export default ComponentA;
const styles = StyleSheet.create({
    main: {
        flex: 1,
        marginTop: 15
    },
    view1: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent: "space-around"
    },
    mbackimg: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.8,
        overflow: "hidden",
        borderRadius: 20
    },
    view12: {
        borderWidth: 1,
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        alignSelf: 'center',
        marginBottom: 25
    },
})