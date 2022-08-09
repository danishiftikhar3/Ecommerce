import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import StarRating from 'react-native-star-rating';
// import Segmented from './Segmented';


const data = [
    {
        'id': '01',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),
        'price': '$24',
        stars: 5


    },
    {
        'id': '02',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',
        stars: 4


    },
    {
        'id': '03',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',
        stars: 4


    },
    {
        'id': '03',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',
        stars: 4

    },
    {
        'id': '03',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',
        stars: 5


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
                            <View style={styles.view3}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <TouchableOpacity>
                                        <Image style={styles.img3} source={require('../../assets/share.png')}></Image>
                                    </TouchableOpacity>
                                    <Image style={styles.img3} source={require('../../assets/heart.png')}></Image>

                                </View>

                                <ImageBackground style={styles.img4} source={item.pic}>


                                    <View style={styles.view4}>
                                        <Text style={styles.txt4}>{item.name}</Text>
                                        <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', marginLeft: 15 }}>
                                            <StarRating
                                                disabled={false}
                                                maxStars={5}
                                                rating={item.stars}
                                                selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                fullStarColor={'orange'}
                                                starSize={12}
                                                starStyle={{}}

                                            />
                                        </View>


                                    </View>
                                </ImageBackground>

                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={styles.txt3}>{item.price}</Text>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('product'); }}>

                                        <Image style={styles.img5} source={require('../../assets/for.png')}></Image>
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
    hv1: {
        alignSelf: 'center',
        alignContent: 'center'

    },
    hv11: {
        flexDirection: 'row'
    },
    i12: {
        width: 40,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view3: {
        width: '60%',
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        elevation: 8,
        flex: 1,
        margin: 15,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center'
    },
    view4: {
        marginTop: 150
    },
    txt4: {
        fontSize: 14,
        paddingLeft: 15,
        fontWeight: 'bold',

    },
    img3: {
        width: 25,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    img4: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -40

    },
    img5: {
        width: 35,
        height: 40,

        alignSelf: 'center'
    },
    txt3: {
        fontSize: 16,
        paddingLeft: 27,
        alignSelf: 'center',
        width: '70%',
        fontWeight: 'bold',
        color: '#153E73',
    },

})
