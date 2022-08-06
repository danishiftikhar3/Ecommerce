import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal, ScrollView } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';

const datal = [
    {
        'id': '01',
        'name': "Body Shop",
        'pic': require('../../assets/dbg1.png'),
        'des': 'lorem ipsum lorem ipsum loreum ',

    },
    {
        'id': '02',
        'name': "Body Shop",

        'pic': require('../../assets/dbg1.png'),

        'des': 'lorem ipsum lorem ipsum loreum ',


    },
    {
        'id': '03',
        'name': "Body Shop",

        'pic': require('../../assets/dbg1.png'),

        'des': 'lorem ipsum lorem ipsum loreum ',


    },
    {
        'id': '04',
        'name': "Body Shop",

        'pic': require('../../assets/dbg1.png'),
        'des': 'lorem ipsum lorem ipsum loreum ',

    },
    {
        'id': '05',
        'name': "Body Shop",

        'pic': require('../../assets/dbg1.png'),
        'des': 'lorem ipsum lorem ipsum loreum ',


    },
    {
        'id': '06',
        'name': "Body Shop",

        'pic': require('../../assets/dbg1.png'),
        'des': 'lorem ipsum lorem ipsum loreum ',


    },
]

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
                            <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                        </View>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            <Text style={styles.txt1}> Live Streaming</Text>
                        </View>
                        <View style={styles.backview}>
                            <TouchableOpacity >
                                <Image style={styles.img1} source={require('../../assets/filter.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.tabview}>
                        <SegmentedControlTab
                            values={['All', 'Women', 'Kids', 'Men', 'Essential']}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            tabStyle={styles.tabbar}
                            activeTabStyle={styles.tabbar1}
                            activeTabTextStyle={styles.tabbartxta}
                            tabTextStyle={styles.tabbartxt}
                            tabsContainerStyle={{
                                justifyContent: 'space-around', width: '80%',
                                alignSelf: 'center'
                            }}
                        />
                    </View>
                    <View style={styles.view3}>
                        <View style={styles.view31}>
                            <Text>Live Streaming  </Text>
                            <Image style={styles.img31} source={require('../../assets/home.png')}></Image>

                        </View>
                        <Image style={styles.img32} source={require('../../assets/line1.png')}></Image>

                    </View>

                    <View style={styles.flatlist}>
                        <View style={{ width: '100%' }}>
                            <FlatList
                                data={datal}
                                renderItem={({ item, index }) => (

                                    <View style={styles.fv1}>
                                        <ImageBackground style={styles.fi1} source={item.pic}>
                                          
                                                <View style={styles.fv2}>

                                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                                                        <Text style={styles.ft1}>{item.name}</Text>
                                                        <Image style={styles.fi3} source={require('../../assets/mheart.png')}></Image>

                                                    </View>
                                                    <Text style={styles.ft2}>{item.des}</Text>

                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop:5 }}>
                                                        <Image style={styles.fi4} source={require('../../assets/g2.png')}></Image>
                                                        <Image style={styles.fi3} source={require('../../assets/g3.png')}></Image>
                                                    </View>

                                                </View>

                                        </ImageBackground>
                                    </View>


                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 20 }}>

                    </View>


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
        width: 50,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    tabview: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '100%',
        height: 40
    },
    tabbar: {
        borderWidth: 0,
        borderColor: '#1397d5',

    },
    tabbar1: {
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        borderLeftColor: '#1397d5',
        shadowColor: "#1397d5",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    tabbartxt: {
        color: '#1397d5'
    },
    tabbartxta: {
        color: '#1397d5'
    },

    view3: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    view31: {
        flexDirection: 'row'
    },
    txt31: {
        fontSize: 15
    },
    img31: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    img32: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    flatlist: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'space-around'
    },
    fv1: {
        flex: 2,
        // width: '60%',
        margin: 15,
        alignItems: 'center',
        // borderRadius: 20,
        // borderWidth: 2,

        justifyContent: 'space-around'

    },
    fi1: {
        width: '105%',
        height: 100,

        // borderWidth: 2,
        // borderRadius:20

    },
    fi2: {
        width: '105%',
        height: 100,
        opacity: 0.7,
        borderWidth: 0.1,
        borderTopStartRadius: 20
    },
    fv2: {
        width: '90%',
        justifyContent: 'space-around',
        alignSelf: 'center'
    },
    ft1: {
        color: 'white',
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15
    },
    fi3: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    ft2: {
        color: 'white',
        textAlign: 'right',
        fontSize: 10,

        marginTop: 8
    },
    fi4: {
        width: 50,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center'
    },


});