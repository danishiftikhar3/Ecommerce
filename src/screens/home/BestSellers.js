import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList, Image, TouchableOpacity, ImageBackground } from 'react-native'
import StarRating from 'react-native-star-rating';

const bdata = [
    {
        'id': '01',
        'name': "Jane Doe",
        'pic': require('../../images/boi.png'),
        stars: 4,
    },
    {
        'id': '02',
        'name': "Jane Doe",
        'pic': require('../../images/boi.png'),
        stars: 4,
    },
]

export default class BestSellers extends Component {
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

                <View style={{ flex: 1 }}>
                    <FlatList
                        data={bdata}

                        renderItem={({ item, index }) => (
                            <View style={styles.bf1}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View style={{ width: '30%', justifyContent: 'center', alignContent: 'center' }}>
                                        <Image style={{ width: 50, height: 50, alignSelf: 'center' }} source={item.pic}></Image>
                                    </View>
                                    <View style={{ width: '60%', justifyContent: 'center' }}>
                                        <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
                                        <View style={{ width: '15%', marginTop: 5, resizeMode: 'contain', }}>
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
                                        <TouchableOpacity>
                                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                                <Text style={{ color: '#DFDFDF', fontSize: 10, alignSelf: 'center' }}>Visit Store</Text>

                                                <Image style={{ width: 20, height: 30, alignSelf: 'center' }} source={require('../../images/for.png')}></Image>

                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>


                            </View>

                        )}
                        numColumns={2}
                        keyExtractor={item => item.id}
                    />
                </View>
                <View style={styles.h32}  >

                    <Image style={styles.i12} source={require('../../images/line1.png')}></Image>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hv2: {
        alignSelf: 'center',
        alignContent: 'center',


    },
    hv3: {
        alignSelf: 'center',
        alignContent: 'center',
        // marginTop: 100

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
    bf1: {
        alignSelf: 'center',
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 15,
        flex: 2,
        elevation: 8,
        marginTop: 20,
        margin: 15,
        width: '100%',
        alignSelf: 'center',
        padding: 15
    },

})
