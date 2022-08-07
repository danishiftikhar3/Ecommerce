import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity, Dimensions } from 'react-native'
import Carousel from 'react-native-snap-carousel';
import StarRating from 'react-native-star-rating';

const { width: screenWidth } = Dimensions.get('window');




const carouselItems = [
    {
        title: 'Nike Men Flex',
        pic: require('../../assets/mproduct1.png'),
        share: require('../../assets/mshare.png'),
        heart: require('../../assets/mheart.png'),
        'price': '$24',
        stars: 4

    },
    {
        title: 'Nike Men Flex',
        pic: require('../../assets/mproduct1.png'),
        share: require('../../assets/mshare.png'),
        heart: require('../../assets/mheart.png'),
        'price': '$24',
        stars: 4


    },
    {
        title: 'Nike Men Flex',
        pic: require('../../assets/mproduct1.png'),
        share: require('../../assets/mshare.png'),
        heart: require('../../assets/mheart.png'),
        'price': '$24',
        stars: 4


    },
]
export default class BestDeals extends Component {
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

    _renderItem({ item, index }) {
        return (
            <View style={styles.item}>
                <View >
                    <View style={{ flexDirection: "row", justifyContent: 'flex-end', marginBottom: -40 }}>
                        <Image source={item.share} style={styles.heart}></Image>
                        <Image source={item.heart} style={styles.heart} ></Image>

                    </View>

                    <View>
                        <Image source={item.pic} style={styles.img1}></Image>
                    </View>


                </View>
                <Text style={styles.title}>
                    {item.title}
                </Text>
                <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 25 }}>
                    <StarRating
                        disabled={false}
                        maxStars={5}
                        rating={item.stars}
                        // selectedStar={(rating) => this.onStarRatingPress(rating)}
                        fullStarColor={'orange'}
                        starSize={12}
                        starStyle={{}}

                    />
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.txt3}>{item.price}</Text>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('product'); }}>

                        <Image style={styles.img5} source={require('../../assets/for.png')}></Image>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
    render() {
        return (
            <View>
                <View style={styles.cv}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={carouselItems}
                        sliderWidth={screenWidth}
                        sliderHeight={screenWidth}
                        itemWidth={screenWidth - 180}
                        renderItem={this._renderItem}
                    // onSnapToItem={index => this.setState({ activeIndex: index })}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img1: {
        resizeMode: "contain",
        alignSelf: 'center',
        height: 220,
    },
    title: {
        fontSize: 17,
        marginLeft: 25,
        marginTop: -60,
        color: "#343A40"

    },
    txt3: {
        fontSize: 16,
        paddingLeft: 27,
        alignSelf: 'center',
        width: '70%',
        fontWeight: 'bold',
        color: '#153E73',
    },
    img5: {
        width: 35,
        height: 40,

        alignSelf: 'center'
    },
    cv: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        marginBottom: 35,
        marginTop: 35
    },
})
