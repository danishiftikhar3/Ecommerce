import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, BackHandler } from 'react-native';
import { } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper';

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
                <View style={{ backgroundColor: 'white', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '82%', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>
                            <Image resizeMode='contain' style={{ marginTop: 10, tintColor: "black", marginRight: 10 }} source={require('../../assets/back.png')}></Image>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' }}>Send Message</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('c13'); }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 30 }} source={require('../../assets/mmenu.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: 'white', justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Image resizeMode='contain' style={{ width: '60%', height: 120 }} source={require('../../assets/dtrans.png')}></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Tranform Registeration</Text>
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </Text>

                    </View>
                    <View style={{ width: '86%', alignSelf: 'center', marginTop:20 }}>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('d16'); }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, backgroundColor: '#e0dede', width: '82%', alignSelf: 'center', height: 50, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: '25%', height: 25, alignSelf: 'center' }} source={require('../../assets/dbicycle.png')}></Image>

                                <Text style={{ textAlign: 'center', alignSelf: 'center', marginLeft: 10 }}>Bike             </Text>
                            </View>
                            <Image resizeMode='contain' style={{ alignSelf: 'center', width: '8%', height: 20, transform: [{ rotate: '180deg' }] }} source={require('../../assets/darrow.png')}></Image>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('d15'); }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, backgroundColor: '#e0dede', width: '82%', alignSelf: 'center', height: 50, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: '18%', height: 20, alignSelf: 'center' }} source={require('../../assets/dquad.png')}></Image>

                                <Text style={{ textAlign: 'center', alignSelf: 'center', marginLeft: 10 }}>Motor Cycle </Text>
                            </View>
                            <Image resizeMode='contain' style={{ alignSelf: 'center', width: '8%', height: 20, transform: [{ rotate: '180deg' }] }} source={require('../../assets/darrow.png')}></Image>

                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.props.navigation.navigate('d14'); }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, backgroundColor: '#e0dede', width: '82%', alignSelf: 'center', height: 50, borderRadius: 10 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: '25%', height: 25, alignSelf: 'center' }} source={require('../../assets/dcar.png')}></Image>

                                <Text style={{ textAlign: 'center', alignSelf: 'center', marginLeft: 10 }}>Car     </Text>
                            </View>
                            <Image resizeMode='contain' style={{ alignSelf: 'center', width: '8%', height: 20, transform: [{ rotate: '180deg' }] }} source={require('../../assets/darrow.png')}></Image>

                        </View>
                    </TouchableOpacity>
                   

                  
                    


                      
                      
                    </View>
                    <View style={{ marginTop: 200 }}>

                    </View>


                </View>
            </ScrollView>
        );
    }
}
