import React, { Component } from 'react';

import { ImageBackground, StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity,Image,TextInput } from "react-native";
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
  {label: 'Remember Me', value: 0 },
  
];

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
      <ImageBackground source={  require('../../assets/signin.png')} style={styles.image}>
      
        <Image
          style={styles.logo}
          source={require('../../assets/logo.png')}
        />
  
  {/* textinput1 */}
      <View style={styles.TI1}>
      <Image
          style={styles.logo1}
          source={require('../../assets/mailicon.png')}
        /> 
        <TextInput style={styles.email}>Email</TextInput>
      </View>
  
        {/* textinput2 */}
        <View style={styles.TI2}>
      <Image
          style={styles.logo2}
          source={require('../../assets/lock.png')}
        /> 
        <TextInput style={styles.password}>Password</TextInput>
      </View>
  
  {/* radioButton */}
  
  <View style={styles.row1}>
  <RadioForm
    radio_props={radio_props}
    initial={0}
    buttonColor={'#fff'}
    buttonSize={12}
    labelStyle={{fontSize: 14, color: '#fff', fontWeight: "bold",}}
  />
  
  <Text style={styles.txt3}>Forgot Password?</Text>
  </View>
  
  {/* button */}
  
  <TouchableOpacity style={styles.row2} onPress={() => { this.props.navigation.navigate('tabA'); }} >
  <Text style={styles.txt4}>Sign In</Text>
  </TouchableOpacity>
  
  {/* register now */}
  <View style={styles.row3}>
  <Text style={styles.txt5}>Need an account?</Text>
  
  <TouchableOpacity onPress={() => { this.props.navigation.navigate('s2'); }}>
  <Text style={styles.txt6} >Register Now</Text>
  </TouchableOpacity>
  </View>
      </ImageBackground>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width:"100%",
    height:770,
    flex:1,
    
  },
  image: {
    flex:1,
    width:"100%",
    height:770,
    alignItems:"center",
  },
 logo: {
    marginTop:"5%",
  },
//   textinput1
  TI1:{
   height:70,
   width:"80%",
   backgroundColor:"#fff",
   borderRadius:10,
   alignItems:"center",
   marginTop:"50%",
   opacity:0.7,
   flexDirection: 'row',
 
  },
  logo1:{
    marginLeft:"4%",
  },
  email:{
    marginLeft:"2%",
  },
 
  //   textinput2
 
  TI2:{
    height:70,
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:10,
    alignItems:"center",
    marginTop:"5%",
    opacity:0.7,
    flexDirection: 'row',
  
   },
   logo2:{
    marginLeft:"4%",
  },
  password:{
    marginLeft:"2%",
  },

//    RadioButton
row1:{
    width:"80%",
    flexDirection:"row",
    marginTop:"8%",
    justifyContent:"space-between",
   
},

txt3:{
    fontSize:14,
    color:"#fff",
    fontWeight:"bold",
   
},
// button
row2:{
width:"70%",
backgroundColor:"#1190CB",
flexDirection:"row",
justifyContent:"center",
alignItems:"center",
height:70,
borderRadius:15,
marginTop:"10%",

   
},
txt4:{
    color:"#fff",
},
// register now
row3:{
    width:'60%',
    flexDirection:"row",
    // backgroundColor:"#470137",
    justifyContent:"space-between",
    marginTop:"20%",
    
},
txt5:{
    color:"#fff",
    fontWeight:"bold",
},
txt6:{
    color:"#1190CB",
    fontWeight:"bold",
},
});

