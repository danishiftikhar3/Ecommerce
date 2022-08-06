import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
            <View style={{ backgroundColor: 'white',height:700 }}>
                <View style={styles.mainview}>
                    <View style={styles.view1}>
                        <TouchableOpacity>
                            <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/m35mm.png')}></Image>
                        <Text style={styles.txt1}>Thank You</Text>
                    </View>
                </View>
                <View style={{ borderWidth: 1, marginTop: 10, borderBottomRightRadius: 25, borderBottomLeftRadius: 25, borderColor: 'transparent', backgroundColor: '#f4fdf8', height: 350 }}>

                    <View style={{ flexDirection: 'row', }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image style={styles.client} source={require('../../assets/mgreentick.png')}></Image>

                        </View>
                        <View>
                            <Text style={styles.txt2}>Thank You!</Text>
                            <Text style={styles.txt3}>Your Order has been Recieved</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "75%", alignSelf: 'center', marginTop: 25 }}>
                        <Text style={styles.txt4}>Order Number:</Text>
                        <Text style={styles.txt5}>Date:</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: "75%", alignSelf: 'center' }}>
                        <Text style={styles.txt6}>2600</Text>
                        <Text style={styles.txt7}>24,Aug 2020</Text>
                    </View>
                    <View style={{ flexDirection: "row", width: "50%", justifyContent: 'space-between', alignSelf: 'center', marginTop: 60 }}>
                        <Text style={styles.txt8}>Total:</Text>
                        <Text style={styles.txt9}>$930.00</Text>

                    </View>
                
                </View>

                <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile'); }} >
                        <View style={{ alignSelf: 'center', borderWidth: 1, backgroundColor: '#1190CB', width: '50%', borderRadius: 20, height: 50, marginTop: 120, borderColor: 'transparent' }}>

                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, marginTop: 10, fontFamily: 'sans-serif', textAlignVertical: 'center' }}>Back To Home</Text>
                        </View>
                    </TouchableOpacity>

            </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        borderBottomColor: '#c0c0c0',
        borderBottomWidth: 2

    },
    backimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10

    },
    homeimg: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5
    },
    view1: {
        width: '30%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,
        textAlignVertical: "center"
    },
    client: {
        resizeMode: 'contain',
        width: 75,
        height: 120,
        marginLeft: 25
    },
    txt2: {
        fontWeight: 'bold',
        fontSize: 17,
        marginTop: 35,
        marginLeft: 10

    },
    txt3: {
        color: "#8392A5",
        fontSize: 15,
        marginLeft: 10
    },
    txt4: {
        color: "#8392A5",
        fontSize: 15,

    },
    txt5: {
        color: "#8392A5",
        fontSize: 15,
        marginRight: 50

    },
    txt6: {
        fontWeight: 'bold',
        fontSize: 15,

    },
    txt7: {
        fontWeight: 'bold',
        fontSize: 15,

    },
    txt8: {
        color: "#8392A5",
        fontSize: 15,


    },
    txt9: {
        fontWeight: 'bold',
        fontSize: 15,

    },

});