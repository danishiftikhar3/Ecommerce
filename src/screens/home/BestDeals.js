import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import StarRating from 'react-native-star-rating';
import color from '../../../constants/color';

const { width: screenWidth } = Dimensions.get('window');


const carouselItems = [
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
]
export default class BestDeals extends Component {

    render() {
        return (
            <View>
                <View style={styles.cv}>
                    <Carousel
                        layout={"default"}
                        // ref={ref => this.carousel = ref}
                        data={carouselItems}
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth}
                        itemWidth={screenWidth - 180}
                        slideStyle={{ flex: 1 }}
                        renderItem={({ item, index }) => (
                            <View style={styles.item}>
                                <View style={{}}>
                                    <TouchableOpacity style={{ flexDirection: "row", justifyContent: 'flex-end', margin: 10 }}>
                                        <Image source={require('../../images/heart.png')} style={styles.heart} ></Image>

                                    </TouchableOpacity>

                                    <TouchableOpacity >
                                        <Image source={item.pic} style={styles.img1}></Image>
                                    </TouchableOpacity>


                                </View>
                                <Text style={styles.title}>
                                    {item.title}
                                </Text>
                                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 25 }}>
                                    <StarRating
                                        disabled={false}
                                        maxStars={5}
                                        rating={item.stars}
                                        fullStarColor={color.star}
                                        starSize={15}
                                        starStyle={{}}

                                    />
                                </View>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10, marginBottom: 10 }}>
                                    <Text style={styles.txt3}>${item.price}</Text>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('product'); }}>

                                        <Image style={styles.img5} source={require('../../assets/for.png')}></Image>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        )}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    heart: {
        width: 30,
        height: 35,
        resizeMode: 'contain',
        tintColor: color.red
    },
    item: {
        flex: 1,
        borderRadius: 20,
        borderWidth: 1,
        // backgroundColor: color.blue,
        borderColor: color.border,
        shadowColor: color.border,



    },
    img1: {
        resizeMode: "contain",
        alignSelf: 'center',
        height: 200,
    },
    title: {
        fontSize: 18,
        marginLeft: 25,
        fontWeight: '500',
        color: color.darkBlue

    },
    txt3: {
        fontSize: 20,
        paddingLeft: 20,
        alignSelf: 'center',
        width: '70%',
        fontWeight: 'bold',
        color: color.darkBlue,
    },
    img5: {
        width: 45,
        height: 50,

    },
    cv: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        marginBottom: 35,
        marginTop: 35
    },
})
