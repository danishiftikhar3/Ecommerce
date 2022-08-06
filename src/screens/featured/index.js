import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';

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

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
            starCount: 3.5,
            modalVisible: false,
            isOnDefaultToggleSwitch: true,
            isOnLargeToggleSwitch: false,
            isOnBlueToggleSwitch: false,
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
    onToggle(isOn) {
        console.log("Changed to " + isOn);
    }
    render() {
        const { modalVisible, setModalVisible } = this.state;
        return (
            <ScrollView>
                <View>
                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <Image style={styles.backimg} source={require('../../assets/Backarrow.png')}></Image>
                        </View>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            <Text style={styles.txt1}>FEATURED</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => {
                                this.setModalVisible(true);
                            }} style={{ alignSelf: 'center', justifyContent: 'center' }}>
                                <Image style={styles.img1} source={require('../../assets/filter.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{
                        alignSelf: 'center', justifyContent: 'space-around',
                        backgroundColor: 'white', width: '100%', height: 40
                    }}>
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

                    <View style={{ marginTop: 10 }}>
                        <View style={{}}>
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
                    <View style={{ marginTop: 20 }}>

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
                                <View>
                                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Filter By Price</Text>
                                    <RangeSlider
                                         valueType="time"
                                         gravity={'center'}
                                         labelStyle={'none'}
                                         style={{width: '80%', height: 70}}
                                         min={1}
                                         max={60}
                                         selectionColor="#3df"
                                         blankColor="#f618"
                                         step={1000 * 60 * 60}
                                         textFormat="HH:mm"
                                         onValueChanged={this.handleSliderChange} />
                                    <View style={styles.view7}>
                                        <Text style={{ alignSelf: 'center', fontWeight: 'bold' }}>Size</Text>
                                        <SegmentedControlTab
                                            values={['L', "M", "S", "XL", 'XS',]}
                                            selectedIndex={this.state.selectedIndex}
                                            onTabPress={this.handleIndexChange}
                                            tabStyle={styles.tabbar}
                                            activeTabStyle={styles.tabbar1}
                                            activeTabTextStyle={styles.tabbartxta}
                                            tabTextStyle={styles.tabbartxt}
                                            tabsContainerStyle={{
                                                justifyContent: 'space-around', width: '80%',
                                                alignSelf: 'center',
                                            }}
                                        />
                                    </View>
                                    <View style={{ alignSelf: 'center' }}>
                                        <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Color</Text>
                                        <View style={{ marginLeft: -6, flexDirection: 'row' }}>
                                            <TouchableOpacity>
                                                <Image style={styles.colimg} source={require('../../assets/e1.png')}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image style={styles.colimg} source={require('../../assets/e2.png')}></Image>
                                            </TouchableOpacity><TouchableOpacity>
                                                <Image style={styles.colimg} source={require('../../assets/e3.png')}></Image>
                                            </TouchableOpacity><TouchableOpacity>
                                                <Image style={styles.colimg} source={require('../../assets/e4.png')}></Image>
                                            </TouchableOpacity>

                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>

                    </Modal>

                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around'
    },
    backimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 10,


    },
    homeimg: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view1: {

    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,
        fontFamily: 'CarosSoft',


    },
    img1: {
        width: 50,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    tabbar: {
        borderWidth: 0,
        borderColor: '#1397d5',

    },
    tabbar1: {
        borderColor: '#1397d5',
        borderWidth: 1,
        backgroundColor: 'white',
        borderTopEndRadius: 5,
        borderBottomEndRadius: 5,
        borderTopStartRadius: 5,
        borderBottomStartRadius: 5,
        borderLeftColor: '#1397d5',
        shadowColor: "#1397d5",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.51,
        shadowRadius: 13.16,

        elevation: 20,
    },
    tabbartxt: {
        color: '#1397d5'
    },
    tabbartxta: {
        color: '#1397d5'
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
    img4b: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -40

    },
    img5b: {
        width: 35,
        height: 40,

        alignSelf: 'center'
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
    txt4b: {
        fontSize: 14,
        paddingLeft: 15,
        fontWeight: 'bold',

    },
    txt2: {
        fontSize: 16,
        paddingLeft: 10
    },
 
    txt5: {
        fontSize: 14,
        color: 'red',
        paddingLeft: 15
    },
  
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
    view7: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        width: '80%',
        height: 60,
        flexDirection: 'row',
        marginTop: 20
    },
    colimg: {
        width: 40,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 20
    },
});