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
                <View >
                    <View style={styles.background}>

                        <View style={styles.header}>
                                 
                                 <View >
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile'); }}>
                                <Image style={styles.backarrow} source={require('../../assets/marrow.png')}></Image>
                            </TouchableOpacity>
                            </View>

                            <View style={{alignSelf:'center',width:'85%'}}>
                            <Text style={styles.txt1}>Payment Setting</Text>
                            </View>
                        </View>
                        <Image style={styles.location} source={require('../../assets/mpayment.png')}></Image>
                    </View>

                    <View style={styles.bottom}>

                    <View>
                            <Text style={styles.txt2}>Card Number </Text>
                            <TextInput placeholder="897 454455 xxx" style={styles.placeholder}></TextInput>
                           
                        </View>
                        <View>
                            <Text style={styles.txt2}>Card Holder </Text>
                            <TextInput placeholder='Mr.Janson' style={styles.placeholder}></TextInput>
                           
                        </View>

                        <View>
                            <Text style={styles.txt2}>Expiry Date </Text>
                            <TextInput placeholder="22/07/2025" style={styles.placeholder}></TextInput>
                           
                        </View>

                        <View style={{ flexDirection: 'row', width: "100%", alignSelf: 'center', justifyContent: 'center',marginTop:35, }}>
                            <TouchableOpacity style={{ width: '35%', marginRight: 25 }} >
                                <Text style={styles.btn1}>Add New</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '35%' }} onPress={() => { this.props.navigation.navigate('profile'); }} >
                                <Text style={styles.btn2}>Submit</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1397d5',
        height: 280,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 10,
       

    },

    backarrow: {
        marginTop: 10,
        resizeMode: 'contain',
        height:45,
        width:50,
       

    },
    txt1: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontSize: 23,
        
        
    },

    location: {
        
        resizeMode: 'contain',
        alignSelf:'center',
        width:'65%',
        height:130,
        marginTop:10,
        marginLeft:3

    },
    
    bottom: {
        borderWidth: 1,
        height: 600,
        marginTop: -40,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'transparent',
        width: '100%',
        alignSelf: 'center'

    },
    placeholder: {
        borderWidth: 1,
        width: '75%',
        alignSelf: 'center',
        marginTop: 10,
        borderColor: '#c0c0c0',
        borderRadius:8,
        paddingLeft:15

    },
    btn1: {
        borderWidth: 0.5,
        marginTop: 20,
        color: '#1397d5',
        textAlign: 'center',
        borderRadius: 15,
        borderColor: '#1397d5',
        fontSize:16,
        height:35,
        textAlignVertical:"center"

    },
    btn2: {
        borderWidth: 0.5,
        marginTop: 20,
        color: 'white',
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderColor: 'white',
        backgroundColor: '#1397d5',
        borderColor:'transparent',
        fontSize:16,
        height:35,
        textAlignVertical:"center"
      

    },
    txt2: {
       color:'#c0c0c0',
       marginTop:30,
       marginLeft:45
    },
});