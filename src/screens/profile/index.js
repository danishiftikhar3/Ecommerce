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

                        <Text style={styles.txt1}>Profile</Text>

                        <View style={{flexDirection:'row',}}>
                            <View style={{flexDirection:'row',}}>
                        <Image style={styles.client} source={require('../../assets/mclient3.png')}></Image>
                        
                        </View>
                        <View>
                        <Text style={styles.txt4}>Mr.Janson</Text>
                        <Text style={styles.txt2}>123456789</Text>
                        <Text style={styles.txt2}>info@gmail.com</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('editprofile'); }}>
                            <Text style={styles.txt3}>Edit</Text>
                        </TouchableOpacity>
                        </View>
                    
                        </View>
                        
                    </View>

                    <View style={styles.bottom}>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('myorders'); }}>
                        <View style={{flexDirection:"row"}}>
                        <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder}>My Order</Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('editaddress'); }}>
                        <View style={{flexDirection:"row"}}>
                        <Image style={styles.location} source={require('../../assets/mlocation.png')}></Image>
                        <Text style={styles.mylocation}>My Address</Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity>
                        <View style={{flexDirection:"row"}}>
                        <Image style={styles.location} source={require('../../assets/mtracking.png')}></Image>
                        <Text style={styles.mylocation}>Order Tracking</Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('paymentsetting'); }}>
                        <View style={{flexDirection:"row"}}>
                        <Image style={styles.location} source={require('../../assets/mpayment.png')}></Image>
                        <Text style={styles.mylocation}>Payment Settings</Text>
                            </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('changepassword'); }}>
                        <View style={{flexDirection:"row"}}>
                        <Image style={styles.location} source={require('../../assets/mpassword.png')}></Image>
                        <Text style={styles.mylocation}>Change Password</Text>
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
        backgroundColor: '#1397d5',
        height: 250,
        width: '100%',
    },
    txt1: {
       color:'white',
       marginLeft:35,
       marginTop:15,
       fontSize:20,

    },

    txt2: {
        color:'white',
        marginLeft:35,
        marginTop:5,
        fontSize:16
     },
 

    client: {
        resizeMode:'contain',
        width:95,
        height:120,
        marginLeft:25
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
    btn: {
       borderWidth:1,
       borderColor:'white',
       width:'45%',
       marginLeft:35,
       marginTop:10,
       borderRadius:15
     },
     
    txt3: {
        color:'white',
      textAlignVertical:"center",
        alignSelf:"center",
        height:28,
        fontSize:16
     },
     txt4: {
        color:'white',
        marginLeft:35,
        marginTop:15,
        fontSize:20,
        fontWeight:'bold'
     },

     order: {
        resizeMode:'contain',
        width:45,
        height:60,
        marginLeft:35,
        marginTop:25
     },

     myorder: {
        marginLeft:15,
        marginTop:40,
        fontSize:20
     },

     location: {
        resizeMode:'contain',
        width:45,
        height:60,
        marginLeft:35,
        marginTop:10
     },

     mylocation: {
        marginLeft:15,
        marginTop:25,
        fontSize:20,
        fontFamily: "CarosSoft"
    

     },
    
 
   
});