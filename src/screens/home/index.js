import * as React from 'react';
import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    Platform,
    Image,
    SafeAreaView,
    FlatList,
    ImageBackground,
    ScrollView,
} from 'react-native';
import StarRating from 'react-native-star-rating';
import Carousel from 'react-native-snap-carousel';
import SegmentedControlTab from "react-native-segmented-control-tab";
import SearchInput, { createFilter } from 'react-native-search-filter';


const { width: screenWidth } = Dimensions.get('window');

const data = [
    {
        'id': '01',
        'name': "Nike's Men Flex",
        'pic': require('../../assets/p1.png'),
        'price': '$24',
        stars: 4


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
        stars: 4


    },
]
const datal = [
    {
        'id': '01',
        'name': "Body Shop",
        'pic': require('../../assets/dbg1.png'),
        'des': 'lorem ipsum lorem ipsum loreum ',

    },
    {
        'id': '02',
        'name': "Body Shop",

        'pic': require('../../assets/dbg1.png'),

        'des': 'lorem ipsum lorem ipsum loreum ',


    },
]
const bdata = [
    {
        'id': '01',
        'name': "Jane Doe",
        'pic': require('../../assets/boi.png'),
        stars: 4,
    },
    {
        'id': '02',
        'name': "Jane Doe",
        'pic': require('../../assets/boi.png'),
        stars: 4,
    }, {
        'id': '03',
        'name': "Jane Doe",
        'pic': require('../../assets/boi.png'),
        stars: 4,
    }, {
        'id': '04',
        'name': "Jane Doe",
        'pic': require('../../assets/boi.png'),
        stars: 4,
    },
]
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


export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            danish: false,
            selectedIndex: 1,
            starCount: 3.5,
            activeIndex: 2,
            carouselItems: [
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
    searchUpdated(data) {
        this.setState({ searchData: data })
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
            <View style= {{}} >
                <View style={styles.mview1}>
                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('hs1'); }}>
                            <Image style={styles.backimg} source={require('../../assets/g6.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>

                        </View>
                        <View style={{ flexDirection: 'row', width: '33%' }}>

                            {this.state.danish == true ? <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                <SearchInput
                                    onChangeText={(data) => { this.searchUpdated(data) }}
                                    style={{ paddingLeft: -10 }}
                                    placeholder="Search"
                                />
                                <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={() => this.setState({ danish: !this.state.danish })}>
                                    <Image style={styles.i2} source={require('../../assets/sear.png')}></Image>
                                </TouchableOpacity>
                            </View>
                                : <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                                    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center' }}  onPress={() => { this.props.navigation.navigate('s8'); }}>
                                        <Image style={styles.i1} source={require('../../assets/g17.png')}></Image>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ alignSelf: 'center', justifyContent: 'center' }} onPress={() => this.setState({ danish: !this.state.danish })}>
                                        <Image style={styles.i2} source={require('../../assets/sear.png')}></Image>
                                    </TouchableOpacity>
                                </View>
                            }
                        </View>
                    </View>
                </View>
                <ScrollView>

                    <View style={{
                        width: '100%', flexDirection: 'row',
                        justifyContent: 'center', alignSelf: 'center',
                        alignItems: 'center', alignContent: 'center',
                        justifyContent: "space-around"
                    }}>
                        <View style={styles.mmainview1}>
                            <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                            </View>
                        </View>
                        <View style={styles.mmainview2}>
                            <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{
                        width: '100%', flexDirection: 'row',
                        justifyContent: 'center', alignSelf: 'center',
                        alignItems: 'center', alignContent: 'center',
                        justifyContent: "space-around"
                    }}>
                        <View style={styles.mmainview3}>
                            <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                            </View>
                        </View>
                        <View style={styles.mmainview4}>
                            <ImageBackground style={styles.mbackimg} source={require('../../assets/imgb2.png')}></ImageBackground>
                            <View>
                                <Text style={{ fontSize: 17, fontWeight: 'bold', textAlign: 'center', color: 'white', marginTop: -50 }}>Kids Fashion</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.hv1} >
                        <View style={styles.hv11}>
                            <Text style={styles.t1}>Best Deals </Text>
                            {/* <Image style={styles.i11} source={require('../../assets/g16.png')}></Image> */}

                        </View>
                        <Image style={styles.i12} source={require('../../assets/line1.png')}></Image>

                    </View>


                    <View style={styles.cv}>
                        <Carousel
                            layout={"default"}
                            ref={ref => this.carousel = ref}
                            data={this.state.carouselItems}
                            sliderWidth={screenWidth}
                            sliderHeight={screenWidth}
                            itemWidth={screenWidth - 180}
                            renderItem={this._renderItem}
                            onSnapToItem={index => this.setState({ activeIndex: index })} />
                    </View>
                    <View style={styles.hv1} >
                        <View style={styles.hv11}>
                            <Text style={styles.t1}>Best Selling Products </Text>
                            {/* <Image style={styles.i11} source={require('../../assets/g16.png')}></Image> */}

                        </View>
                        <Image style={styles.i12} source={require('../../assets/line1.png')}></Image>

                    </View>
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

                    <View style={styles.hv1} >
                        <View style={styles.hv11}>
                            <Text style={styles.t1}>Live Streaming </Text>
                            <Image style={styles.i11} source={require('../../assets/g16.png')}></Image>

                        </View>
                        <Image style={styles.i12} source={require('../../assets/line1.png')}></Image>

                    </View>
                    <View style={styles.flatlist}>
                        <View style={{ width: '100%' }}>
                            <FlatList
                                data={datal}
                                renderItem={({ item, index }) => (

                                    <View style={styles.fv1}>
                                        <ImageBackground style={styles.fi1} source={item.pic}>

                                            <View style={styles.fv2}>

                                                <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }} >
                                                    <Text style={styles.ft1}>{item.name}</Text>
                                                    <Image style={styles.fi3} source={require('../../assets/mheart.png')}></Image>

                                                </View>
                                                <Text style={styles.ft2}>{item.des}</Text>

                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
                                                    <Image style={styles.fi4} source={require('../../assets/g2.png')}></Image>
                                                    <Image style={styles.fi3} source={require('../../assets/g3.png')}></Image>
                                                </View>

                                            </View>


                                        </ImageBackground>
                                    </View>


                                )}
                                numColumns={2}
                                keyExtractor={item => item.id}
                            />
                        </View>
                    </View>
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
                    <View style={styles.hv2}  >
                        <View style={styles.hv11}>
                            <Text style={styles.t1}>Best Selling Products </Text>
                            {/* <Image style={styles.i11} source={require('../../assets/g16.png')}></Image> */}

                        </View>
                        <Image style={styles.i12} source={require('../../assets/line1.png')}></Image>

                    </View>

                    <View style={{ marginBottom: 25 }}>
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
                                            <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                                                <Text style= {{color:'#DFDFDF', fontSize:10, alignSelf:'center'}}>Visit Store</Text>
                                              
                                                <Image style={{ width: 20, height: 30, alignSelf:'center' }} source={require('../../assets/for.png')}></Image>
                                              
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
                    <View style={styles.hv2}  >
                      
                        <Image style={styles.i12} source={require('../../assets/line1.png')}></Image>

                    </View>
                </ScrollView>

            </View>
        );
    }
}
const styles = StyleSheet.create({
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
    mmainview1: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mmainview2: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mmainview3: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mmainview4: {
        borderWidth: 1,
        borderBottomColor: '#c0c0c0',
        backgroundColor: '#e4b47c',
        width: 160,
        height: 80,
        borderRadius: 8,
        borderColor: 'transparent',
        // marginTop: 45,
        // marginLeft: 10,
        alignSelf: 'center',
        marginBottom: 25
    },
    mbackimg: {
        width: '100%',
        height: 80,
        resizeMode: 'contain',
        justifyContent: 'center',
        alignSelf: 'center',
        opacity: 0.5
    },

    hv2: {
        alignSelf: 'center',
        alignContent: 'center',
        marginBottom: 20

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
    tabview: {
        alignSelf: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        width: '100%',
        height: 40,
        marginTop: 20
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
    flatlist: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 10,
        justifyContent: 'space-around',
        marginBottom: 20
    },
    fv1: {
        flex: 2,
        // width: '60%',
        margin: 15,
        alignItems: 'center',
        // borderRadius: 20,
        // borderWidth: 2,

        justifyContent: 'space-around'

    },
    fi1: {
        width: '105%',
        height: 100,

        // borderWidth: 2,
        // borderRadius:20

    },
    fi2: {
        width: '105%',
        height: 100,
        opacity: 0.7,
        borderWidth: 0.1,
        borderTopStartRadius: 20
    },
    fv2: {
        width: '90%',
        justifyContent: 'space-around',
        alignSelf: 'center'
    },
    ft1: {
        color: 'white',
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 15
    },
    fi3: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    ft2: {
        color: 'white',
        textAlign: 'right',
        fontSize: 10,

        marginTop: 8
    },
    fi4: {
        width: 50,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view4: {
        marginTop: 150
    },
    txt4: {
        fontSize: 14,
        paddingLeft: 15,
        fontWeight: 'bold',

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
    img4: {
        width: 150,
        height: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: -40

    },
    img3: {
        width: 25,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    t1: {
        fontSize: 14
    },
    i12: {
        width: 40,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    i11: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    hv11: {
        flexDirection: 'row'
    },
    hv1: {
        alignSelf: 'center',
        alignContent: 'center'

    },
    cv: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        marginBottom: 35,
        marginTop:35
    },
    i2: {
        width: 50,
        height: 15,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    mview1: {
        borderWidth: 1,
        marginBottom: 25,
        // position:'absolute'

    },

    mainview: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    backimg: {
        width: 35,
        height: 35,
        resizeMode: 'contain',
        justifyContent: 'center',

        // alignSelf: 'center',


    },
    homeimg: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view1: {
        justifyContent: 'center',
        width: '33%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '33%'

    },
    txt1: {
        alignSelf: 'center',
        fontSize: 22,
        fontFamily: 'CarosSoft',


    },
    i1: {
        width: 50,
        height: 18,
        resizeMode: 'contain',
        alignSelf: 'center'
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

    item: {
        width: '100%',
        height: 250,
        backgroundColor: "white",
        borderRadius: 20

    },
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

    heart: {
        resizeMode: "contain",
        height: 30,
        width: '15%',
    },



});
