import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, Picker, } from 'react-native';


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const [selectedValue, setSelectedValue] = ("java");
        const [selectedValu, setSelectedValu] = ("java");
        return (
            <ScrollView>
            <View style={{ backgroundColor: 'white',height:700 }}>
                <View style={styles.mainview}>
                    <View style={styles.view1}>
                        <TouchableOpacity>
                            <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/m35mm.png')}></Image>
                        <Text style={styles.txt1}>Streaming Settings</Text>
                    </View>
                </View>

                <View style={styles.general}>
                    <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 17, color: '#757575', fontWeight: 'bold' }}>Setting</Text>
                </View>
                <View style={styles.general5}>

                    <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                    <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={{ marginLeft: 25, fontSize: 16, color: '#757575', }}>Select Camera</Text>

                        <View >
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 20, width: 110, marginBottom: 30, }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Front" value="java" />
                                <Picker.Item label="Back" value="js" />
                            </Picker>
                        </View>
                    </View>
                    <View style={{ borderWidth: 0.5, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                    <TouchableOpacity>
                        <Text style={{ marginLeft: 25, fontSize: 16, color: '#757575', marginTop: 15 }}>Select Category</Text>
                    </TouchableOpacity>

                    <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                    <TextInput style={{ marginLeft: 20, fontSize: 16, color: '#757575', height: 40, marginTop: 5, paddingTop: 10 }} placeholder="Product Tag"></TextInput>
                    <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                    <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 20 }}>
                        <Text style={{ marginLeft: 25, fontSize: 16, color: '#757575', }}>Video Quality</Text>

                        <View >
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 20, width: 110, marginBottom: 30, }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="144p" value="java" />
                                <Picker.Item label="480p" value="js" />
                                <Picker.Item label="720p" value="jsv" />

                            </Picker>
                        </View>
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('live'); }}>
                <Image style={styles.video} source={require('../../assets/mvideo.png')}></Image>
                </TouchableOpacity>
                <Text style={styles.livetx}>Go Live</Text>
                    

                </View>

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
        borderBottomColor: '#c0c0c0',
        borderBottomWidth: 2

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
        width: 40,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5
    },
    view1: {
        width: '25%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '55%'



    },
    txt1: {
        alignSelf: 'center',
        fontSize: 18,
        textAlignVertical: "center",


    },
    txt2: {
        fontSize: 19,
        marginLeft: 35,
        marginTop: 15,
        fontWeight: 'bold'

    },
    txt3: {
        fontSize: 17,
        marginLeft: 35,
        marginTop: 15,


    },
    txt4: {
        fontSize: 17,
        marginTop: 15,
        marginRight: 37
    },

    general5: {
        borderWidth: 1,
        height: 280,
        width: '80%',
        alignSelf: "center",
        backgroundColor: 'white',
        borderColor: "transparent",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 18,

    },

    general: {
        borderWidth: 1,
        marginTop: 35,
        height: 50,
        width: '81%',
        alignSelf: "center",
        backgroundColor: '#E6E6E6',
        borderColor: "transparent",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25
    },

    video: {
        width: 65,
        height: 70,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 90,
        alignSelf:"center",
    },
    livetx: {
        fontSize: 20,
        marginTop: 10,
        alignSelf:'center',
       
    },

});
