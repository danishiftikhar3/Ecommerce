import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';
import ToggleSwitch from 'toggle-switch-react-native';
// import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';

const data = [
    {
        'id': '1',
        'n': 'ab',
        'q': 'ab',
        'base': 'ab',

    },
    {
        'id': '2',
        'n': 'ab',
        'q': 'ab',
        'base': 'ab',
    },
    {
        'id': '3',
        'n': 'ab',
        'q': 'ab',
        'base': 'ab',
    },
    {
        'id': '4',
        'n': 'ab',
        'q': 'ab',
        'base': 'ab',
    },
    {
        'id': '5',
        'n': 'ab',
        'q': 'ab',
        'base': 'ab',
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
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile2'); }}>
                            <View style={styles.view1}>
                                <Image style={styles.backimg} source={require('../../assets/g6.png')}></Image>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                            <Text style={styles.txt1}>Add Digital Products</Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('s8'); }}>
                                <Image style={styles.img1} source={require('../../assets/dabell.png')}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.v01}>
                        <View style={styles.v05}>

                            <View style={styles.v52}>
                                <View style={styles.v53}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('productsv2'); }}>

                                    <Image style={styles.i51} source={require('../../assets/g5.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                                <Text style={{ fontSize: 12, paddingTop: 10 }}>Add New Digital Products</Text>

                            </View>

                        </View>

                        <View style={styles.v02}>
                            <Text style={styles.t01}> Products</Text>
                        </View>
                        <View>
                            <View style={styles.v03}>
                                <View style={{ width: '10%' }}>
                                    <Text style={styles.t02}>#</Text>
                                </View>
                                <View style={{ width: '14%' }}>

                                    <Text style={styles.t02}>Name</Text>

                                </View>
                                <View style={{ width: '14%' }}>

                                    <Text style={styles.t02}>QTY</Text>

                                </View>
                                <View style={{ width: '16%' }}>

                                    <Text style={styles.t02}>Base Price</Text>
                                </View>
                                <View style={{ width: '16%' }}>

                                    <Text style={styles.t02}>Published</Text>
                                </View>
                                <View style={{ width: '16%' }}>

                                    <Text style={styles.t02}>Featured</Text>
                                </View>
                                <View style={{ width: '14%' }}>

                                    <Text style={styles.t02}>Options</Text>
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
                                            <View style={{ width: '10%', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={styles.t03}>{item.id}</Text>
                                            </View>
                                            <View style={{ width: '14%', justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={styles.t03}>{item.n}</Text>
                                            </View>
                                            <View style={{ width: '14%', justifyContent: 'center', alignItems: 'center' }}>

                                                <Text style={styles.t03}>{item.q}</Text>
                                            </View>
                                            <View style={{ width: '14%', justifyContent: 'center', alignItems: 'center' }}>

                                                <Text style={styles.t03}>{item.base}</Text>
                                            </View>
                                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>

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

                                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>

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
                                            <View style={{ width: '15%', alignItems: 'center', alignSelf: 'center', alignContent: 'center' }}>
                                                <TouchableOpacity onPress={() => { this.setModalVisible(true); }} style={{ alignSelf: 'center', justifyContent: 'center' }}>
                                                    <Image style={{ alignSelf: 'center', width: 15, height: 30 }} resizeMode='contain' source={require('../../assets/g7.png')}></Image>
                                                </TouchableOpacity>
                                            </View>

                                        </View>


                                        <Image style={{ width: '100%', height: 2, marginTop: 15, tintColor: '#DFDFDF' }} source={require('../../assets/divide.png')}></Image>


                                    </View>
                                )}

                                keyExtractor={item => item.id}
                            />
                        </View>
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
                                    <Text style={styles.t03}>Edit</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.v06}>

                                    <Text style={styles.t03} >Delete</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.v06}>

                                    <Text style={styles.t03}>Duplicate</Text>
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
    v53: {
        width: 60,
        height: 60,
        borderRadius: 40,
        backgroundColor: '#A1A1A1',
        borderColor: '#A1A1A1',
        marginTop: 10,
        justifyContent: 'center'

    },
    i51: {
        width: 25,
        height: 25,
        tintColor: 'black',
        alignSelf: 'center',


    },
    v52: {
        backgroundColor: 'white',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        width: '70%',
        alignItems: 'center',
        height: 110,
        alignSelf: 'center'
    },
    t52: {
        color: 'white',
        fontSize: 16
    },
    t53: {
        color: 'white',
        fontSize: 16
    },
    t51: {
        width: 40,
        height: 40,
        borderRadius: 40,
        backgroundColor: '#8DFBDB',
        borderWidth: 1,
        // opacity: 0.5,
        color: 'white',
        fontWeight: 'bold',
        alignSelf: 'center',
        textAlign: 'center',
        borderColor: '#0ACF97',
        fontSize: 28,
        marginTop: 10
    },
    v05: {
        flexDirection: 'row',
        flexDirection: 'row',
        marginTop: '15%',
        // justifyContent: 'space-between',
        alignItems: 'center',
        justifyContent: 'center'
    },

    v051: {
        backgroundColor: '#0ACF97',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#CFCFCF',
        width: '48%',
        alignItems: 'center',
        height: 110
    },
    v04: {
        flexDirection: 'row',
        // justifyContent: 'space-around',
        marginTop: 20,
        // marginLeft: -18
    },
    t02: {
        fontSize: 12,
        textAlign: 'center',
    },
    v03: {
        flexDirection: 'row',
        // justifyContent: 'space-evenly',
        marginTop: 20,
        // width: '110%'
    },
    t01: {
        marginLeft: '10%',
        alignSelf: 'center'
    },
    v01: {

        width: '80%',
        alignSelf: 'center',

    },
    v02: {
        backgroundColor: '#DFDFDF',
        width: '100%',
        height: 50,
        alignSelf: 'center',
        marginTop: '15%',
        flexDirection: 'row'

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
    t03:{
       

    },
    v06:{
        borderBottomColor:'#DFDFDF',
        borderWidth:1,
        width:80,
        height:30,
        marginTop:10,
        borderTopColor:'white',
        borderLeftColor:'white',
        borderRightColor:'white'
    }
})