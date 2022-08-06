import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity,Image, } from "react-native";
import { BorderlessButton, TextInput } from "react-native-gesture-handler";
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
    <ImageBackground source={  require('../../assets/signup.png')} style={styles.image}>
    
      <Image
        style={styles.logo}
        source={require('../../assets/logo.png')}
      />

{/* textinput1 */}
    <View style={styles.TI1}>
    <Image
        style={styles.logo1}
        source={require('../../assets/user.png')}
      /> 
      <TextInput style={styles.user}>Username</TextInput>
    </View>

      {/* textinput2 */}
      <View style={styles.TI2}>
    <Image
        style={styles.logo2}
        source={require('../../assets/mailicon.png')}
      /> 
      <TextInput style={styles.add}>Email</TextInput>
    </View>

      {/* textinput3 */}
      <View style={styles.TI3}>
    <Image
        style={styles.logo3}
        source={require('../../assets/lock.png')}
      /> 
      <TextInput style={styles.pass1}>Password</TextInput>
    </View>

      {/* textinput4 */}
      <View style={styles.TI4}>
    <Image
        style={styles.logo4}
        source={require('../../assets/lock.png')}
      /> 
      <TextInput style={styles.pass2}>Password</TextInput>
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
</View>

{/* button */}

<TouchableOpacity style={styles.row2} onPress={() => { this.props.navigation.navigate('tabA'); }}>
<Text style={styles.txt4}>Craete Account</Text>
</TouchableOpacity>

{/* register now */}
<View style={styles.row3}>
<Text style={styles.txt5}>Already have an account?</Text>
<Text style={styles.txt6}>Login</Text>
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
    marginTop:"2%",
  },
//   textinput1
  TI1:{
   height:65,
   width:"80%",
   backgroundColor:"#fff",
   borderRadius:10,
   alignItems:"center",
   marginTop:"35%",
   opacity:0.7,
   flexDirection: 'row',
 
  },
 user:{
      marginLeft:"2%",
      color:"#6C7580",
      
  },
  logo1:{
    marginLeft:"4%",
  },
  //   textinput2
 
  TI2:{
    height:65,
    width:"80%",
    backgroundColor:"#fff",
    borderRadius:10,
    alignItems:"center",
    marginTop:"3%",
    opacity:0.7,
    flexDirection: 'row',
  
   },
  add:{
       marginLeft:"2%",
       color:"#6C7580",
       
   },
   logo2:{
     marginLeft:"4%",
   },
//   textinput3
 
TI3:{
  height:65,
  width:"80%",
  backgroundColor:"#fff",
  borderRadius:10,
  alignItems:"center",
  marginTop:"3%",
  opacity:0.7,
  flexDirection: 'row',

 },
pass1:{
     marginLeft:"2%",
     color:"#6C7580",
     
 },
 logo3:{
   marginLeft:"4%",
 },
//   textinput4
 
TI4:{
  height:65,
  width:"80%",
  backgroundColor:"#fff",
  borderRadius:10,
  alignItems:"center",
  marginTop:"3%",
  opacity:0.7,
  flexDirection: 'row',

 },
pass2:{
     marginLeft:"2%",
     color:"#6C7580",
     
 },
 logo4:{
   marginLeft:"4%",
 },
//    RadioButton
row1:{
    width:"80%",
    flexDirection:"row",
    marginTop:"8%",
  
   
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
marginTop:"5%",

   
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