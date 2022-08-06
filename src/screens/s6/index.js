import React, { Component } from 'react';
import { TextInput,ImageBackground, StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';

export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            // main
            <View style={styles.main}>
                {/* top1 */}
                <View style={styles.top1}>

                    <TouchableOpacity>
                        <Image
                            style={styles.left}
                            source={require('../../assets/left.png')}
                        />
                    </TouchableOpacity>

                    <View style={styles.box1}>
                        <Text style={styles.txt1}>Messages</Text>

                    </View>

                    <TouchableOpacity onPress={() => this.props.navigation.navigate('s7')}>
                        <Image
                            style={styles.close}
                            source={require('../../assets/close.png')}
                        />
                    </TouchableOpacity>
                </View>
                {/* line */}
                <View style={styles.line1}></View>
                {/* searchbar */}
                <View style={styles.SB}>

                    <Image
                        style={styles.search}
                        source={require('../../assets/search.png')}
                    />

                    <TextInput style={styles.TI}>Search Conversations</TextInput>


                </View>

                {/* wk */}
                <>
                    <SafeAreaView>
                        <ScrollView>
                            <View style={styles.top2}>
                                <Image
                                    style={styles.wk}
                                    source={require('../../assets/wk.png')}
                                />

                                <View style={styles.box2}>
                                    <Text style={styles.txt3}>Wade Khajur</Text>
                                    <Text style={styles.txt4}>Lorem ipsum dolor sit amet,</Text>
                                    <Text style={styles.txt5}>consectetur adipiscing elit, sed do </Text>
                                </View>

                                <View style={styles.time1}>
                                    <Text style={styles.txt6}>9.20 AM</Text>
                                    <Image
                                        style={styles.five}
                                        source={require('../../assets/five.png')}
                                    />

                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line2}></View>

                            {/* wt */}

                            <View style={styles.top3}>
                                <Image
                                    style={styles.wt}
                                    source={require('../../assets/wt.png')}
                                />

                                <View style={styles.box3}>
                                    <Text style={styles.txt7}>Walt tylor</Text>
                                    <Text style={styles.txt8}>Ut enim ad minim veniam, quis </Text>
                                    <Text style={styles.txt9}>nostrud exercitation ullamco… </Text>
                                </View>

                                <View style={styles.time2}>
                                    <Text style={styles.txt10}>8.12 AM</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line3}></View>

                            {/* br */}

                            <View style={styles.top4}>
                                <Image
                                    style={styles.br}
                                    source={require('../../assets/br.png')}
                                />

                                <View style={styles.box4}>
                                    <Text style={styles.txt11}>Bansi Rock</Text>
                                    <Text style={styles.txt12}>Laboris nisi ut aliquip ex ea commodo </Text>
                                    <Text style={styles.txt13}>consequat. </Text>
                                </View>

                                <View style={styles.time3}>
                                    <Text style={styles.txt14}>Yesterday</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line4}></View>

                            {/* jn */}

                            <View style={styles.top5}>
                                <Image
                                    style={styles.jn}
                                    source={require('../../assets/jn.png')}
                                />

                                <View style={styles.box5}>
                                    <Text style={styles.txt15}>Joash Nak</Text>
                                    <Text style={styles.txt16}>Duis aute irure dolor in reprehenderit </Text>
                                    <Text style={styles.txt17}>in voluptate velit  </Text>
                                </View>

                                <View style={styles.time4}>
                                    <Text style={styles.txt18}>15 Sep</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line5}></View>

                            {/* ac */}

                            <View style={styles.top6}>
                                <Image
                                    style={styles.ac}
                                    source={require('../../assets/ac.png')}
                                />

                                <View style={styles.box6}>
                                    <Text style={styles.txt19}>Anna’s Corner</Text>
                                    <Text style={styles.txt20}>Esse cillum dolore eu fugiat nulla</Text>
                                    <Text style={styles.txt21}>pariatur…</Text>
                                </View>

                                <View style={styles.time5}>
                                    <Text style={styles.txt22}>11 Aug</Text>


                                </View>

                            </View>
                            {/* line */}
                            <View style={styles.line6}></View>
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
        marginTop: "2%",
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
        fontSize: 18,
        color: "#515C6F",
    },
    txt4: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt5: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt6: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time1: {
        height: 90,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: "3%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line2
    line2: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        marginTop: "4%",
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
        fontSize: 18,
        color: "#515C6F",
    },
    txt8: {
        fontSize: 13,
        color: "#515C6F",
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
        marginTop: "4%",
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
        marginTop: "4%",
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
        fontSize: 18,
        color: "#515C6F",
    },
    txt12: {
        fontSize: 13,
        color: "#515C6F",
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
        marginTop: "4%",
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
        marginTop: "4%",
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
        fontSize: 18,
        color: "#515C6F",
    },
    txt16: {
        fontSize: 13,
        color: "#515C6F",
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
        height: 90,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: "3%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line5
    line5: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        marginTop: "4%",
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
        marginTop: "4%",
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
    // box6
    box6: {
        flexDirection: "column",
        height: 100,
        width: "55%",
        backgroundColor: "#fff",
        justifyContent: "center",


    },
    txt19: {
        fontSize: 18,
        color: "#515C6F",
    },
    txt20: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt21: {
        fontSize: 13,
        color: "#515C6F",
    },
    txt22: {
        color: "#A8ADB7",
        fontSize: 12,
    },
    time5: {
        height: 90,
        width: "19%",
        backgroundColor: "#fff",
        flexDirection: "column",
        paddingTop: "3%",
        justifyContent: "space-between",
        alignItems: "center",
    },

    //line6
    line6: {
        height: 1,
        width: "72%",
        backgroundColor: "#F1F2F3",
        marginLeft: "23%",
        marginTop: "4%",
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
    // end
    end: {
        height: 8,
        width: "100%",
    },
    // footer
    footer: {
        height: 57,
        width: "100%",
        backgroundColor: "#F4F4F4",
        marginTop: "3%",
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