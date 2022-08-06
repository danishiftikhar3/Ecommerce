import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, Platform, ToastAndroid } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import RadioForm, {
    RadioButton,
    RadioButtonInput,
    RadioButtonLabel
} from 'react-native-simple-radio-button';

var hobbies = [
    { value: 0 },

];


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
            <View style={{ backgroundColor: "white",height:680 }}>
                <View style={styles.background}>

                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <TouchableOpacity  onPress={() => { this.props.navigation.navigate('profilesv'); }}>
                                <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>
                           
                            <Text style={styles.tx1}>Payment Settings</Text>
                        </View>
                        <TouchableOpacity style= {{justifyContent:'center'}} onPress={() => { this.props.navigation.navigate('s8'); }}>
                        <Image style={styles.bell} source={require('../../assets/bell.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.locationback}>
                        <Image style={styles.location} source={require('../../assets/pay2.png')}></Image>
                    </View>
                </View>

                <View style={{ width: '75%', alignSelf: 'center' }}>
                    <Text style={{ marginTop: 15, fontSize: 16, color: '#757575' }}>Select Payment Method</Text>
                </View>


                <View style={{ flexDirection: 'row', }}>

                    <View>

                        <RadioForm
                            style={{ marginTop: 30, marginLeft: 30 }}
                            radio_props={hobbies}
                            initial={2}
                            onPress={(value) => { ToastAndroid.show(value.toString(), ToastAndroid.SHORT) }}
                            buttonSize={10}
                            buttonOuterSize={20}
                            selectedButtonColor={'#ffbd11'}
                            selectedLabelColor={'black'}
                            labelStyle={{ fontSize: 15, color: 'grey' }}
                            disabled={false}
                            formHorizontal={false}
                        />
                    </View>
                    <View style={{ width: '80%', alignSelf: 'center', marginTop: 20, }}>
                        <View style={{}}>
                            <DropDownPicker
                                placeholder='Select Card'
                                
                                items={[
                                    { label: 'Master Card', value: 'Master Card', },
                                    { label: 'Visa Card', value: 'Visa Card', },
                                    { label: 'Debit Card', value: 'Debit Card', },

                                ]}

                                defaultValue={this.state.country}
                                containerStyle={{ height: 40 }}
                                style={{ backgroundColor: 'white', height: 50, width: '100%', borderColor: 'white', shadowColor: "#000", shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2, }}
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
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20 }}>

                    <View>

                        <RadioForm
                            style={{ marginTop: 30, marginLeft: 30 }}
                            radio_props={hobbies}
                            initial={2}
                            onPress={(value) => { ToastAndroid.show(value.toString(), ToastAndroid.SHORT) }}
                            buttonSize={10}
                            buttonOuterSize={20}
                            selectedButtonColor={'#ffbd11'}
                            selectedLabelColor={'black'}
                            labelStyle={{ fontSize: 15, color: 'grey' }}
                            disabled={false}
                            formHorizontal={false}
                        />
                    </View>
                    <View style={{ width: '80%', alignSelf: 'center', marginTop: 20, zIndex:-2}}>
                        <View style={{ backgroundColor: 'white', height: 40, width: '100%', borderColor: 'white', shadowColor: "#000", shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2, }}>
                            <Text style={{ marginLeft: 10, marginTop: 10,color:'#757575' }}>Cash on Delivery</Text>
                        </View>
                    </View>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 30, marginLeft: 20 }}>

                    <TouchableOpacity  onPress={() => { this.props.navigation.navigate('paymentsettingsv2'); }} >

                        <View style={{ backgroundColor: 'white', height: 40, width: '100%', borderColor: 'white', shadowColor: "#000", shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2, flexDirection: "row", marginTop: 10 }}>
                            <Text style={{ marginLeft: 10, fontSize: 28,color:'#757575' }}>+</Text>
                            <Text style={{ marginLeft: 18, marginTop: 10,color:'#757575' }}>Add Credit Card</Text>

                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', marginTop: 30, marginLeft: 20 }}>

                    

                        <View style={{ backgroundColor: 'white', height: 60, width: '100%', borderColor: 'white', shadowColor: "#000", shadowOpacity: 0.20, shadowRadius: 1.41, elevation: 2,  marginTop: 10 }}>
                        <Text style={{marginLeft:20,color:'#757575'}}>Master Card</Text>
                            <View style={{flexDirection:"row"}}>
                            <Image style={styles.masterimg} source={require('../../assets/mmaster.png')}></Image>
                            <Text style={{ marginLeft: 18, marginTop: 10 }}>*********</Text>
                            </View>

                        </View>
                </View>

                <View>
                        <TouchableOpacity style={{ width: '50%', alignSelf: "center" }} onPress={() => { this.props.navigation.navigate('profilesv'); }}  >
                            <Text style={styles.btn2}>Save Setting</Text>
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
        width: '60%'


    },
    tx1: {
        alignSelf: 'center',
        fontSize: 18,
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

    locationback: {
        borderWidth: 1,
        width: '50%',
        alignSelf: "center",
        marginTop: 15,
        borderColor: 'white',
        borderRadius: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },
    masterimg: {
        width: 40,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginTop: 10
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

});
