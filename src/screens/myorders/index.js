import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

const data = [
    {
        'id': '01',
        'order': '#123456',
        'date': '24 April 2020, 12:30',
        'item': '3',
        'price': '$24',
    },
    {
        'id': '02',
        'order': '#123456',
        'date': '24 April 2020, 12:30',
        'item': '3',
        'price': '$24',
    },
    {
        'id': '03',
        'order': '#123456',
        'date': '24 April 2020, 12:30',
        'item': '3',
        'price': '$24',
    },
    {
        'id': '04',
        'order': '#123456',
        'date': '24 April 2020, 12:30',
        'item': '3',
        'price': '$24',
    },
]

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1
        };
    }
    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
    render() {
        return (
            <View>
                <View style={styles.mainview}>
                    <TouchableOpacity style={styles.view1}  onPress={() => { this.props.navigation.navigate('profile'); }}>
                    <View style={styles.view1}>
                        <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                        <Text style={styles.txt1}>My Orders</Text>
                    </View>
                    <Image style={styles.img1} source={require('../../assets/filter.png')}></Image>
                </View>
                <View style={{
                        alignSelf: 'center', justifyContent: 'space-around',
                        backgroundColor: 'white', width: '100%', height: 40
                    }}>
                    <SegmentedControlTab
                        values={['All', 'Ongoing', 'Waiting', 'Completed']}
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
                <View style= {{marginTop:20}}>
                    <FlatList
                        data={data}
                        renderItem={({ item, index }) => (

                            <View style={styles.view3}>
                                <View style={{ flexDirection: 'row', marginTop:14 }}>
                                    <Text style={styles.txt2}>Order no:</Text>
                                    <Text style={styles.txt2}>{item.order}</Text>
                                </View>

                                <Text style={styles.txt3}>{item.date}</Text>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt4}>On the Way</Text>

                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={styles.txt3}>items x {item.item} :</Text>
                                        <Text style={styles.txt5}>{item.price}</Text>
                                    </View>

                                </View>
                                
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
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
        marginTop: 10

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
        fontFamily:'CarosSoft'
               
    },
    img1: {
        width: 50,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
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
        width: '80%',
        alignSelf: 'center',
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        borderTopStartRadius: 10,
        borderBottomStartRadius: 10,
        borderLeftColor: '#1397d5',
        shadowColor: "#1397d5",
        shadowOffset: {
            width: 0,
            height: 15,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 12,
        marginTop:20,
        height:110
    },
    txt2: {
        fontSize: 16,
        paddingLeft: 10
    },
    txt3: {
        fontSize: 14,
        paddingLeft: 10,
        marginTop:6,
    },
    txt4: {
        fontSize: 14,
        paddingLeft: 10,
        fontWeight: 'bold',
        width: '60%',
        marginTop:6

    },
    txt5: {
        fontSize: 14,
        color:'red',
        paddingLeft:10,
        marginTop:6

    }
});