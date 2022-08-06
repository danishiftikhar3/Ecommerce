import React from 'react';
import {
    View, Text, Image,
    StyleSheet, ImageBackground
} from 'react-native';

function ComponentA(props) {
    return (
        <View>

            <View style={{
                width: '100%', flexDirection: 'row',
                justifyContent: 'center', alignSelf: 'center',
                alignItems: 'center', alignContent: 'center',
                justifyContent: "space-around"
            }}>
                <View style={styles.mmainview1}>
                    <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                    </View>
                </View>
                <View style={styles.mmainview2}>
                    <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                    </View>
                </View>
            </View>

            <View style={{
                width: '100%', flexDirection: 'row',
                justifyContent: 'center', alignSelf: 'center',
                alignItems: 'center', alignContent: 'center',
                justifyContent: "space-around"
            }}>
                <View style={styles.mmainview3}>
                    <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                    </View>
                </View>
                <View style={styles.mmainview4}>
                    <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                    </View>
                </View>
            </View>
            <View style={styles.hv1} >
                <View style={styles.hv11}>
                    <Text style={styles.t1}>Best Deals </Text>
                    {/* <Image style={styles.i11} source={require('../../assets/g16.png')}></Image> */}

                </View>
                <Image style={styles.i12} source={require('../../assets/line1.png')}></Image>

            </View>


        </View>
    );
}

export default ComponentA;
const styles = StyleSheet.create({
    mbackimg: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.5
    },
    mmainview1: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mmainview2: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mmainview3: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mmainview4: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    hv11: {
        flexDirection: 'row'
    },
    hv1: {
        alignSelf: 'center',
        alignContent: 'center'

    },
    i12: {
        width: 40,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})