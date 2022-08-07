import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, FlatList, TouchableOpacity, ImageBackground } from 'react-native'
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';


const dataB = [
    {
        'id': '01',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),
        'price': '$24',

    },
    {
        'id': '02',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',

    },
    {
        'id': '03',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',

    },
    {
        'id': '04',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p61.png'),
        'price': '$24',

    },
    {
        'id': '05',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',

    },
    {
        'id': '06',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),

        'price': '$24',

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
            <View>
                <View style={styles.tabview}>
                    <SegmentedControlTab
                        values={['All', 'Women', 'Kids', 'Men', 'Essential']}
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
                <View style={{ marginBottom: 25 }}>
                    <FlatList
                        data={dataB}
                        renderItem={({ item, index }) => (
                            <View style={styles.view3b}>
                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <TouchableOpacity>
                                        <Image style={styles.img3b} source={require('../../assets/share.png')}></Image>
                                    </TouchableOpacity>
                                    <Image style={styles.img3b} source={require('../../assets/heart.png')}></Image>

                                </View>

                                <ImageBackground style={styles.img4b} source={item.pic}>


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
                                    <Text style={styles.txt3b}>{item.price}</Text>
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
    tabbar1: {
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        // borderLeftColor: '#1397d5',
        shadowColor: "#1397d5",
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        flex: 1,
        elevation: 20,
    },
    tabbartxta: {
        color: '#1397d5',
        fontWeight: 'bold'
    },
    tabbartxt: {
        color: 'black'
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
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -40

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
        color: '#153E73'
    },
})
