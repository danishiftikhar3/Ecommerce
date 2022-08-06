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

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile'); }}>
                                <Image style={styles.backarrow} source={require('../../assets/marrow.png')}></Image>
                            </TouchableOpacity>

                            <View style={{alignSelf:'center',width:'70%'}}>
                            <Text style={styles.txt1}>Change Password</Text>
                            </View>
                        </View>
                        <Image style={styles.location} source={require('../../assets/mlock.png')}></Image>
                    </View>

                    <View style={styles.bottom}>

                    <View>
                            <Text style={styles.txt2}>Old Password </Text>
                            <TextInput secureTextEntry style={styles.placeholder}></TextInput>
                           
                        </View>
                        <View>
                            <Text style={styles.txt2}>New Password </Text>
                            <TextInput secureTextEntry style={styles.placeholder}></TextInput>
                           
                        </View>

                        <View>
                            <Text style={styles.txt2}>Confirm Password </Text>
                            <TextInput secureTextEntry style={styles.placeholder}></TextInput>
                           
                        </View>

                        <View style={{ flexDirection: 'row', width: "100%", alignSelf: 'center', justifyContent: 'center',marginTop:35, }}>
                            <TouchableOpacity style={{ width: '35%', marginRight: 25 }} >
                                <Text style={styles.btn1}>Cancel</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '35%' }} >
                                <Text style={styles.btn2}>Update</Text>
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
        marginTop: 10
    },

    backarrow: {
        marginTop: 10,
        resizeMode: 'contain',
        marginLeft: 15,
        height:45,
        width:45

    },
    txt1: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontSize: 23,
        marginLeft: '10%'
    },

    location: {
        
        resizeMode: 'contain',
        alignSelf:'center',
        width:'45%',
        height:80,
        marginTop:20

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
        marginTop: 20,
        borderColor: '#c0c0c0',
        borderRadius:8

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