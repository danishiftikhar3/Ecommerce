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
            <View style={{backgroundColor:'white'}}>
                <View style={styles.background}>

                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profilesv'); }}>
                                <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>

                            <Text style={styles.tx1}>Change Password</Text>
                        </View>
                        
                    </View>

                    <View style={styles.locationback}>
                        <Image style={styles.location} source={require('../../assets/mlockk.png')}></Image>
                    </View>
                </View>

                <View style={styles.bottom}>

                    <View>
                        <Text style={styles.txt2}>Old Password </Text>
                        <TextInput secureTextEntry placeholder='*******' style={styles.placeholder}></TextInput>

                    </View>
                    <View>
                        <Text style={styles.txt2}>New Password </Text>
                        <TextInput secureTextEntry placeholder='*******' style={styles.placeholder}></TextInput>

                    </View>

                    <View>
                        <Text style={styles.txt2}>Confirm Password </Text>
                        <TextInput secureTextEntry placeholder='*******' style={styles.placeholder}></TextInput>

                    </View>

                    <View style={{ flexDirection: 'row', width: "100%", alignSelf: 'center', justifyContent: 'center', marginTop: 35, }}>
                        <TouchableOpacity style={{ width: '35%', marginRight: 25 }} >
                            <Text style={styles.btn1}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ width: '35%' }} >
                            <Text style={styles.btn2}>Update</Text>
                        </TouchableOpacity>

                    </View>

                </View>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    background: {
        height: 230,
        width: '100%',
    },
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
        flexDirection: 'row',
       


    },
    tx1: {
        alignSelf: 'center',
        fontSize: 20,
        textAlignVertical: "center",
        
    },

    backarrow: {
        marginTop: 10,
        resizeMode: 'contain',
        marginLeft: 15,
        height: 45,
        width: 45

    },

    location: {
        height: 130,
        alignSelf: 'center',
        resizeMode: "contain"
    },

    locationback: {
        borderWidth: 1,
        width: '35%',
        alignSelf: "center",
        marginTop: 15,
        borderColor: 'white',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },

    bottom: {
        borderWidth: 1,
        height: 600,
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
        marginTop: 20,
        borderColor: '#c0c0c0',
        borderRadius:8,
        backgroundColor: 'white',
        height: 50,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,

    },
    btn1: {
        borderWidth: 0.5,
        marginTop: 60,
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
        marginTop: 60,
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
       marginTop:10,
       marginLeft:45
    },

});