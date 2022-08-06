import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';
import ToggleSwitch from 'toggle-switch-react-native';


const data = [
    {
        'id': '1',
    },
    {
        'id': '2',
    },
    {
        'id': '3',
    },
    {
        'id': '4',
    },
    {
        'id': '5',
    },
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
            starCount: 3.5,
            modalVisible: false,
            isOnDefaultToggleSwitch: true,
            isOnLargeToggleSwitch: false,
            isOnBlueToggleSwitch: false,
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
    onToggle(isOn) {
        console.log("Changed to " + isOn);
    }
    render() {
        return (
            <View>
                <View style={styles.mainview}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile2'); }}>
                        <View style={styles.view1}>
                            <Image style={styles.backimg} source={require('../../assets/g6.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                        <Text style={styles.txt1}>Wishlist</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('s8'); }} >
                            <Image style={styles.img1} source={require('../../assets/dabell.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.v01}>
                    <View style={styles.v02}>
                        <Text style={styles.t01}>Wishlist</Text>
                    </View>
                    <View>
                        <View style={styles.v03}>
                            <Text style={styles.t02}>#</Text>
                            <Text style={styles.t02}>Product</Text>
                            <Text style={styles.t02}>Price</Text>
                            


                        </View>
                        <View>
                            <Image style={{ width: '100%', height: 2, marginTop: 15, tintColor: '#DFDFDF' }} source={require('../../assets/divide.png')}></Image>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (
                                <View >
                                    <View style={styles.v04}>
                                        <Text>{item.id}</Text>
                                        <Text>  </Text>
                                        <Text>  </Text>

                                   

                                      
                                      
                                    </View>

                                    <Image style={{ width: '100%', height: 2, marginTop: 15, tintColor: '#DFDFDF' }} source={require('../../assets/divide.png')}></Image>


                                </View>
                            )}

                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    v04: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        // marginLeft: -5
    },
    t02: {
        fontSize: 12
    },
    v03: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20
    },
    t01: {
        marginLeft: '10%',
        alignSelf: 'center'
    },
    v01: {

        width: '80%',
        alignSelf: 'center',

    },
    v02: {
        backgroundColor: '#DFDFDF',
        width: '100%',
        height: 50,
        alignSelf: 'center',
        marginTop: '15%',
        flexDirection: 'row'

    },
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around'
    },
    backimg: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop:'60%'


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
        fontSize: 18,
        fontFamily: 'CarosSoft',


    },
    img1: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})