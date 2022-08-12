import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, SafeAreaView } from 'react-native';

import StarRating from 'react-native-star-rating';
import color from '../../../constants/color';
import data from '../../../data/data';
import HeaderA from '../../components/HeaderA';



function Cart(props) {
    const [dataA, setDataA] = useState(data);

    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1);
    });

    // Function to increment count by 1
    const incrementCount = (num) => {
        const arr = data;
        let count1 = arr[num].Qty;
        count1 = parseInt(count1) + 1;
        arr[num].Qty = count1;
    };
    const decCount = (num) => {
        const arr = data;
        let count1 = arr[num].Qty;
        if (count1 >= 1) {
            count1 = parseInt(count1) - 1;
            arr[num].Qty = count1;
        }
    };

    // this.setState({
    //     data: arr

    return (

        <SafeAreaView>
            <HeaderA Title='Cart' />

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
                                <View style={{ width: '40%', flexDirection: 'row' }} >
                                    <View style={styles.view8}>
                                        <Text style={styles.txt8}>Quantity</Text>
                                        <View style={styles.view6}>
                                            <TouchableOpacity onPress={() => decCount(index)} >
                                                <Image resizeMode="contain" style={{ width: 20, height: 20, }} source={require('../../images/minus.png')}></Image>
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: -5 }}>  {item.Qty}  </Text>

                                            <TouchableOpacity onPress={() => incrementCount(index)} >
                                                <Image resizeMode="contain" style={{ width: 20, height: 20, }} source={require('../../images/plus.png')}></Image>
                                            </TouchableOpacity>


                                        </View>
                                    </View>


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

export default Cart;
const styles = StyleSheet.create({
    view8: {
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        width: 80,
        justifyContent: 'center',
        marginLeft: 10,

        borderRadius: 5,
        // width: '65%',
        // marginTop: 10,
        backgroundColor: 'white',
        height: 60,
        justifyContent: 'center',
        alignSelf: 'center',
        // marginTop: 45
    },
    txt8: {
        fontSize: 18,
        // marginLeft: 5,
        // fontWeight: 'bold',
        alignSelf: 'center',

    },
    view6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignSelf: 'center'
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
