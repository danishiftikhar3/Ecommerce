import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import color from '../../../constants/color';


const dataB = [
    {
        'id': '01',
        'name': "Mini Denim Shorts",
        'pic': require('../../images/miniDenimShorts.png'),
        'price': 24,

    },
    {
        'id': '02',
        'name': "Nike Air Force 1",
        'pic': require('../../images/pants.png'),

        'price': 25,

    },
    {
        'id': '03',
        'name': "Women Track Suite",
        'pic': require('../../images/womenTrackSuite.png'),

        'price': 30,

    },
    {
        'id': '04',
        'name': "Leather Backpack",
        'pic': require('../../images/leatherbag.jpg'),
        'price': 150,

    },
    {
        'id': '05',
        'name': "Nike Puffer Jacket",
        'pic': require('../../images/puffer.png'),

        'price': 160,

    },
    {
        'id': '06',
        'name': "Women Black Attire",
        'pic': require('../../images/blackAttire.png'),

        'price': 160,

    },
    {
        'id': '07',
        'name': "Women Glasses",
        'pic': require('../../images/glasses.png'),

        'price': 160,

    },
    {
        'id': '08',
        'name': "Kid's Jacket",
        'pic': require('../../images/kidJacket.webp'),

        'price': 160,

    },
]
export default class Segmented extends Component {

    constructor(props) {
        super(props);
        this.state = {
            danish: false,
            selectedIndex: 1,
            starCount: 3.5,
            activeIndex: 2,

        }
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
            <View >
                <View style={styles.tabview}>
                    <SegmentedControlTab
                        values={['All', 'Women', 'Kids', 'Men', 'Essential']}
                        selectedIndex={this.state.selectedIndex}
                        onTabPress={this.handleIndexChange}
                        tabStyle={styles.tabStyle}
                        activeTabStyle={styles.activeTab}
                        activeTabTextStyle={styles.activeTabText}
                        tabTextStyle={styles.tabTextStyle}
                        tabsContainerStyle={{
                            justifyContent: 'space-around', width: '100%',
                            alignSelf: 'center'
                        }}
                    />
                </View>
                <View style={styles.flatlistView}>
                    <FlatList
                        data={dataB}
                        renderItem={({ item, index }) => (
                            <View style={styles.flatlistView1}>


                                <ImageBackground style={styles.img4b} source={item.pic}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>

                                        <Image style={styles.img3b} source={require('../../assets/heart.png')}></Image>

                                    </View>

                                    <View style={styles.view4b}>
                                        <Text style={styles.txt4b}>{item.name}</Text>
                                        <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                            <StarRating
                                                disabled={false}
                                                maxStars={5}
                                                rating={this.state.starCount}
                                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                fullStarColor={'orange'}
                                                starSize={12}
                                                starStyle={{}}

                                            />
                                        </View>


                                    </View>
                                </ImageBackground>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt3b}>${item.price}</Text>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('product'); }}>

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
        )
    }
}

const styles = StyleSheet.create({
    flatlistView: {
        marginBottom: 25,
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
})
