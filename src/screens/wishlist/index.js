import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, ScrollView, Modal } from 'react-native';

import StarRating from 'react-native-star-rating';



const data = [
    {
        "id": 1,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'price': '$ 28.5',
        stars: 4

    },
    {
        "id": 2,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'price': '$ 28.5',
        stars: 2

    }, {
        "id": 3,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'price': '$ 28.5',
        stars: 3

    }, {
        "id": 4,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'price': '$ 28.5',
        stars: 4


    },


];


export default class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            data: data,
            abc: false,
            danish: false,
            starCount: 4,
            modalVisible: false,


        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    onStarRatingPress(rating) {
        this.setState({
            starCount: rating
        });
    }
    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }
    handleIndexChange = index => {
        this.setState({
            ...this.state,
            selectedIndex: index
        });
    };
    onToggle(isOn) {
        console.log("Changed to " + isOn);
    }
    _menu = null;

    setMenuRef = ref => {
        this._menu = ref;
    };

    hideMenu = () => {
        this._menu.hide();
    };

    showMenu = () => {
        this._menu.show();
    };
    render() {
        const { modalVisible, setModalVisible } = this.state;


        return (
            <ScrollView>
                <View>
                    <View style={styles.mainview}>
                        <TouchableOpacity style={styles.view1}>
                            <View style={styles.view1}>
                                <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            <Text style={styles.txt1}>Wishlist</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white' }}>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (
                                <View style={{ justifyContent: 'space-around' }}>
                                    <View style={styles.view3}>
                                        <View style={{ width: '30%' }}>
                                            <Image source={item.pic} style={styles.img1}></Image>
                                        </View>

                                        <View style={styles.view4}>
                                            <Text style={styles.txt2}>{item.name}</Text>
                                            <View style={{ width: '20%', marginTop: 4, resizeMode: 'contain', }}>
                                                <StarRating
                                                    disabled={false}
                                                    maxStars={5}
                                                    rating={item.stars}
                                                    // selectedStar={(rating) => this.onStarRatingPress(rating)}
                                                    fullStarColor={'orange'}
                                                    starSize={15}
                                                    starStyle={{}}
                                                />

                                            </View>
                                            <Text style={styles.txt3}>{item.price}</Text>

                                        </View>
                                        <View style={styles.view9} >
                                            <TouchableOpacity style={{ marginLeft: '-10%' }} onPress={() => { this.props.navigation.navigate('cart'); }}>

                                                <View style={styles.view7}>
                                                    <Text style={styles.txt4}>Add to Bag</Text>
                                                </View>

                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => { this.setModalVisible(true); }} style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 15, alignContent: 'center', marginTop: 10 }}>
                                                <Image style={{ alignSelf: 'center', width: 15, height: 30 }} resizeMode='contain' source={require('../../assets/g7.png')}></Image>
                                            </TouchableOpacity>


                                        </View>
                                    </View>



                                </View>
                            )}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            this.setModalVisible(!this.state.modalVisible)
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>


                                <TouchableOpacity style={styles.v06}>

                                    <Text style={styles.t03} >Delete</Text>
                                </TouchableOpacity>


                            </View>
                        </View>

                    </Modal>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
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
    t03: {


    },
    v06: {
        borderBottomColor: '#DFDFDF',
        borderWidth: 1,
        width: 80,
        height: 30,
        marginTop: 10,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white'
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
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: 'white',
        flexDirection: 'row',
        marginTop: 40,
        alignSelf: 'center',
        width: '90%',
        elevation: 4,
        justifyContent: 'space-around'

    },

    img1: {
        width: 120,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    view4: {
        width: '30%',
        marginTop: 20,
        // marginLeft:'-5%'
    },
    txt2: {
        fontSize: 15,
        // marginLeft: 10,
        alignSelf: 'center',
        marginTop: 10

    },
    txt3: {
        // marginLeft: 15,
        marginTop: '25%',
        color: '#153E73',
        fontWeight: 'bold',
        fontSize: 18
    },
    view6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginLeft: 5
    },
    view7: {
        borderRadius: 5,
        // width: '65%',
        marginTop: 10,
        backgroundColor: 'white',
        height: 25,
        // borderWidth: 1,
        alignSelf: 'center',
        shadowColor: "red",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        height: 40,
        justifyContent: 'center',
        width: 90,
        marginLeft: -15


    },
    txt4: {
        textAlign: 'center',
        alignSelf: 'center',
        color: '#1397d5'


    },
    view8: {
        marginTop: 150
    },
    view9: {
        width: '30%',
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    }

})
