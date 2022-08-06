import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal, ScrollView, TextInput } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
            starCount: 3.5,
            modalVisible: false,
        };
    }

    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
    render() {
        const { modalVisible, setModalVisible } = this.state;
        return (
            <ScrollView>
                <View>
                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile2'); }}>
                            <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>
                            {/* <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image> */}
                            <Text style={styles.txt1}> Shop Settings</Text>
                        </View>
                        <View style={styles.backview}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('s8'); }} >
                                <Image style={styles.img1} source={require('../../assets/dabell.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.v01}>

                        <TouchableOpacity style={{ flexDirection: 'row', alignSelf: 'center' }}>
                            <Image style={styles.i2} source={require('../../assets/g11.png')}></Image>

                            <Image style={styles.i3} source={require('../../assets/g13.png')}></Image>
                        </TouchableOpacity>
                        <Text style={styles.t01}>Logo Image</Text>

                    </View>
                    <View style={styles.v02}>
                        <View style={styles.v03}>
                            <TextInput style={styles.ti01} placeholder='Shop Name'></TextInput>
                            <Image style={styles.i4} source={require('../../assets/g12.png')}></Image>

                        </View>
                        <View style={styles.v03}>
                            <TextInput style={styles.ti01} placeholder='Address'></TextInput>
                            <Image style={styles.i4} source={require('../../assets/g14.png')}></Image>

                        </View>
                        <View style={styles.v04}>
                            <TextInput style={styles.ti01} placeholder='Select Pick Up Point'></TextInput>
                            <Image style={styles.i4} source={require('../../assets/g15.png')}></Image>

                        </View>

                    </View>
                    <View>
                        <TextInput style={styles.ti02} placeholder='Shop Titile'></TextInput>
                        <TextInput style={styles.ti02} placeholder='Shop Description'></TextInput>
                    </View>
                    <View style={styles.v05}>
                        <View style={styles.v06}>
                            <Text style={styles.t02}>Slider Images</Text>
                        </View>
                        <View style={styles.v06}>
                            <Image style={styles.i5} source={require('../../assets/Base.png')}></Image>
                            <Image style={styles.i6} source={require('../../assets/g13.png')}></Image>
                        </View>

                    </View>
                    <View>
                        <TouchableOpacity style={styles.v07}>
                            <Text style={styles.t03}>GO TO Dashboard</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    t03:{
        color:'white',
        fontSize:22,
        fontWeight:'900',
        textAlign:'center'
    },
    v07:{
        justifyContent:'center',
        width:'60%',
        borderRadius:30,
        backgroundColor:'#1397D5',
        alignSelf:'center',
        height:50,
        marginBottom:15
    },
    i6: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: '-25%'
    },
    i5: {
        width: 170,
        height: 150,
        resizeMode: 'contain',
        alignSelf: 'center',
        // marginLeft: '-25%'
    },
    t02: {
        alignSelf: 'center',
        textAlign: 'center',
        color: '#757575'
    },
    v06: {
        width: '45%',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row'
    },
    v05: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center'
    },
    ti02: {
        backgroundColor: 'white',
        borderColor: 'white',
        height: 40,
        width: '85%',
        borderBottomColor: 'white',
        color: 'black',
        fontSize: 14,
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
        borderRadius: 5,
        marginTop: 5,
        marginBottom: 10,
        paddingLeft: 25
    },
    v04: {
        width: '85%',
        alignSelf: 'center',
        borderBottomColor: '#DFDFDF',
        flexDirection: 'row',
        borderWidth: 2,
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        marginTop: 10,
        marginBottom: 35
    },
    i4: {
        width: 30,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center',
        // marginLeft: '-25%'
    },
    v03: {
        width: '85%',
        alignSelf: 'center',
        borderBottomColor: '#DFDFDF',
        flexDirection: 'row',
        borderWidth: 2,
        borderTopColor: 'white',
        borderRightColor: 'white',
        borderLeftColor: 'white',
        marginTop: 10
    },
    ti01: {
        backgroundColor: 'white',
        borderColor: 'white',
        height: 40,
        width: '85%',
        borderBottomColor: 'white',
        color: 'black',
        fontSize: 14
    },
    v02: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 8,
        marginBottom: 15,
        marginTop: 15
    },
    t01: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '900',
        marginTop: -15
    },
    i3: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginLeft: '-25%'
    },
    i2: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    v01: {
        justifyContent: 'center',
        width: '40%',
        alignSelf: 'center',
        marginTop: 10

    },
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around'
    },
    backimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,

    },
    homeimg: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view1: {

    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,
        fontFamily: 'CarosSoft',


    },
    backview: {
        alignSelf: 'center'
    },
    img1: {
        width: 40,
        height: 18,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})