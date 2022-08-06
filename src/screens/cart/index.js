import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';

import StarRating from 'react-native-star-rating';
import { ScrollView } from 'react-native-gesture-handler';

const data = [
    {
        "id": 1,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'backgroundcolor': 'white',
        'price': '$28',
        stars: 4,
        'Qty': 1
    },
    {
        "id": 2,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'backgroundcolor': 'white',
        'price': '$28',
        stars: 4,
        'Qty': 1
    },
    {
        "id": 3,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'backgroundcolor': 'white',
        'price': '$28',
        stars: 4,
        'Qty': 1
    },
    {
        "id": 4,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'backgroundcolor': 'white',
        'price': '$28',
        stars: 4,
        'Qty': 1
    },
    {
        "id": 5,
        "name": "Nike's Flex Men",
        'pic': require('../../assets/p5.png'),
        'backgroundcolor': 'white',
        'price': '$28',
        stars: 4,
        'Qty': 1
    },

];


export default class Cart extends Component {
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

    add(num) {
        console.log(num);
        var arr = this.state.data;

        let count1 = arr[num].Qty;
        count1 = parseInt(count1) + 1;
        // console.log(count1)
        arr[num].Qty = count1;

        this.setState({
            data: arr
        });
        // this.caculationsFN();


    }

    minus(num) {
        var arr = this.state.data;
        console.log(num)
        let count1 = arr[num].Qty;
        console.log(count1)
        count1 = parseInt(count1) - 1;
        console.log(count1)

        if (count1 <= 0) {
            count1 == 0
        }
        arr[num].Qty = count1;
        this.setState({
            data: arr,
        });
    }
    onSwipe(gestureName, gestureState) {
        const { SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT } = swipeDirections;
        this.setState({ gestureName: gestureName });
        switch (gestureName) {
            case SWIPE_UP:
                this.setState({ abc: true });
                break;
            case SWIPE_DOWN:
                this.setState({ abc: true });
                break;
            case SWIPE_LEFT:
                this.setState({ abc: true, });
                break;
            case SWIPE_RIGHT:
                this.setState({ abc: true });
                break;
        }
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
            <View >
                <View >
                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                        </View>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            <Text style={styles.txt1}>Bag</Text>
                        </View>
                    </View>
                    <View style={{ flexGrow: 1 }}>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (

                                <View >
                                    <View style={styles.view3}>
                                        <View style={{ width: '40%' }}>
                                            <Image source={item.pic} style={styles.img1}></Image>
                                        </View>

                                        <View style={styles.view4}>
                                            <Text style={styles.txt2}>{item.name}</Text>

                                            <View style={{ width: '20%', marginTop: 4, resizeMode: 'contain', marginLeft: 12, }}>
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

                                        <View style={{ width: '40%', flexDirection: 'row' }} >
                                            <View style={styles.view8}>
                                                <Text style={styles.txt8}>Quantity</Text>
                                                <View style={styles.view6}>
                                                    <TouchableOpacity onPress={() => this.minus(index)}>
                                                        <Image resizeMode="contain" style={{ width: 20, height: 20, }} source={require('../../assets/minus.png')}></Image>
                                                    </TouchableOpacity>
                                                    <Text style={{ fontSize: 20, alignSelf: 'center', marginTop: -5 }}>  {item.Qty}  </Text>

                                                    <TouchableOpacity onPress={() => this.add(index)}>
                                                        <Image resizeMode="contain" style={{ width: 20, height: 20, }} source={require('../../assets/plus.png')}></Image>
                                                    </TouchableOpacity>


                                                </View>
                                            </View>
                                            <TouchableOpacity onPress={() => { this.setModalVisible(true); }} style={{ alignSelf: 'center', justifyContent: 'center', marginLeft: 15, alignContent: 'center', marginTop: 10 }}>
                                                <Image style={{ alignSelf: 'center', width: 15, height: 30 }} resizeMode='contain' source={require('../../assets/g7.png')}></Image>
                                            </TouchableOpacity>


                                        </View>

                                    </View>
                                </View>
                            )}
                            keyExtractor={item => item.id}
                            ListFooterComponent={<View style={{ height: 300 }} />}
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
            </View>
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
        height: 70
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
        width: '35%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 30
    },
    view3: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1397D5',
        flexDirection: 'row',
        marginTop: 40,
        alignSelf: 'center',
        width: '90%',
        elevation: 10,
        shadowColor: '#1397D5',
        justifyContent: 'space-around'
    },
    view5: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1397D5',
        flexDirection: 'row',
        width: '65%',
        elevation: 2,


    },
    img1: {
        width: 120,
        height: 150,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    view4: {
        width: '30%',
        marginTop: 10,
        // marginLeft: -50,

    },
    txt2: {
        fontSize: 15,
        // marginLeft: 10,
        // alignSelf: 'center',
        marginTop: 10,
        marginLeft: 12

    },
    txt3: {
        marginLeft: 15,
        marginTop: '25%',
        color: '#153E73',
        fontWeight: 'bold',
        fontSize: 18
    },
    view6: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        alignSelf: 'center'
    },
    view7: {
        borderRadius: 10, width: '40%', alignSelf: 'center', marginTop: 25,
        backgroundColor: '#1397d5',
        height: 50,
    },
    txt4: {
        color: 'white',
        textAlign: 'center',
        marginTop: 10,

    },
    txt8: {
        fontSize: 18,
        // marginLeft: 5,
        // fontWeight: 'bold',
        alignSelf: 'center',

    },
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


})
