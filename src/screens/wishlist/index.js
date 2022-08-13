import React, { Component, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import StarRating from 'react-native-star-rating';
import color from '../../../constants/color';
import data from '../../../data/data';
import HeaderA from '../../components/HeaderA';
import Constants from "expo-constants";




function Wishlist(props) {
    const route = useRoute();
    const navigation = useNavigation();

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1);
    });

    var dataA = data.filter(function (el) {
        return el.wishlist;
    });
    var setCart = (num) => {

        dataA[num].cart = true

    }


    // const handleDelete = (message) => {
    //     console.log(message.id);
    //     setMessages(messages.filter((m) => m.id !== data.id));
    //     console.log(dataA)

    // };
    var handleDelete = (num) => {

        dataA[num].wishlist = !true

    }


    return (


        <SafeAreaView style={styles.screen}>
            <HeaderA Title='Wishlist' />

            <View style={{ backgroundColor: 'white' }}>
                <FlatList
                    data={dataA}
                    renderItem={({ item, index }) => (
                        <View style={styles.flatlistView}>
                            <TouchableOpacity style={styles.view3}>
                                <View style={{ width: '30%' }}>
                                    <Image source={item.pic} style={styles.img1}></Image>
                                </View>

                                <View style={styles.view4}>
                                    <Text style={styles.txt2}>{item.title}</Text>
                                    <View style={{ width: '20%', marginTop: 4, resizeMode: 'contain', }}>
                                        <StarRating
                                            disabled={false}
                                            maxStars={5}
                                            rating={item.stars}
                                            fullStarColor={'orange'}
                                            starSize={15}

                                        />

                                    </View>
                                    <Text style={styles.txt3}>${item.price}</Text>

                                </View>
                                <View style={styles.view9} >
                                    <TouchableOpacity style={{}} onPress={() => { { setCart(index) } }}>

                                        <View style={styles.view7}>
                                            <Text style={styles.txt4}>Add to Bag</Text>
                                        </View>

                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => handleDelete(item)} >

                                        <View style={styles.view7}>
                                            <Text style={styles.txt5}>Delete</Text>
                                        </View>

                                    </TouchableOpacity>




                                </View>
                            </TouchableOpacity>



                        </View>
                    )}
                    keyExtractor={item => item.id}
                    ListFooterComponent={<View style={{ height: 150 }} />}

                />
            </View>

        </SafeAreaView>
    )
}

export default Wishlist;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: color.background,
        height: '100%'

    },
    flatlistView: {
        justifyContent: 'space-around',
        borderWidth: 1,
        height: 120,
        margin: 25,
        borderColor: color.border,
        borderRadius: 20,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        shadowColor: color.border
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
        fontSize: 22
    },
    view3: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-around',

    },

    img1: {
        width: 80,
        height: 100,

        resizeMode: 'contain'
    },
    view4: {
        width: '30%',

    },
    txt2: {
        fontSize: 15,

    },
    txt3: {
        marginTop: 10,
        color: '#153E73',
        fontWeight: 'bold',
        fontSize: 18
    },
    view7: {
        backgroundColor: 'white',
        alignSelf: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        height: 40,
        justifyContent: 'center',
        width: 110,
        borderRadius: 20

    },
    txt4: {
        textAlign: 'center',
        alignSelf: 'center',
        color: '#1397d5'
    },
    txt5: {
        textAlign: 'center',
        alignSelf: 'center',
        color: color.red
    },
    view9: {
        width: '30%',

    }

})
