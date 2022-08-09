import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating';
import color from '../../../constants/color';

// import Segmented from './Segmented';


const data = [
    {
        'id': '01',
        'title': "Mini Denim Shorts",
        'pic': require('../../images/miniDenimShorts.png'),
        'price': 24,
        stars: 4

    },
    {
        'id': '02',
        'title': "Nike Air Force 1",
        'pic': require('../../images/pants.png'),
        'price': 25,
        stars: 4

    },
    {
        'id': '03',
        'title': "Women Track Suite",
        'pic': require('../../images/womenTrackSuite.png'),
        'price': 30,
        stars: 4

    },
    {
        'id': '04',
        'title': "Leather Backpack",
        'pic': require('../../images/leatherbag.jpg'),
        'price': 150,
        stars: 4

    },
    {
        'id': '05',
        'title': "Nike Puffer Jacket",
        'pic': require('../../images/puffer.png'),
        'price': 160,
        stars: 4

    },
    {
        'id': '06',
        'title': "Women Black Attire",
        'pic': require('../../images/blackAttire.png'),
        'price': 160,
        stars: 4

    },
    {
        'id': '07',
        'title': "Women Glasses",
        'pic': require('../../images/glasses.png'),
        'price': 160,
        stars: 4

    },
    {
        'id': '08',
        'title': "Kid's Jacket",
        'pic': require('../../images/kidJacket.webp'),
        'price': 160,
        stars: 4

    },
]

export default class BestSelling extends Component {
    constructor(props) {
        super(props);
        this.state = {
            starCount: 3.5,


        }
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    render() {
        return (
            <View>

                <View style={{ marginBottom: 25 }}>
                    <FlatList
                        data={data}
                        horizontal={true}
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
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('product'); }}>

                                        <Image style={styles.img5b} source={require('../../assets/for.png')}></Image>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )}

                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heart: {
        width: 20,
        height: 25,
        resizeMode: 'contain',
        tintColor: color.red
    },
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