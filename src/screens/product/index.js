import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground, } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
            starCount: 3.5
        };
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
    render() {
        return (

            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={styles.mainview}>
                        <TouchableOpacity style={styles.view1}>
                            <View style={styles.view1}>
                                <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            {/* <Text style={styles.txt1}>Bag</Text> */}
                        </View>
                    </View>
                    <View style={styles.view3}>
                        <Image resizeMode='contain' style={styles.img2} source={require('../../assets/pp.png')}></Image>
                        <View style={{ marginTop: 50, marginLeft: -6 }}>
                            <TouchableOpacity>
                                <Image style={styles.colimg} source={require('../../assets/e1.png')}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <Image style={styles.colimg} source={require('../../assets/e2.png')}></Image>
                            </TouchableOpacity><TouchableOpacity>
                                <Image style={styles.colimg} source={require('../../assets/e3.png')}></Image>
                            </TouchableOpacity><TouchableOpacity>
                                <Image style={styles.colimg} source={require('../../assets/e4.png')}></Image>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={styles.view4}>
                        <Text style={styles.txt2}>$ 120.58</Text>
                        <Text style={styles.txt3} >Nike's Men Flex</Text>
                    </View>
                    <View style={{
                        width: '10%', marginTop: 4, resizeMode: 'contain', alignSelf: 'center',
                        marginTop: 10, flexDirection: 'row', justifyContent: 'center'
                    }}>

                        <StarRating
                            disabled={false}
                            maxStars={5}
                            rating={this.state.starCount}
                            selectedStar={(rating) => this.onStarRatingPress(rating)}
                            fullStarColor={'orange'}
                            starSize={14}
                            starStyle={{ marginLeft: 3 }}

                        />
                        <View style={{ marginTop: -4 }}>
                            <Text style={{ alignSelf: 'center', }}>  (35)</Text>
                        </View>
                    </View>
                    <View style={styles.view7}>
                        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Size</Text>
                        <SegmentedControlTab
                            values={['L', "M", "S", "XL", 'XS', 'XXL', 'XXS']}
                            selectedIndex={this.state.selectedIndex}
                            onTabPress={this.handleIndexChange}
                            tabStyle={styles.tabbar}
                            activeTabStyle={styles.tabbar1}
                            activeTabTextStyle={styles.tabbartxta}
                            tabTextStyle={styles.tabbartxt}
                            tabsContainerStyle={{
                                justifyContent: 'space-around', width: '80%',
                                alignSelf: 'center',
                            }}
                        />
                    </View>
          

                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.view5} onPress={() => { this.props.navigation.navigate('cart'); }}>
                        <View >
                            <Text style={styles.txt4}>Add to Bag</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.view6} onPress={() => { this.props.navigation.navigate('wishlist'); }}>
                        <View >
                            <Text style={styles.txt5}>Add to Wishlist</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    footer:{
        flexDirection: 'row',
            alignSelf: 'center',
             justifyContent: 'space-around',
              width: '100%',
             position:'absolute',
              marginBottom:5, 
             bottom: 0, 
             //Don't forget fles:1 for main view 
    },
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70
    },
    backimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 15

    },
    homeimg: {
        width: 50,
        height: 40,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    colimg: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },
    view1: {
        width: '45%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 30
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
    img1: {
        width: 50,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view3: {
        width: '60%',
        alignSelf: 'center',
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        flexDirection: 'row',
        elevation: 8,
        marginTop: 30
    },
    img2: {
        width: "95%",
        height: 325,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view4: {
        alignSelf: 'center',
        marginTop: 20,
    },
    txt2: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#153E73',
        textAlign: 'center'
    },
    txt3: {
        fontSize: 18,
        textAlign: 'center',
        marginTop: 10
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

        elevation: 8,
    },
    tabbartxt: {
        color: '#1397d5'
    },
    tabbartxta: {
        color: '#1397d5'
    },

    view5: {
        backgroundColor: '#1397d5',
        borderRadius: 10,
        height: 55,
        width: '45%',
        justifyContent: 'center',
        marginTop: 15
    },
    view6: {
        backgroundColor: 'white',
        borderRadius: 10,
        height: 55,
        width: '45%',
        justifyContent: 'center',
        marginTop: 15,
        borderColor: '#1397d5',
        borderWidth: 1
    },
    txt4: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 18
    },
    txt5: {
        color: '#1397d5',
        alignSelf: 'center',
        fontSize: 17

    },
    view7: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 60,
        flexDirection: 'row',
        marginTop: 20
    },
});