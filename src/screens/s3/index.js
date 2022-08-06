import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity,Image } from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
   
     <SafeAreaView>
       <ScrollView>
        <View style={styles.bck}>
         {/* navbar */}
         <View style={styles.navbar}>

         <TouchableOpacity  style={styles.BI}  onPress={() => { this.props.navigation.navigate('profile2'); }}>
         <Image
       
        source={require('../../assets/BI.png')}
      /> 
      </TouchableOpacity>

        <View style={styles.logo}>
        <Image
        style={styles.logoo}
        source={require('../../assets/logoo.png')}
      /> 
      <Text style={styles.txt1}>Shop Name</Text>
        </View>

        <TouchableOpacity style={styles.bell} onPress={() =>  this.props.navigation.navigate('s8')}>
        <Image
        
        source={require('../../assets/bell.png')}
      /> 
      </TouchableOpacity>
         </View>

        {/* container 1  */}

        <View  style={styles.con1}>
         
        <View style={styles.row1}>
         {/* tin1 */}
         <TouchableOpacity style={styles.tin1}>
         <Image
        style={styles.uperarw}
        source={require('../../assets/uperarw.png')}
      /> 
       <Text style={styles.txt2}>200</Text>
       <Text style={styles.txt3}>Products</Text>
       </TouchableOpacity>

          {/* tin2 */}
          <TouchableOpacity style={styles.tin2}>
         <Image
        style={styles.pcart}
        source={require('../../assets/pcart.png')}
      /> 
       <Text style={styles.txt4}>20</Text>
       <Text style={styles.txt5}>Total Sales</Text>
       </TouchableOpacity>

         </View>

        {/* row2 */}
         <View style={styles.row2}>
         {/* tin3 */}
         <TouchableOpacity style={styles.tin3}>
         <Image
        style={styles.tick}
        source={require('../../assets/tick.png')}
      /> 
       <Text style={styles.txt6}>20</Text>
       <Text style={styles.txt7}>Successful Orders</Text>
       </TouchableOpacity>

          {/* tin4 */}
          <TouchableOpacity style={styles.tin4}>
         <Image
        style={styles.dolar}
        source={require('../../assets/dolar.png')}
      /> 
       <Text style={styles.txt8}>20</Text>
       <Text style={styles.txt9}>Total earning</Text>
       </TouchableOpacity>

         </View>
        </View>

        {/* line */}
        <View style={styles.line1}></View>
        {/* cards */}
        <View style={styles.cards}>
              {/* row3 */}
        <View style={styles.row3}>
        
        <TouchableOpacity     style={styles.tin5}>
        <Image
        style={styles.arrow}
        source={require('../../assets/arrow.png')}
      /> 
       <Text style={styles.txt10}>Add New {'\n'}Products</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tin6}>
        <Image
        style={styles.shop}
        source={require('../../assets/shop.png')}
      /> 
       <Text style={styles.txt11}>Shop Settings</Text>
        </TouchableOpacity>

        
        </View>
        {/* row4  */}
        <View style={styles.row4}>
        <View style={styles.tin7}>
         
          <View style={styles.txtbox}>
          <Text style={styles.txt12}>Your sold amount (current month)</Text>
          </View>

          <View style={styles.btnbox}>
          <View style={styles.box}>
           <Text style={styles.txt13}>$300.000</Text>
          </View>
          </View>

          <View style={styles.txtbox1}>
          <Text style={styles.txt14}>Total Sold:</Text>
          <Text style={styles.txt15}>$300.000</Text>
          </View>
          <View style={styles.txtbox2}>
          <Text style={styles.txt16}>Total Sold:</Text>
          <Text style={styles.txt17}>$300.000</Text>
          </View>


        </View>
        </View>
        </View>
        {/* line */}
        <View style={styles.line1}></View>
        {/* last */}
        <View style={styles.last}></View>
       
         {/*  */}
        </View>
       </ScrollView>
     </SafeAreaView>
 
     
    );
  }
}
const styles = StyleSheet.create({
  // bck
  bck:{
    backgroundColor:"#fff",    

  },
// navbar
navbar:{
  height:60,
  width:"100%",
  backgroundColor:"#Fff",
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  borderWidth:0.5,
  borderColor:"#000",

},
BI:{
  marginLeft:"4%",
},
bell:{
  marginRight:"4%",

},
logo:{
  flexDirection:"row",
  alignItems:"center",
},
txt1:{
  paddingLeft:"4%",
  fontSize:18,
  fontWeight:"100",
  
},
// container 1
con1:{
  height:245,
  width:"80%",
  backgroundColor:"#Fff",
  marginLeft:"10%",
  marginTop:"10%",
},
row1:{
  flexDirection:"row",
  height:100,
  width:"100%",
  justifyContent:"space-between",
},
// tiny1
tin1:{
  height:90,
  width:"45%",
  backgroundColor:"#0ACF97",
  borderRadius:16,
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
 
},
txt2:{
  color:"#fff",
  fontSize:12,
  
},
txt3:{
  color:"#fff",
  fontSize:12,
 
},
// tiny2
tin2:{
  height:90,
  width:"45%",
  backgroundColor:"#FA5C7C",
  borderRadius:16,
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
 
},
txt4:{
  color:"#fff",
  fontSize:12,
  
},
txt5:{
  color:"#fff",
  fontSize:12,
 
},

// row2
row2:{
  flexDirection:"row",
  height:100,
  width:"100%",
  justifyContent:"space-between",
},
// tiny3
tin3:{
  height:90,
  width:"45%",
  backgroundColor:"#FFBC00",
  borderRadius:16,
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  marginTop:"2%",
 
},
txt6:{
  color:"#fff",
  fontSize:12,
  
},
txt7:{
  color:"#fff",
  fontSize:12,
 
},
// tiny4
tin4:{
  height:90,
  width:"45%",
  backgroundColor:"#39AFD1",
  borderRadius:16,
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  marginTop:"2%",
 
},
txt8:{
  color:"#fff",
  fontSize:12,
  
},
txt9:{
  color:"#fff",
  fontSize:12,
 
},
//line1
line1:{
  height:1,
  width:"80%",
  backgroundColor:"#DFE5EC",
  marginLeft:"10%",
},
// cards
cards:{
  height:385,
  width:"80%",
  backgroundColor:"#fff",
  marginLeft:"10%",
  flexDirection:"column",
},
// card1
row3:{
  flexDirection:"row",
  height:100,
  width:"100%",
  justifyContent:"space-between",
  backgroundColor:"#fff",
  marginTop:"10%",
 
},
tin5:{
  height:100,
  width:"45%",
  backgroundColor:"#fff",
  borderRadius:15,
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  shadowColor: '#28ABB9',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.60,
  shadowRadius: 4,
  elevation: 10,
  
},
txt10:{
  color:"#C4C4C4",
  fontSize:10,
  marginLeft:"12%",
},
tin6:{
  height:100,
  width:"45%",
  backgroundColor:"#fff",
  borderRadius:15,
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  shadowColor: '#28ABB9',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.60,
  shadowRadius: 4,
  elevation: 10,
  
},
txt11:{
  color:"#C4C4C4",
  fontSize:10,
  marginLeft:"4%",
},
shop:{
  marginLeft:"4%",
},
row4:{
  flexDirection:"row",
  height:160,
  width:"100%",
  backgroundColor:"#fff",
  marginTop:"10%",
  justifyContent:"center",
  alignItems:"center",
},
tin7:{
  height:150,
  width:"80%",
  backgroundColor:"#fff",
  borderRadius:15,
  justifyContent:"center",
  alignItems:"center",
  shadowColor: '#28ABB9',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.60,
  shadowRadius: 4,
  elevation: 10,
},
txtbox:{
  height:30,
  width:"100%",
  backgroundColor:"#fff",
  flexDirection:"row",
  borderTopRightRadius:15,
  borderTopLeftRadius:15,
  justifyContent:"center",
  alignItems:"center",
},
txt12:{
  color:"#7B7979",
  fontSize:12,
},
btnbox:{
  height:55,
  width:"100%",
  backgroundColor:"#fff",
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
},
box:{
  height:50,
  width:"40%",
  backgroundColor:"#000",
  borderRadius:10,
  justifyContent:"center",
  alignItems:"center",
  shadowColor: '#28ABB9',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.60,
  shadowRadius: 4,
  elevation: 10,
},
txt13:{
  fontSize:15,
  color:"#fff",
  fontWeight:"bold",
},
txtbox1:{
  height:30,
  width:"80%",
  backgroundColor:"#fff",
  flexDirection:"row",
justifyContent:"space-between",
  alignItems:"center",
  
},
txt14:{
  color:"#7B7979",
  
},
txt15:{
  color:"#7B7979",
  
},
txtbox2:{
  height:30,
  width:"80%",
  backgroundColor:"#fff",
  flexDirection:"row",
justifyContent:"space-between",
  alignItems:"center",
  
},
txt16:{
  color:"#7B7979",
  
},
txt17:{
  color:"#7B7979",
  
},
// last
last:{  
  height:130,
  width:"100%",
  backgroundColor:"#fff",},
  // footer
  footer:{
    height:60,
    width:"100%",
    backgroundColor:"#FFCE44",
  },
});