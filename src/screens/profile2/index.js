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
                <View  style={{backgroundColor:'#006891'}}>
                    <View style={styles.background}>

                        <TouchableOpacity style={{width:'95%'}}>
                        <Text style={styles.txt1}>X Close</Text>
                        </TouchableOpacity>

                        <View style={{flexDirection:'row',marginTop:15}}>
                            <View style={{flexDirection:'row',}}>
                        <Image style={styles.client} source={require('../../assets/mclient3.png')}></Image>
                        
                        </View>
                        <View>
                        <Text style={styles.txt4}>Mr.Janson</Text>
                        <Text style={styles.txt2}>123456789</Text>
                        <Text style={styles.txt2}>info@gmail.com</Text>
                        <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('editprofilesv'); }}>
                            <Text style={styles.txt3}>Edit</Text>
                        </TouchableOpacity>
                        </View>
                    
                        </View>
                        
                    </View>
                      

                      <View style={{borderWidth:1,borderColor:'white',width:'70%',alignSelf:"center"}}></View>
                    <View style={styles.bottom}>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('paymenthistory'); }} >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder}>Purchase History</Text>
                            </View>
                            </TouchableOpacity>

                           

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('productr1'); }}  >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Wish List             </Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('addproducts1'); }} >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Products             </Text>
                            </View>
                            </TouchableOpacity>

                            <View style={{borderWidth:1,borderColor:'white',width:'70%',alignSelf:"center",marginTop:15}}></View>

                            
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('addproducts'); }}>
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder}>Digital Products</Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('orders'); }}>
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Orders                 </Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('ProductR'); }}>
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Product Reviews</Text>
                            </View>
                            </TouchableOpacity>

                            <View style={{borderWidth:1,borderColor:'white',width:'70%',alignSelf:"center",marginTop:15}}></View>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('s7'); }} >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Conversations   </Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('MoneyW'); }}>
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder}>Money Withdraw</Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('Shopsettings'); }} >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Shop Setting      </Text>
                            </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('paymenthistory'); }} >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Payment History</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('SupportTicket'); }} >
                        <View style={{flexDirection:"row", alignSelf:'center'}}>
                        <Image style={styles.order2} source={require('../../assets/morder.png')}></Image>
                        <Text style={styles.myorder2}>Support Ticket  </Text>
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
       color:'white',
       marginTop:15,
       fontSize:20,
       alignSelf:'flex-end',
       

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
        marginLeft:50
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
        height:50,
        marginTop:25,
       
     },

     myorder: {
        marginLeft:15,
        marginTop:35,
        fontSize:18,
        color:"white"
     },

     order2: {
        resizeMode:'contain',
        width:45,
        height:50,
        marginTop:15,
       
     },

     myorder2: {
        marginLeft:15,
        marginTop:30,
        fontSize:18,
        color:"white",
     },


    

     
    
 
   
});