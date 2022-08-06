import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';








export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filepath: {
                data: '',
                uri: ''
            },
            fileData: '',
            fileUri: ''
        }
        this.handleBackButtonClick = this.handleBackButtonClick.bind(this);

    }
    handleBackButtonClick() {
        this.props.navigation.goBack(null);
        return true;
    }
    

  

  
   

    renderFileUri() {
        if (this.state.fileUri) {
            return <Image
                source={{ uri: this.state.fileUri }}
                style={styles.images}
            />
        } else {
            return <Image
                source={require('../../assets/dsedan.jpg')}
                style={styles.images}
            />
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white' }}>
                    <View style={styles.background}>

                        <View style={styles.mainview}>
                            <View style={styles.view1}>
                                <TouchableOpacity onPress={() => { this.props.navigation.navigate('profilesv'); }}>
                                    <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view2}>
                               
                                <Text style={styles.tx1}>Profile</Text>
                            </View>
                            <TouchableOpacity style= {{justifyContent:'center'}} onPress={() => { this.props.navigation.navigate('s8'); }}>
                            <Image style={styles.bell} source={require('../../assets/bell.png')}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={styles.locationback}>
                            <Image style={styles.location} source={require('../../assets/l2.png')}></Image>
                        </View>
                    </View>

                    <View style={styles.plcback}>
                        <View>
                        <View style={{ width: '75%', alignSelf: 'center', marginTop: 40 }}>
                            <View style={{}}>
                                <DropDownPicker
                                    placeholder='Country'
                                    items={[
                                        { label: 'Pakistan', value: 'Pakistan', },
                                        { label: 'USA', value: 'USA', },
                                        { label: 'China', value: 'China', },
                                        { label: 'UK', value: 'UK', },
                                    ]}

                                    defaultValue={this.state.country}
                                    containerStyle={{ height: 40 }}
                                    style={{ backgroundColor: 'white', borderWidth: 1,height: 50, width: '100%',borderBottomColor:'#c0c0c0',borderColor:'white' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'

                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={item => this.setState({
                                        country: item.value

                                    })}
                                />
                            </View>
                        </View>
                            <TextInput placeholder='State/City' style={styles.placeholder}></TextInput>
                            <TextInput placeholder='Street # Address' style={styles.placeholder}></TextInput>
                            <TextInput placeholder='House#' style={styles.placeholder}></TextInput>
                        </View>
                        <View style={styles.placeholder2}>
                            <Text style={styles.txt3}>Postal Code</Text>
                            <TextInput style={styles.txi1}></TextInput>
                        </View>
                        </View>

                        <View style={{ flexDirection: 'row', width: "100%", alignSelf: 'center', justifyContent: 'center', marginTop: 15, }}>
                            <TouchableOpacity style={{ width: '35%', marginRight: 25 }} >
                                <Text style={styles.btn1}>Add new</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '35%' }}  onPress={() => { this.props.navigation.navigate('profilesv'); }} >
                                <Text style={styles.btn2}>Update</Text>
                            </TouchableOpacity>

                        </View>

                       

                    

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        height: 230,
        width: '100%',
    },
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
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 5
    },
    view1: {
        width: '30%'
    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row',
        width: '55%'


    },
    tx1: {
        alignSelf: 'center',
        fontSize: 22,
        textAlignVertical: "center",
        marginRight: 80
    },

    bell: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    backarrow: {
        marginTop: 10,
        resizeMode: 'contain',
        marginLeft: 15,
        height: 45,
        width: 45

    },
    txt1: {
        alignSelf: 'center',
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: "white",
        fontSize: 23,
        marginLeft: '20%',
        fontFamily: 'CarosSoft'
    },

    location: {
        height: 130,
        alignSelf: 'center',
        resizeMode: "contain"
    },

    bottom: {
        borderWidth: 1,
        height: 600,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'transparent',
        width: '100%',
        alignSelf: 'center',

    },
    placeholder: {
        borderWidth: 1,
        width: '75%',
        alignSelf: 'center',
        marginTop: 15,
        borderBottomColor: '#c0c0c0',
        paddingLeft: 20,
        borderColor: 'transparent',

    },
    btn1: {
        borderWidth: 0.5,
        marginTop: 30,
        color: '#1397d5',
        textAlign: 'center',
        borderRadius: 15,
        borderColor: '#1397d5',
        fontSize: 16,
        height: 35,
        textAlignVertical: "center"

    },
    btn2: {
        borderWidth: 0.5,
        marginTop: 30,
        color: 'white',
        textAlign: 'center',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        borderColor: 'white',
        backgroundColor: '#1397d5',
        borderColor: 'transparent',
        fontSize: 16,
        height: 35,
        textAlignVertical: "center"
    },
    locationback: {
        borderWidth: 1,
        width: '35%',
        alignSelf: "center",
        marginTop: 15,
        borderColor: 'white',
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    txt3: {
        fontSize: 14,
        textAlignVertical:"center",
        color:'#757575'

    },
   
    txi1: {
        borderWidth: 1,
        height: 35,
        width: '35%',
        borderColor:'#757575',
        
    },

    placeholder2: {
        borderWidth: 1,
        width: '75%',
        alignSelf: 'center',
        marginTop: 15,
        paddingLeft: 20,
        borderColor: 'transparent',
        flexDirection:"row",
        justifyContent:"space-between"
    },
    plcback: {
        borderWidth: 1,
        width: '95%',
        alignSelf: "center",
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
        borderColor: 'transparent',
        marginTop: 15,
        height:350
    },
});