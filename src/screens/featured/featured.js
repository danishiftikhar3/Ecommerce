import React, { Component, setState, useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ImageBackground, Modal, SafeAreaView } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import color from '../../../constants/color';
import data from '../../../data/data';
import { useNavigation, useRoute } from '@react-navigation/native';


var womenData = data.filter(function (el) {
    return el.category === 'women';
}
);

var kidsData = data.filter(function (el) {
    return el.category === 'kids';
}
);

var menData = data.filter(function (el) {
    return el.category === 'men';
}
);

var essData = data.filter(function (el) {
    return el.essential;
}
);

export default function Featureds() {
    // const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();


    if (typeof route.params !== 'undefined') {
        const { screenID } = route.params;
        var [customStyleIndex, setCustomStyleIndex] = useState(screenID);
    } else {
        var [customStyleIndex, setCustomStyleIndex] = useState(0);

    }





    return (


        <SafeAreaView style={styles.screen} >
            <View style={styles.mainview}>
                <View style={styles.view1}>
                    <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                </View>
                <View style={styles.view2}>
                    <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                    <Text style={styles.txt1}>FEATURED</Text>
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <TouchableOpacity onPress={() => {
                        setModalVisible(true);
                    }} style={{ alignSelf: 'center', justifyContent: 'center' }}>
                        <Image style={styles.img1} source={require('../../assets/filter.png')}></Image>
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.tabview}>

                <SegmentedControlTab
                    values={['All', 'Women', 'Kids', 'Men', 'Essential',]}
                    selectedIndex={customStyleIndex}
                    onTabPress={setCustomStyleIndex}
                    tabStyle={styles.tabStyle}
                    activeTabStyle={styles.activeTab}
                    activeTabTextStyle={styles.activeTabText}
                    tabTextStyle={styles.tabTextStyle}
                    tabsContainerStyle={{
                        justifyContent: 'space-around', width: '100%',
                        alignSelf: 'center'
                    }}
                />

                {customStyleIndex === 0
                    &&
                    <View>
                        <View style={styles.flatlistView}>
                            <FlatList
                                data={data}
                                renderItem={({ item, index }) => (
                                    <View style={styles.flatlistView1}>

                                        <ImageBackground style={styles.img4b} source={item.pic}>
                                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
                                                <Image source={require('../../images/heart.png')} style={styles.heart} ></Image>
                                            </TouchableOpacity>

                                            <View style={styles.view4b}>
                                                <Text style={styles.txt4b}>{item.title}</Text>
                                                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                                    <StarRating
                                                        disabled={false}
                                                        maxStars={5}
                                                        rating={item.stars}
                                                        fullStarColor={color.star}
                                                        starSize={15}
                                                        starStyle={{}}

                                                    />
                                                </View>


                                            </View>
                                        </ImageBackground>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.txt3b}>${item.price}</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Product', { itemID: item.id })}>

                                                <Image style={styles.img5b} source={require('../../assets/for.png')}></Image>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>
                }
                {customStyleIndex === 1
                    &&
                    <View>
                        <View style={styles.flatlistView}>
                            <FlatList
                                data={womenData}
                                renderItem={({ item, index }) => (
                                    <View style={styles.flatlistView1}>

                                        <ImageBackground style={styles.img4b} source={item.pic}>
                                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
                                                <Image source={require('../../images/heart.png')} style={styles.heart} ></Image>
                                            </TouchableOpacity>

                                            <View style={styles.view4b}>
                                                <Text style={styles.txt4b}>{item.title}</Text>
                                                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                                    <StarRating
                                                        disabled={false}
                                                        maxStars={5}
                                                        rating={item.stars}
                                                        fullStarColor={color.star}
                                                        starSize={15}
                                                        starStyle={{}}

                                                    />
                                                </View>


                                            </View>
                                        </ImageBackground>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.txt3b}>${item.price}</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Product', { itemID: item.id })}>

                                                <Image style={styles.img5b} source={require('../../assets/for.png')}></Image>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>
                }
                {customStyleIndex === 2
                    &&
                    <View>
                        <View style={styles.flatlistView}>
                            <FlatList
                                data={kidsData}
                                renderItem={({ item, index }) => (
                                    <View style={styles.flatlistView1}>

                                        <ImageBackground style={styles.img4b} source={item.pic}>
                                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
                                                <Image source={require('../../images/heart.png')} style={styles.heart} ></Image>
                                            </TouchableOpacity>

                                            <View style={styles.view4b}>
                                                <Text style={styles.txt4b}>{item.title}</Text>
                                                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                                    <StarRating
                                                        disabled={false}
                                                        maxStars={5}
                                                        rating={item.stars}
                                                        fullStarColor={color.star}
                                                        starSize={15}
                                                        starStyle={{}}

                                                    />
                                                </View>


                                            </View>
                                        </ImageBackground>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.txt3b}>${item.price}</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Product', { itemID: item.id })}>

                                                <Image style={styles.img5b} source={require('../../assets/for.png')}></Image>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>
                }
                {customStyleIndex === 3
                    &&
                    <View>
                        <View style={styles.flatlistView}>
                            <FlatList
                                data={menData}
                                renderItem={({ item, index }) => (
                                    <View style={styles.flatlistView1}>

                                        <ImageBackground style={styles.img4b} source={item.pic}>
                                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
                                                <Image source={require('../../images/heart.png')} style={styles.heart} ></Image>
                                            </TouchableOpacity>

                                            <View style={styles.view4b}>
                                                <Text style={styles.txt4b}>{item.title}</Text>
                                                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                                    <StarRating
                                                        disabled={false}
                                                        maxStars={5}
                                                        rating={item.stars}
                                                        fullStarColor={color.star}
                                                        starSize={15}
                                                        starStyle={{}}

                                                    />
                                                </View>


                                            </View>
                                        </ImageBackground>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.txt3b}>${item.price}</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Product', { itemID: item.id })}>

                                                <Image style={styles.img5b} source={require('../../assets/for.png')}></Image>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>
                }
                {customStyleIndex === 4
                    &&
                    <View>
                        <View style={styles.flatlistView}>
                            <FlatList
                                data={essData}
                                renderItem={({ item, index }) => (
                                    <View style={styles.flatlistView1}>

                                        <ImageBackground style={styles.img4b} source={item.pic}>
                                            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'flex-end', margin: 10 }}>
                                                <Image source={require('../../images/heart.png')} style={styles.heart} ></Image>
                                            </TouchableOpacity>

                                            <View style={styles.view4b}>
                                                <Text style={styles.txt4b}>{item.title}</Text>
                                                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                                    <StarRating
                                                        disabled={false}
                                                        maxStars={5}
                                                        rating={item.stars}
                                                        fullStarColor={color.star}
                                                        starSize={15}
                                                        starStyle={{}}

                                                    />
                                                </View>


                                            </View>
                                        </ImageBackground>

                                        <View style={{ flexDirection: 'row' }}>
                                            <Text style={styles.txt3b}>${item.price}</Text>
                                            <TouchableOpacity onPress={() => navigation.navigate('Product', { itemID: item.id })}>

                                                <Image style={styles.img5b} source={require('../../assets/for.png')}></Image>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>

                    </View>
                }








            </View>

            {/* <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => { setModalVisible }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Filter By Price</Text>



                        </View>
                    </View>
                </View>

            </Modal> */}
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    screen: {
        backgroundColor: color.white,
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
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,



    },
    img1: {
        width: 50,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view3b: {
        // width: '70%',
        alignSelf: 'center',
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 2,
        elevation: 8,
        marginTop: 30,
        margin: 15
    },


    txt2: {
        fontSize: 16,
        paddingLeft: 10
    },

    txt5: {
        fontSize: 14,
        color: 'red',
        paddingLeft: 15
    },

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    view7: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 60,
        flexDirection: 'row',
        marginTop: 20
    },
    colimg: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },
    heart: {
        width: 20,
        height: 25,
        resizeMode: 'contain',
        tintColor: color.red
    },
    flatlistView: {
        marginBottom: 25,
        height: '100%'
    },
    tabStyle: {
        borderColor: color.white
    },
    activeTab: {
        borderWidth: 1,
        backgroundColor: color.lightBlue,
        flex: 1,
        elevation: 20,
        borderRadius: 8
    },
    activeTabText: {
        color: color.black,
        fontWeight: 'bold'
    },
    tabTextStyle: {
        color: color.black
    },
    flatlistView1: {
        // width: '70%',
        alignSelf: 'center',
        borderColor: color.border,
        borderWidth: 1,
        backgroundColor: color.white,
        borderRadius: 15,
        flex: 2,
        elevation: 8,
        marginTop: 30,
        margin: 15
    },
    img3b: {
        width: 25,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    txt4b: {
        fontSize: 14,
        paddingLeft: 15,
        fontWeight: 'bold',

    },
    img5b: {
        width: 35,
        height: 40,

        alignSelf: 'center'
    },
    img4b: {
        width: 150,
        height: 220,
        resizeMode: 'contain',
        alignSelf: 'center',
        // marginTop: -40,
        flex: 1

    },
    view4b: {
        marginTop: 150
    },
    txt3b: {
        fontSize: 16,
        paddingLeft: 15,
        alignSelf: 'center',
        width: '70%',
        fontWeight: 'bold',
        color: color.darkBlue,
    },
});