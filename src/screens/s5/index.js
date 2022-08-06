import React, { Component } from 'react';
import { ImageBackground, StyleSheet, Text, View ,SafeAreaView,ScrollView,TouchableOpacity,Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
        // main
        <View style={styles.main}>
        {/* top1 */}
        <View style={styles.top1}>

        <TouchableOpacity>
        <Image
        style={styles.left}
        source={require('../../assets/left.png')}
      /> 
      </TouchableOpacity>
          
          <View style={styles.box1}>
          <Text style={styles.txt1}>Smiley's Store</Text>
          <Text style={styles.txt2}>Active</Text>
          </View>

     <TouchableOpacity onPress={() =>  this.props.navigation.navigate('s6')}>
         <Image
        style={styles.ss}
        source={require('../../assets/ss.png')}
      /> 
      </TouchableOpacity>
        </View>
     {/* line */}
     <View style={styles.line1}></View>

     {/* top2 */}
 
     <View style={styles.top2}>
     <Image
        style={styles.bag}
        source={require('../../assets/bag.png')}
      /> 

          <View style={styles.box2}>
          <Text style={styles.txt3}>Order: #1084028</Text>
          <Text style={styles.txt4}>Red Cotton Scarf, 2ft, Dark Red</Text>
          <Text style={styles.txt5}>$11.00</Text>
          </View>
       
       <TouchableOpacity>
          <Image
        style={styles.miniright}
        source={require('../../assets/miniright.png')}
      /> 
       </TouchableOpacity>
     </View>
     {/* date n time */}
     <View style={styles.dnt}>
     <Text style={styles.txt6}>Tuesday, 9:20 AM</Text>
     </View>
     {/* chat1   */}
     <View style={styles.chat1}>
     <Text style={styles.txt7}>Dear customer, your order has been shipped.</Text>
     <Text style={styles.txt8}>Please see below for the tracking number.</Text>
     </View>
   
     {/* chat2   */}
    <View style={styles.chat2}>
     <Text style={styles.txt9}>UH2983948935B</Text>
     </View>
      
      
     {/* chat3   */}
    <View style={styles.chat3}>
     <Text style={styles.txt10}>Your parcel should arrive between 10 - 20 days.</Text>
     </View>

      {/* chat4   */}
    <View style={styles.chat4}>
     <Text style={styles.txt11}>If you have any questions, please contact us and we will get back to you at our earliest. </Text>
     </View>

     {/* footer   */}

    <View style={styles.footer}>


    <TouchableOpacity style={styles.plus}>
    <Image
        
        source={require('../../assets/plus.png')}
      /> 
      </TouchableOpacity>


    <TextInput style={styles.TI}>Type your message...</TextInput>
   

    <TouchableOpacity style={styles.send}>
    <Image
        
        source={require('../../assets/send.png')}
      />
      </TouchableOpacity>
     </View>

       {/* //// */}
        </View>
    );
  }
}
const styles = StyleSheet.create({
// main
    main:{
        flex:1,
        backgroundColor:"#fff",
    },
// top1
top1:{
    height:60,
    width:"100%",
    backgroundColor:"#fff",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    
},
// box1
box1:{
    flexDirection:"column",
    height:60,
    width:"40%",
    backgroundColor:"#fff",
    marginRight:"25%",
    justifyContent:"center",
    
},
txt1:{
    fontSize:16,
    
},
txt2:{
    fontSize:12,
    
},
//line1
line1:{
  height:1,
  width:"90%",
  backgroundColor:"#F1F2F3",
  marginLeft:"5%",
  marginTop:"2%",
},
// top2
top2:{
    height:100,
    width:"100%",
    backgroundColor:"#fff",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginTop:"3%",
    shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 0
  },
  shadowRadius: 50,
  shadowOpacity: 1.0,
  elevation: 4
},
// box2
box2:{
    flexDirection:"column",
    height:100,
    width:"55%",
    backgroundColor:"#fff",
    marginRight:"7%",
    justifyContent:"center",
   
    
},
txt3:{
    fontSize:18,
    fontWeight:"bold",
    color:"#515C6F",
},
txt4:{
    fontSize:14,
    color:"#515C6F",
},
txt5:{
    fontSize:14,
    color:"red",
},
miniright:{
    marginRight:"4%",
},
// dnt
dnt:{
    height:60,
    width:"100%",
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"row",
    
},
txt6:{
    color:"#B9BEC5",
},
// chat1
chat1:{
    height:70,
    width:"70%",
    marginLeft:"12%",
    flexDirection:"column",
    backgroundColor:"#F4F4F4",
    marginTop:"5%",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:"center",
    alignItems:"center",
},
txt7:{
    color:"#727C8E",
    fontSize:13,
    paddingLeft:"4%",
},
txt8:{
    color:"#727C8E",
    fontSize:13,
    
},
// chat2
chat2:{
    height:30,
    width:"32%",
    marginLeft:"12%",
    flexDirection:"column",
    backgroundColor:"#F4F4F4",
    marginTop:"5%",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:"center",
    alignItems:"center",

},
txt9:{
    color:"#727C8E",
    textDecorationLine:"underline",
    color:"red",
    fontSize:13,
},
// chat3
chat3:{
    height:70,
    width:"70%",
    marginLeft:"12%",
    flexDirection:"column",
    backgroundColor:"#F4F4F4",
    marginTop:"5%",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:"center",
    alignItems:"center",

},
txt10:{
   
    color:"#727C8E",
    fontSize:12,
    paddingLeft:"4%",
},
// chat4
chat4:{
    height:70,
    width:"70%",
    marginLeft:"12%",
    flexDirection:"column",
    backgroundColor:"#F4F4F4",
    marginTop:"5%",
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    borderBottomRightRadius:20,
    justifyContent:"center",
    alignItems:"center",

},
txt11:{
   
    color:"#727C8E",
    fontSize:12,
    paddingLeft:"4%",
},
// footer
footer:{
    height:57,
    width:"100%",
    backgroundColor:"#F4F4F4",
    marginTop:"37%",
    flexDirection:"row",
    alignItems:"center",
},
TI:{
    color:"#CCCFD5",
    marginLeft:"4%",
},
plus:{
    marginLeft:"4%",
},
send:{
    marginLeft:"38%",
},
});