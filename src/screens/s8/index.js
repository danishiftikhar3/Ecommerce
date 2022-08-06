import React, { Component } from 'react';
import { ImageBackground, TextInput, StyleSheet, Text, View, SafeAreaView, 
    ScrollView, TouchableOpacity, Image, BackHandler } from 'react-native';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    render() {
        return (
            // main
            <View style={styles.main}>
                {/* top1 */}
                <View style={styles.top1}>

                    <TouchableOpacity onPress={this.handleBackButtonClick}>
                        <Image
                            style={styles.left}
                            source={require('../../assets/left.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.box1}>
                        <Text style={styles.txt1}>Notifications</Text>

                    </View>

                    <TouchableOpacity>
                        <Image
                            style={styles.close}
                            source={require('../../assets/close.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* line */}
                <View style={styles.line1}></View>


                {/* cbag */}
                <>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.top2}>
                                <Image
                                    style={styles.cbag}
                                    source={require('../../assets/cbag.png')}
                                />

                                <View style={styles.box2}>
                                    <Text style={styles.txt3}>Smiley’s Store marked your</Text>
                                    <Text style={styles.txt4}>order <Text style={styles.txt5}> #1982984 </Text> as shipped</Text>

                                </View>

                                <View style={styles.time1}>
                                    <Text style={styles.txt6}>9.20 AM</Text>
                                    <Image
                                        style={styles.dot}
                                        source={require('../../assets/dot.png')}
                                    />

                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line2}></View>

                            {/* wt */}

                            <View style={styles.top3}>
                                <Image
                                    style={styles.bmap}
                                    source={require('../../assets/bmap.png')}
                                />

                                <View style={styles.box3}>
                                    <Text style={styles.txt7}>Package from your order </Text>
                                    <Text style={styles.txt8}>#1982345<Text style={styles.txt9}> has arrived to destination country.</Text></Text>
                                </View>

                                <View style={styles.time2}>
                                    <Text style={styles.txt10}>Yesterday</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line3}></View>

                            {/* br */}

                            <View style={styles.top4}>
                                <Image
                                    style={styles.prcntg}
                                    source={require('../../assets/prcntg.png')}
                                />

                                <View style={styles.box4}>
                                    <Text style={styles.txt11}>50% OFF of everything at </Text>
                                    <Text style={styles.txt13}> <Text style={styles.txt12}>Elegance Store</Text>!!</Text>
                                </View>

                                <View style={styles.time3}>
                                    <Text style={styles.txt14}>15 Oct</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line4}></View>

                            {/* jn */}

                            <View style={styles.top5}>
                                <Image
                                    style={styles.bogo}
                                    source={require('../../assets/bogo.png')}
                                />

                                <View style={styles.box5}>
                                    <Text style={styles.txt15}>BOGO Sale starting </Text>
                                    <Text style={styles.txt17}><Text style={styles.txt16}>tomorrow</Text>. Don’t forget to check it out for great deals!</Text>
                                </View>
                                <View style={styles.time4}>
                                    <Text style={styles.txt18}>20 Sep</Text>
                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line5}></View>

                            {/* ac */}

                            <View style={styles.top6}>
                                <Image
                                    style={styles.cbag}
                                    source={require('../../assets/cbag.png')}
                                />

                                <View style={styles.box6}>
                                    <Text style={styles.txt19}>Smiley’s Store marked your</Text>
                                    <Text style={styles.txt20}>order <Text style={styles.txt21}> #1982984 </Text> as shipped</Text>
                                </View>

                                <View style={styles.time5}>
                                    <Text style={styles.txt22}>9.20 AM</Text>
                                    <Image
                                        style={styles.dot2}
                                        source={require('../../assets/dot.png')}
                                    />

                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line6}></View>

                            {/* bmap */}

                            <View style={styles.top7}>
                                <Image
                                    style={styles.bmap}
                                    source={require('../../assets/bmap.png')}
                                />

                                <View style={styles.box7}>
                                    <Text style={styles.txt23}>Package from your order </Text>
                                    <Text style={styles.txt24}>#1982345<Text style={styles.txt25}> has arrived to destination country.</Text></Text>
                                </View>

                                <View style={styles.time6}>
                                    <Text style={styles.txt26}>Yesterday</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line7}></View>
                            <View style={styles.end}></View>


                            {/* ///// */}
                        </ScrollView>
                    </SafeAreaView>
                </>
                {/* footer   */}

                <View style={styles.footer}>


                    <TouchableOpacity style={styles.plus}>
                        <Image

                            source={require('../../assets/plus.png')}
                        />
                    </TouchableOpacity>


                    <TextInput style={styles.TI}>Type your message...</TextInput>


                    <TouchableOpacity style={styles.send}>
                        <Image

                            source={require('../../assets/send.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>


        );
    }
}
const styles = StyleSheet.create({
    // main
    main: {
        flex: 1,
        backgroundColor: "#fff",
    },
    // top1
    top1: {
        height: 60,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",


    },
    // box1
    box1: {
        flexDirection: "row",
        height: 60,
        width: "40%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "10%",

    },
    txt1: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#515C6F",

    },
    left: {
        marginLeft: "10%",
    },
    close: {
        marginLeft: "40%",


    },

    //line1
    line1: {
        height: 1,
        width: "90%",
        backgroundColor: "#F1F2F3",
        marginLeft: "5%",
        //   marginTop:"2%",
    },
    // searchbar
    SB: {
        height: 40,
        width: "90%",
        backgroundColor: "#F1F2F3",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5%",
        borderRadius: 30,
        marginTop: "2%",
    },
    TI: {
        color: "#B0B6BE",
        paddingLeft: "6%",
    },
    // top2
    top2: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },
    // box2
    box2: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt3: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt4: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt5: {
        fontSize: 13,
        color: "red",
    },
    txt6: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time1: {
        height: 36,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dot: {
        marginLeft: "50%",
    },

    //line2
    line2: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },

    // top2
    top2: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },
    // box3
    box3: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt7: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt8: {
        fontSize: 13,
        color: "red",
    },
    txt9: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt10: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time2: {
        height: 90,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: "3%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line2
    line3: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },
    // top3
    top3: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },

    // BR

    //line3
    line3: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },

    // top3
    top3: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },
    // box4
    box4: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt11: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt12: {
        fontSize: 13,
        color: "red",
    },
    txt13: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt14: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time3: {
        height: 90,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: "3%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line2
    line4: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },
    // top4
    top4: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },

    // JN

    //line4
    line4: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },

    // top4
    top4: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },
    // box5
    box5: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt15: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt16: {
        fontSize: 13,
        color: "red",
    },
    txt17: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt18: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time4: {
        height: 60,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line5
    line5: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },
    // top5
    top5: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },

    // AC

    //line5
    line5: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },

    // top6
    top6: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },
    // box6
    box6: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt19: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt20: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt21: {
        fontSize: 13,
        color: "red",
    },
    txt22: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time5: {
        height: 38,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    dot2: {
        marginLeft: "50%",
    },

    //line6
    line6: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },
    // top6
    top6: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },

    // BMAP

    //line6
    line6: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"4%",
    },

    // top6
    top6: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },
    // box7
    box7: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt23: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt24: {
        fontSize: 13,
        color: "red",
    },
    txt25: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt26: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time6: {
        height: 90,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: "3%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line7
    line7: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        // marginTop:"2%",
    },
    // top7
    top7: {
        height: 100,
        width: "100%",
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        // marginTop:"3%",

    },

    // footer
    footer: {
        height: 57,
        width: "100%",
        backgroundColor: "#F4F4F4",
        marginTop: "14%",
        flexDirection: "row",
        alignItems: "center",
        position: "relative",
    },
    TI: {
        color: "#CCCFD5",
        marginLeft: "4%",
    },
    plus: {
        marginLeft: "4%",
    },
    send: {
        marginLeft: "38%",
    },

});