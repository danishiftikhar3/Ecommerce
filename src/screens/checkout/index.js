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
            <View style={{backgroundColor:'white'}}>
                <View style={styles.mainview}>
                    <View style={styles.view1}>
                        <TouchableOpacity>
                            <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/m35mm.png')}></Image>
                        <Text style={styles.txt1}>Checkout</Text>
                    </View>
                </View>

                <View style={{borderWidth:1,marginTop:10,borderBottomRightRadius:25,borderBottomLeftRadius:25,borderColor:'transparent',backgroundColor:'#f4fdf8',height:350}}>
                <View>
                    <Text style={styles.txt2}>Cart Details</Text>
                </View>
                <View style={{ borderWidth: 1, width: '83%', alignSelf: "center", borderColor: '#c0c0c0c0', marginTop: 20 }}></View>

                <View style={{ flexDirection: "row", justifyContent: 'space-between' }}>
                    <Text style={styles.txt3}>Sub Total</Text>
                    <Text style={styles.txt4}>$900.00</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.txt3}>Shipping Change</Text>
                    <Text style={styles.txt4}>$30.00</Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.txt3}>Cupon Code</Text>
                    <TextInput style={styles.txi1}></TextInput>
                </View>
                <View style={{ borderWidth: 1, width: '83%', alignSelf: "center", borderColor: '#c0c0c0c0', marginTop: 40 }}></View>
                <View style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}>
                    <Text style={styles.txt5}>Total</Text>
                    <Text style={styles.txt6}>$930.00</Text>
                </View>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text  style={styles.txt7}>Address</Text>
                    <TouchableOpacity>
                    <Image style={styles.pencil} source={require('../../assets/mpencil.png')}></Image>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.txt8}>Street 8 Oak City,Faisalabad</Text>
                    <Text style={styles.txt8}>Zip:987456321</Text>
                </View>

                <View style={{ borderWidth: 1, width: '83%', alignSelf: "center", borderColor: '#c0c0c0c0', marginTop: 20 }}></View>
                <View>
                    <Text style={styles.txt8}>Payment</Text>
                    <View style={{flexDirection:'row',borderWidth:1,width:'75%',alignSelf:'center',borderColor:'transparent',backgroundColor:'#eeeeee',marginTop:15}}>
                    <Image style={styles.payment} source={require('../../assets/mpayment.png')}></Image>
                    <TextInput placeholder="XXXX 5562 37896"></TextInput>
                    </View>
                   
                </View>
                <View style={{ borderWidth: 1, width: '65%', alignSelf: "center", borderColor: '#c0c0c0c0', marginTop: 20 }}></View>

                
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('thankyou'); }} >
                        <View style={{ alignSelf: 'center', borderWidth: 1, backgroundColor: '#1190CB', width:'50%', borderRadius: 20, height: 50, marginTop: 15, borderColor: 'transparent' }}>

                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, marginTop: 10, fontFamily: 'sans-serif',textAlignVertical:'center' }}>Place Order</Text>
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
    txt2: {
        fontSize: 19,
        marginLeft: 35,
        marginTop: 15,
        fontWeight: 'bold'

    },
    txt3: {
        fontSize: 17,
        marginLeft: 35,
        marginTop: 15,


    },
    txt4: {
        fontSize: 17,
        marginTop: 15,
        marginRight: 37
    },
    txi1: {
        borderWidth: 1,
        marginTop: 15,
        marginRight: 37,
        height: 35,
        width: '15%'
    },

    txt5: {
        fontSize: 22,
        marginLeft: 35,
        marginTop: 15,
    },
    txt6: {
        fontSize: 22,
        marginTop: 15,
        marginRight: 37
    },
    txt7: {
        fontSize: 17,
        marginLeft: 35,
        marginTop: 15,
    },
    pencil: {
        width: 50,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop:10,
        marginRight: 37
    },
    txt8: {
        fontSize: 15,
        marginLeft: 35,
        marginTop: 10,
    },
    payment: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginRight: 37
    },
});