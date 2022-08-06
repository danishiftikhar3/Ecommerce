import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';
import ToggleSwitch from 'toggle-switch-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

var hobbies = [
    { value: 0 },

];
const data = [
    {
        'id': '1',
        'ordercode': '123456',
        'productNum': '2',
        'customer': 'Geust (408)',
        'amount': '$300.00',
    },
    {
        'id': '2',
        'ordercode': '123456',
        'productNum': '2',
        'customer': 'Geust (408)',
        'amount': '$300.00',
    },
    {
        'id': '3',
        'ordercode': '123456',
        'productNum': '2',
        'customer': 'Geust (408)',
        'amount': '$300.00',
    },
    {
        'id': '4',
        'ordercode': '123456',
        'productNum': '2',
        'customer': 'Geust (408)',
        'amount': '$300.00',
    },
    {
        'id': '5',
        'ordercode': '123456',
        'productNum': '2',
        'customer': 'Geust (408)',
        'amount': '$300.00',
    },
]
export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: 'Delivery Status',
            selectedIndex: 1,
            starCount: 3.5,
            modalVisible: false,
            isOnDefaultToggleSwitch: true,
            isOnDefaultToggleSwitch1: true,
            isOnLargeToggleSwitch1: false,
            isOnBlueToggleSwitch1: false,

            isOnLargeToggleSwitch: false,
            isOnBlueToggleSwitch: false,
            filepath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: ''
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
        return (
            <View>
                <View style={styles.mainview}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile2'); }}>
                        <View style={styles.view1}>
                            <Image style={styles.backimg} source={require('../../assets/g6.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                        <Text style={styles.txt1}>Orders</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('s8'); }}>
                            <Image style={styles.img1} source={require('../../assets/dabell.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{}}>
                            
                        </View>
                <View style={styles.v01}>
                    <View style={styles.v02}>
                        <View style= {{width:'50%', justifyContent:'center'}}>
                        <TextInput style={styles.in} placeholder="Enter Order Code"></TextInput>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center',  }}>
                            <Text style={styles.t06}>Paid  </Text>
                            <ToggleSwitch
                                size="small"
                                isOn={this.state.isOnDefaultToggleSwitch}
                                onColor="#B7E6E6"
                                onToggle={isOnDefaultToggleSwitch => {
                                    this.setState({ isOnDefaultToggleSwitch });
                                    this.onToggle(isOnDefaultToggleSwitch);


                                }}
                            />
                           <DropDownPicker
                                placeholder='Delivery Status'
                                
                                items={[
                                    { label: 'Delivered ', value: 'Delivered', },
                                    { label: 'Pending ', value: 'Pending', },
                                    { label: 'Delivery Status ', value: 'Delivery Status', },

                                ]}

                                defaultValue={this.state.country}
                                containerStyle={{ height: 30 }}
                                style={{ backgroundColor: 'DFDFDF', height: 30 , width:100 , 
                                 }}
                                itemStyle={{
                                    justifyContent: 'flex-start'

                                }}
                                dropDownStyle={{ backgroundColor: 'white' ,zIndex:12}}
                                onChangeItem={item => this.setState({
                                    country: item.value

                                })}
                            />
                        </View>
                    </View>
                    <View>
                        <View style={styles.v03}>
                            <View style={{ width: '10%' }}>
                                <Text style={styles.t02}>#</Text>
                            </View>
                            <View style={{ width: '16%' }}>

                                <Text style= {styles.t02}>Order-Code</Text>
                            </View>
                            <View style={{ width: '17%' }}>

                                <Text style={styles.t02}>#-Product</Text>
                            </View>
                            <View style={{ width: '16%' }}>

                                <Text style={styles.t02}>Customer</Text>
                            </View>
                            <View style={{ width: '16%' }}>

                                <Text style={styles.t02}>Amount</Text>
                            </View>
                            <View style={{ width: '16%' }}>

                                <Text style={styles.t02}>Status</Text>
                            </View>


                        </View>
                        <View>
                            <Image style={{ width: '100%', height: 2, marginTop: 15, tintColor: '#DFDFDF' }} source={require('../../assets/divide.png')}></Image>
                        </View>
                        <FlatList
                            data={data}
                            renderItem={({ item, index }) => (
                                <View >
                                    <View style={styles.v04}>
                                        <View style={{ width: '16%' }}>
                                            <Text style={styles.t03}>{item.id}</Text>
                                        </View>
                                        <View style={{ width: '16%' }}>
                                            <Text style={styles.t03}>{item.ordercode}</Text>
                                        </View>
                                        <View style={{ width: '16%' }}>

                                            <Text style={styles.t03}>{item.productNum}</Text>
                                        </View>
                                        <View style={{ width: '18%' }}>

                                            <Text style={styles.t03}>{item.customer}</Text>
                                        </View>
                                        <View style={{ width: '18%' }}>

                                            <Text style={styles.t03}>{item.amount}</Text>
                                        </View>

                                        <View style={{ width: '16%' }}>

                                            <ToggleSwitch

                                                isOn={this.state.isOnDefaultToggleSwitch}
                                                size="small"

                                                onColor="#B7E6E6"
                                                onToggle={isOnDefaultToggleSwitch1 => {
                                                    this.setState({ isOnDefaultToggleSwitch1 });
                                                    this.onToggle(isOnDefaultToggleSwitch1);


                                                }}
                                            />
                                        </View>
                                    </View>


                                    <Image style={{ width: '100%', height: 2, marginTop: 15, tintColor: '#DFDFDF' }} source={require('../../assets/divide.png')}></Image>


                                </View>
                            )}

                            keyExtractor={item => item.id}
                        />
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    t06: {
        fontSize: 10
    },
    in: {
        backgroundColor: 'white',
        width: '90%',
        height: 35,
        alignSelf: 'center'
    },
    t03: {
        fontSize: 12,
        textAlign: 'center',
    },
    t04: {
        fontSize: 12,
        marginLeft: '15%'
    },
    t05: {
        fontSize: 12,
        marginLeft: '12%'
    },
    v04: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginTop: 20,
        // marginLeft: -5

    },
    t02: {
        fontSize: 12,
        textAlign: 'center',
    },
    v03: {
        flexDirection: 'row',
        // width:'90%',
        marginTop: 20,
        alignSelf: 'center'
    },
    t01: {
        marginLeft: '10%',
        alignSelf: 'center'
    },
    v01: {

        width: '90%',
        alignSelf: 'center',

    },
    v02: {
        backgroundColor: '#DFDFDF',
        width: '100%',
        height: 50,
        alignSelf: 'center',
        marginTop: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between'

    },
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around'
    },
    backimg: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: '60%'


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
        fontSize: 18,
        fontFamily: 'CarosSoft',


    },
    img1: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})