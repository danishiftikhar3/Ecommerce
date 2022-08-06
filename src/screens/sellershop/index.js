import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal, ScrollView } from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';

const data = [
    {
        'id': '01',
        'name': "Floral Dress",
        'pic': require('../../assets/dress1.png'),
        'price': '$14.99',

    },
    {
        'id': '02',
        'name': "Floral Dress",
        'pic': require('../../assets/dress1.png'),
        'price': '$14.99',
    },
    {
        'id': '03',
        'name': "Floral Dress",
        'pic': require('../../assets/dress1.png'),
        'price': '$14.99',
    },
    {
        'id': '04',
        'name': "Floral Dress",
        'pic': require('../../assets/dress1.png'),
        'price': '$14.99',
    },
    {
        'id': '05',
        'name': "Floral Dress",
        'pic': require('../../assets/dress1.png'),
        'price': '$14.99',
    },
    {
        'id': '06',
        'name': "Floral Dress",
        'pic': require('../../assets/dress1.png'),
        'price': '$14.99',
    },
]
const dat = [
    {
        'id': '01',
        'name': "Grey Jacket",
        'pic': require('../../assets/jack.png'),
        'price': '$14.99',

    },
    {
        'id': '02',
        'name': "Grey Jacket",
        'pic': require('../../assets/jack.png'),
        'price': '$14.99',
    },
    {
        'id': '03',
        'name': "Grey Jacket",
        'pic': require('../../assets/jack.png'),
        'price': '$14.99',
    },
]
const review = [
    {
        'id': '01',
        'name': "Jane Doe",
        'let': 'JD',
        'pic': require('../../assets/heal.png'),
        'pic1': require('../../assets/pic1.png'),
        'pic2': require('../../assets/pic2.png'),
        'pic3': require('../../assets/pic3.png'),
        'pic4': require('../../assets/pic4.png'),
        'des': 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'date': '10 OCT 2020',
        'backcol': '#B7E6E6',

    },
    {
        'id': '02',
        'name': "Jane Doe",
        'let': 'JD',
        'pic': require('../../assets/heal.png'),
        'des': 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'date': '10 OCT 2020',
        'backcol': '#B7E6E6',
        'pic1': require('../../assets/pic1.png'),
        'pic2': require('../../assets/pic2.png'),
        'pic3': require('../../assets/pic3.png'),
        'pic4': require('../../assets/pic4.png'),
    },
    {
        'id': '03',
        'name': "Jane Doe",
        'let': 'JD',
        'pic': require('../../assets/heal.png'),
        'des': 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
        'date': '10 OCT 2020',
        'backcol': '#B7E6E6',
        'pic1': require('../../assets/pic1.png'),
        'pic2': require('../../assets/pic2.png'),
        'pic3': require('../../assets/pic3.png'),
        'pic4': require('../../assets/pic4.png'),
    },
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
            //Default selected Tab Index for single select SegmentedControlTab
            selectedIndices: [0],
            //Default selected Tab Indexes for multi select SegmentedControlTab
            customStyleIndex: 0,
            //Default selected Tab Indexes for cusatom SegmentedControlTab
            selectedIndex: 0,
            modalVisible: false,
        };
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
    handleSingleIndexSelect = (index) => {
        //handle tab selection for single Tab Selection SegmentedControlTab
        this.setState(prevState => ({ ...prevState, selectedIndex: index }));
    };

    handleMultipleIndexSelect = (index) => {
        //handle tab selection for multi Tab Selection SegmentedControlTab
        const { selectedIndices } = this.state;
        if (selectedIndices.includes(index)) {
            //if included in the selected array then remove
            this.setState(prevState => ({
                ...prevState,
                selectedIndices: selectedIndices.filter(i => i !== index),
            }));
        } else {
            //if not included in the selected array then add
            this.setState(prevState => ({
                ...prevState,
                selectedIndices: [...selectedIndices, index],
            }));
        }
    };

    handleCustomIndexSelect = (index) => {
        //handle tab selection for custom Tab Selection SegmentedControlTab
        this.setState(prevState => ({ ...prevState, customStyleIndex: index }));
    };

    render() {
        const { selectedIndex, selectedIndices, customStyleIndex } = this.state;
        return (
            <ScrollView>
                <View>
                    <View>
                        <ImageBackground style={styles.img1} source={require('../../assets/cover.png')}>
                            <ImageBackground style={styles.img2} source={require('../../assets/cover1.png')}>

                                <View style={styles.v1}>
                                    <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                                    <View style={styles.v2}>
                                        <Text style={styles.t1}>ELEGANCE</Text>
                                        <Text style={styles.t2}>All your fashion needs under one roof</Text>
                                    </View>
                                    <Image style={styles.img3} source={require('../../assets/sear.png')}></Image>

                                </View>
                            </ImageBackground>
                        </ImageBackground>

                    </View>
                    <View style={styles.tabview}>
                        <SegmentedControlTab
                            values={['Home', 'Products', ' Reviews']}
                            selectedIndex={customStyleIndex}
                            onTabPress={this.handleCustomIndexSelect}
                            borderRadius={0}
                            tabsContainerStyle={styles.tabsContainerStyle}
                            tabStyle={styles.tabStyle}
                            firstTabStyle={styles.firstTabStyle}
                            lastTabStyle={styles.lastTabStyle}
                            tabTextStyle={styles.tabTextStyle}
                            activeTabStyle={styles.activeTabStyle}
                            activeTabTextStyle={styles.activeTabTextStyle}
                        />
                        {customStyleIndex === 0 && (
                            <View style={styles.v01}>
                                <Text style={styles.t01}>Trending</Text>
                                <ScrollView horizontal={true}>
                                    <View style={styles.v02}>
                                        <ImageBackground style={styles.i01} source={require('../../assets/Base.png')}>
                                            <View style={{ marginTop: '5%' }}>
                                                <Text style={styles.t02}>Look Soft</Text>
                                                <Text style={styles.t02}>like</Text>
                                                <Text style={styles.t02}>a Postel this</Text>
                                            </View>
                                            <View style={styles.v03}>
                                                <Text style={styles.t03}>COLLECTION</Text>
                                                <Image style={styles.i03} source={require('../../assets/g4.png')}></Image>

                                            </View>
                                        </ImageBackground>
                                        <ImageBackground style={styles.i01} source={require('../../assets/Base.png')}>
                                            <View style={{ marginTop: '5%' }}>
                                                <Text style={styles.t02}>Look Soft</Text>
                                                <Text style={styles.t02}>like</Text>
                                                <Text style={styles.t02}>a Postel this</Text>
                                            </View>
                                            <View style={styles.v03}>
                                                <Text style={styles.t03}>COLLECTION</Text>
                                                <Image style={styles.i03} source={require('../../assets/g4.png')}></Image>

                                            </View>
                                        </ImageBackground>

                                    </View>
                                </ScrollView>

                                <View style={{ width: '100%' }}>
                                    <FlatList
                                        data={data}
                                        renderItem={({ item, index }) => (

                                            <View style={styles.fv01}>

                                                <Image resizeMode='contain' source={item.pic}></Image>
                                                <Text>{item.name}</Text>
                                                <Text style={styles.price}>{item.price}</Text>

                                            </View>




                                        )}
                                        numColumns={3}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </View>
                        )}
                        {customStyleIndex === 1 && (
                            <View style={{ backgroundColor: 'white' }}>
                                <View style={{ width: '100%' }}>
                                    <FlatList
                                        data={data}
                                        renderItem={({ item, index }) => (

                                            <View style={styles.fv01}>

                                                <Image resizeMode='contain' source={item.pic}></Image>
                                                <Text>{item.name}</Text>
                                                <Text style={styles.price}>{item.price}</Text>

                                            </View>




                                        )}
                                        numColumns={3}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                                <View style={styles.v11}>
                                    <Text style={styles.t11}>Jackets</Text>
                                    <Text style={styles.t12}>SEE ALL</Text>

                                </View>
                                <FlatList
                                    data={dat}
                                    renderItem={({ item, index }) => (

                                        <View style={styles.fv01}>

                                            <Image resizeMode='contain' source={item.pic}></Image>
                                            <Text>{item.name}</Text>
                                            <Text style={styles.price}>{item.price}</Text>

                                        </View>




                                    )}
                                    numColumns={3}
                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )}
                        {customStyleIndex === 2 && (
                            <View style={{ backgroundColor: 'white' }}>
                                <FlatList
                                    data={review}
                                    renderItem={({ item, index }) => (

                                        <View style={styles.v20}>
                                            <View style={{
                                                width: '70%',
                                                height: '50%',
                                                borderRadius: 70,
                                                backgroundColor: item.backcol,
                                                width: '20%',
                                                justifyContent: 'center',
                                                flexDirection: 'row',
                                                opacity: 0.6,
                                            }}>
                                                <Text style={{

                                                    alignSelf: 'center',
                                                    alignItems: 'center',
                                                    textAlign: 'center',
                                                    textAlignVertical: 'center',
                                                    fontSize: 22,
                                                    fontWeight: 'bold',
                                                    color: item.backcol
                                                }}  >{item.let}</Text>

                                            </View>

                                            <View style={styles.v21}>

                                                <View style={styles.v22}>
                                                    <View style={{ width: '10%', marginTop: 4, resizeMode: 'contain', }}>
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
                                                    <Text style={styles.t20}>{item.date}</Text>

                                                </View>
                                                <View>
                                                    <Text>{item.name}</Text>
                                                    <Text style={styles.t21}>{item.des}</Text>
                                                </View>
                                                <View style={styles.v23}>
                                                    <Image style={styles.i20} source={item.pic}></Image>
                                                    <Image style={styles.i20} source={item.pic1}></Image>
                                                    <Image style={styles.i20} source={item.pic2}></Image>
                                                    <Image style={styles.i20} source={item.pic3}></Image>
                                                    <Image style={styles.i20} source={item.pic4}></Image>

                                                </View>
                                            </View>




                                        </View>




                                    )}

                                    keyExtractor={item => item.id}
                                />
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    price:{
        fontWeight: 'bold', 
       marginLeft:'-28%'
    },
    i20: {
        width: 44,
        height: 44,
        resizeMode: 'contain'
    },
    v23: {
        width: '90%',
        // alignSelf:'center',
        justifyContent: 'space-between',
        marginTop: '5%',
        flexDirection: 'row'
    },
    t21: {
        width: '75%',
        marginTop: '2%',
        color: '#606B7D'
    },
    t20: {
        color: '#606B7D'
    },
    v22: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    v20: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    v21: {
        width: '75%',
        marginLeft: '5%'


    },
    v11: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center',

    },
    t12: {
        color: 'red',
        alignSelf: 'center'
    },
    t11: {

        fontSize: 20,
        fontWeight: 'bold'
    },
    fv02: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
        // borderWidth:1
    },
    fv01: {
        flex: 2,
        margin: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,
        height: 130,
        elevation: 20,
        borderWidth: 0.02,
        backgroundColor: 'white',
        borderRadius: 5

    },
    i03: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',

        alignSelf: 'center',


    },
    t03: {
        textAlign: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    v03: {
        marginLeft: '18%',
        marginTop: '2%',
        backgroundColor: 'white',
        width: '40%',
        height: 40,
        borderRadius: 20,
        justifyContent: 'space-around',
        flexDirection: 'row'
    },
    t02: {
        color: 'white',
        // alignSelf:'center',
        fontWeight: '900',
        fontSize: 22,
        marginLeft: '18%',
        // marginTop:'1%'
    },
    v02: {
        flexDirection: 'row',
        marginLeft: -18
    },
    i01: {
        width: 350,
        height: 180,
        resizeMode: 'contain'

    },
    v01: {
        backgroundColor: 'white'
    },
    t01: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 15,
        marginTop: 15
        ,
    },
    img1: {
        width: '100%',
        height: 200
    },
    img2: {
        width: '100%',
        height: 200,
        opacity: 0.7
    },
    backimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,
        alignSelf: 'center',
        marginTop: -20

    },
    img3: {
        width: 20,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center',
        tintColor: 'white',
        marginTop: -20

    },
    v1: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignSelf: 'center',
        width: '90%'
    },
    t1: {
        color: 'white',
        fontSize: 26,
        textAlign: 'center'

    },
    t2: {
        color: 'white',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 16
    },
    v2: {
        marginTop: 55,

    },
    tabsContainerStyle: {



    },
    tabStyle: {
        borderColor: 'transparent',
        backgroundColor: 'white'
    },
    firstTabStyle: {
        //custom styles
    },
    lastTabStyle: {
        //custom styles
    },
    tabTextStyle: {
        color: 'black'
    },
    activeTabStyle: {
        borderBottomColor: '#ffbd11',
        borderBottomWidth: 3,
        backgroundColor: 'white'

    },
    activeTabTextStyle: {
        // fontWeight: 'bold',
        color: '#ff6969'
    },
    tabBadgeContainerStyle: {
        //custom styles
    },
    activeTabBadgeContainerStyle: {
        backgroundColor: 'red'
    },
    tabBadgeStyle: {
        //custom styles
    },
    activeTabBadgeStyle: {
        //custom styles
    },
    container: {
        backgroundColor: '#FFFFFF',


    },

})