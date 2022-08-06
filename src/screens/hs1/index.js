import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, BackHandler, } from 'react-native';









export default class HS1 extends Component {
    constructor(props) {

        super(props);
        this.state = {
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }

    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }

    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: '#006891' }}>
                    <View style={styles.background}>

                        <TouchableOpacity style={{ width: '95%' }} onPress={this.handleBackButtonClick}>
                            <Text style={styles.txt1}>X Close</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image style={styles.client} source={require('../../assets/mclient3.png')}></Image>

                            </View>
                            <View>
                                <Text style={styles.txt4}>Mr.Janson</Text>
                                <Text style={styles.txt2}>123456789</Text>
                                <Text style={styles.txt2}>info@gmail.com</Text>

                            </View>

                        </View>

                    </View>


                    <View style={{ borderWidth: 0.5, borderColor: 'white', width: '90%', alignSelf: "center" }}></View>
                    <View style={styles.bottom}>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('myorders'); }}>

                            <View style={{ flexDirection: "row", marginLeft: 45 }}>
                                <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                                <Text style={styles.myorder}>My Order</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('editaddress'); }}>

                            <View style={{ flexDirection: "row", marginLeft: 45 }}>
                                <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                                <Text style={styles.myorder}>My Address</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: "row", marginLeft: 45 }}>
                                <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                                <Text style={styles.myorder}>Order Tracking</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('paymentsetting'); }}>

                            <View style={{ flexDirection: "row", marginLeft: 45 }}>
                                <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                                <Text style={styles.myorder}>Payment Setting</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('changepassword'); }}>

                            <View style={{ flexDirection: "row", marginLeft: 45 }}>
                                <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                                <Text style={styles.myorder}>Change Password</Text>
                            </View>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <View style={{ flexDirection: "row", marginLeft: 45 }}>
                                <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                                <Text style={styles.myorder}>Logout</Text>
                            </View>
                        </TouchableOpacity>










                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#006891',
        height: 220,
        width: '100%',
    },
    txt1: {
        color: 'white',
        marginTop: 15,
        fontSize: 20,
        alignSelf: 'flex-end',


    },

    txt2: {
        color: 'white',
        marginLeft: 35,
        marginTop: 5,
        fontSize: 16
    },


    client: {
        resizeMode: 'contain',
        width: 95,
        height: 120,
        marginLeft: 50
    },

    btn: {
        borderWidth: 1,
        borderColor: 'white',
        width: '45%',
        marginLeft: 35,
        marginTop: 10,
        borderRadius: 15
    },

    txt3: {
        color: 'white',
        textAlignVertical: "center",
        alignSelf: "center",
        height: 28,
        fontSize: 16
    },
    txt4: {
        color: 'white',
        marginLeft: 35,
        marginTop: 15,
        fontSize: 20,
        fontWeight: 'bold'
    },

    order: {
        resizeMode: 'contain',
        width: 45,
        height: 50,
        marginTop: 25,

    },

    myorder: {
        marginLeft: 15,
        marginTop: 35,
        fontSize: 19,
        color: "white"
    },

    order2: {
        resizeMode: 'contain',
        width: 45,
        height: 50,
        marginTop: 15,

    },

    myorder2: {
        marginLeft: 15,
        marginTop: 30,
        fontSize: 18,
        color: "white",
    },








});