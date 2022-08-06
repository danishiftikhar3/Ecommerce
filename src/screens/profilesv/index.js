import React, { Component } from 'react';
import { View, Text, 
    ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, BackHandler } from 'react-native';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    render() {
        return (
            <ScrollView>
            <View>
                <View style={styles.mainview}>
                    <View style={styles.view1}>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>
                            <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/m35mm.png')}></Image>
                        <Text style={styles.txt1}>Profile</Text>
                    </View>
                    <Image style={styles.bell} source={require('../../assets/bell.png')}></Image>
                </View>

                <View style={styles.background}>

                    <View style={{ flexDirection: 'row', marginTop: 15 }}>
                        <View style={{ flexDirection: 'row', }}>
                            <Image style={styles.client} source={require('../../assets/mclient3.png')}></Image>

                        </View>
                        <View>
                            <Text style={styles.tx4}>Mr.Janson</Text>
                            <Text style={styles.tx2}>123456789</Text>
                            <Text style={styles.tx2}>info@gmail.com</Text>
                            <TouchableOpacity style={styles.btn} onPress={() => { this.props.navigation.navigate('editprofilesv'); }} >
                                <Text style={styles.tx3}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View style={styles.shadow}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: '85%', alignSelf: 'center',marginTop:15 }}>
                        <Image style={styles.backimg} source={require('../../assets/mlocation.png')}></Image>
                        <Text style={styles.tx6}>My Address</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('editaddresssv'); }}>
                            <Image style={styles.backimg2} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:0.4,borderColor:'#727C8E',width:'75%',alignSelf:'center',marginTop:15,opacity:0.2}}></View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: '85%', alignSelf: 'center',marginTop:15 }}>
                        <Image style={styles.backimg} source={require('../../assets/mpayment.png')}></Image>
                        <Text style={styles.tx6}>Payment Settings</Text>
                        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('paymentsettingssv'); }} >
                            <Image style={styles.backimg2} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{borderWidth:0.4,borderColor:'#727C8E',width:'75%',alignSelf:'center',marginTop:15,opacity:0.2}}></View>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", width: '85%', alignSelf: 'center',marginTop:15 }}>
                        <Image style={styles.backimg} source={require('../../assets/mpassword.png')}></Image>
                        <Text style={styles.tx6}>Change Password</Text>
                        <TouchableOpacity  onPress={() => { this.props.navigation.navigate('changepasswordsv'); }}>
                            <Image style={styles.backimg2} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={{borderWidth:0.4,borderColor:'#727C8E',width:'75%',alignSelf:'center',marginTop:10,opacity:0.2}}></View>

                </View>

                <View style={{marginTop:20}}></View>

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
        flexDirection: 'row',
        width: '55%'


    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,
        textAlignVertical: "center",
        marginRight: 80
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

    bell: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',

    },

    background: {

        height: 200,
        width: '100%',
    },

    tx2: {
        color: '#515C6F',
        marginLeft: 35,
        marginTop: 5,
        fontSize: 16,
        
    },


    client: {
        resizeMode: 'contain',
        width: 95,
        height: 120,
        marginLeft: 50
    },

    tx3: {
        color: '#515C6F',
        textAlignVertical: "center",
        alignSelf: "center",
        fontSize: 12
    },
    tx4: {
        color: '#515C6F',
        marginLeft: 35,
        marginTop: 15,
        fontSize: 25,
        fontWeight: 'bold'
    },
    btn: {
        borderWidth: 1,
        borderColor: '#515C6F',
        width: '55%',
        marginLeft: 45,
        marginTop: 10,
        borderRadius: 15,
        
    },

    tx6: {
        fontSize: 18,
        textAlignVertical: "center",
        color:"#080D2D"
    },
    backimg2: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        transform: [{ rotate: '180deg' }]

    },

    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        borderWidth:1,
        borderColor:'transparent',
        borderRadius:15,
        height:330,
        width:'95%',
        alignSelf:"center",
        

    },

});

