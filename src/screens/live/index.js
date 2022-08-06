import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native';


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,

            abc: false,
            danish: false,
            starCount: 4

        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    onSwipeLeft(gestureState) {
        this.setState({ abc: false, });
    }

    render() {
        return (
            <ScrollView>
                <View style={{}}>
                    <View style={styles.mainview}>
                        <TouchableOpacity style={styles.view1}  onPress={() => { this.props.navigation.navigate('lssetting1'); }}>
                            <View style={styles.view1}>
                                <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            <Text style={styles.txt1}>Live Streaming</Text>
                        </View>
                    </View>
                    <View style={styles.v01}>
                        <View>
                            <Image style={styles.homeimg} source={require('../../assets/g2.png')}></Image>
                            <Text style={styles.t02}>LIVE</Text>
                        </View>
                        <TouchableOpacity>
                            <Text style={styles.t01}>X</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.v02}>
                        <View>
                            <Text style={styles.t03}>Smiley's Store Live</Text>
                            <View style={{ width: '80%', flexDirection: 'row', marginTop: '5%', marginLeft: -15 }}>
                                <Image style={styles.homeimg} source={require('../../assets/tool.png')}></Image>
                                <Text style={styles.t05}>Sydney, Australia</Text>
                            </View>
                        </View>
                        <Text style={styles.t04}>30 Min ago</Text>
                    </View>
                    <View style={styles.v03}>
                        <View style={{ width: '100%', alignSelf: 'center', flexDirection: 'row', marginTop: 15, justifyContent: 'space-around' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.homeimg} source={require('../../assets/tool.png')}></Image>
                                <Text style={styles.t05}>1.5K</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={styles.homeimg} source={require('../../assets/g9.png')}></Image>
                                <Text style={styles.t05}>307</Text>
                            </View>
                            <Text style={{ color: 'white' , alignSelf:'center'}}>Leave a Comment</Text>
                            <Image style={styles.i1} source={require('../../assets/g10.png')}></Image>

                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    i1:{
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    v03: {
        flexDirection: 'row',
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        borderWidth: 1,
        backgroundColor: '#323232',
        opacity: 0.5,
        marginTop:'17%',
    },
    t05: {
        fontSize: 12,
        color: 'white',
        textAlign: 'center',
        alignSelf: 'center'
    },
    t04: {
        fontSize: 12,
        color: 'white',
        // textAlign:'center',
        // alignSelf:'center'
    },
    t03: {
        fontSize: 18,
        color: 'white'
    },
    v02: {
        width: '80%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '90%'
    },
    t02: {
        fontSize: 22,
        color: 'white'
    },
    t01: {
        fontSize: 18,
        textAlign: 'center',
        alignSelf: 'center',
        color: 'white'
    },
    v01: {
        width: '80%',
        justifyContent: 'space-between',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: '10%'
    },
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        borderColor: '#c0c0c0'
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
        alignSelf: 'center'
    },
    view1: {
        width: '30%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 20
    },
})