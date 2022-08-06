import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};






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
    chooseImage = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };
                // alert(JSON.stringify(response));s
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });
    }

    launchCamera = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchCamera(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });

    }

    launchImageLibrary = () => {
        let options = {
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
                alert(response.customButton);
            } else {
                const source = { uri: response.uri };
                console.log('response', JSON.stringify(response));
                this.setState({
                    filePath: response,
                    fileData: response.data,
                    fileUri: response.uri
                });
            }
        });

    }

    renderFileData() {
        if (this.state.fileData) {
            return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
                style={styles.images}
            />
        } else {
            return <Image source={require('../../assets/mclient3.png')}
                style={styles.images}
            />
        }
    }

    renderFileUri() {
        if (this.state.fileUri) {
            return <Image
                source={{ uri: this.state.fileUri }}
                style={styles.images}
            />
        } else {
            return <Image
                source={require('../../assets/mclient3.png')}
                style={styles.images}
            />
        }
    }

    render() {
        return (
            <ScrollView>
                <View >

                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profilesv'); }}>
                                <Image style={styles.backimg} source={require('../../assets/marrow.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>
                           
                            <Text style={styles.txt1}>Profile</Text>
                        </View>
                        <TouchableOpacity style= {{ justifyContent:'center'}}  onPress={() => { this.props.navigation.navigate('s8'); }}>
                        <Image style={styles.bell} source={require('../../assets/bell.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View>

                        <View style={{ flexDirection: "row", justifyContent: 'center' }}>

                            <TouchableOpacity style={{ borderWidth: 1, borderColor: 'white', height: 120, borderRadius: 100, width: 120, alignSelf: 'center', backgroundColor: "white", marginTop: 20 }} onPress={this.chooseImage}  >

                                <View style={styles.ImageSections}>
                                    <View>
                                        {this.renderFileData()}
                                    </View>

                                </View>
                            </TouchableOpacity>
                            <Image style={{ width: 30, height: 30, marginTop: 85, marginLeft: -20 }} source={require('../../assets/camera2.png')}></Image>
                        </View>
                    </View>


                    <View style={styles.plcback}>

                        <View style={styles.placeholder}>
                            <TextInput style={{ width: "82%" }} placeholder='Your Name'></TextInput>
                            <Image style={styles.profile} source={require('../../assets/mprofile.png')}></Image>
                        </View>

                        <View style={styles.placeholder}>
                            <TextInput style={{ width: "83%" }} placeholder='info@yourbusiness.com'></TextInput>
                            <Image style={styles.mail} source={require('../../assets/mmessage.png')}></Image>
                        </View>

                        <View style={styles.placeholder}>
                            <TextInput style={{ width: "80%" }} placeholder='Contact.No'></TextInput>
                            <Image style={styles.phone} source={require('../../assets/mphone.png')}></Image>
                        </View>
                    </View>

                    <View>
                        <TouchableOpacity style={{ width: '50%', alignSelf: "center" }} onPress={() => { this.props.navigation.navigate('profilesv'); }} >
                            <Text style={styles.btn2}>Update</Text>
                        </TouchableOpacity>
                    </View>



                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({


    images: {
        alignSelf: "center",
        height: 110,
        resizeMode: 'contain',
        marginTop: 5
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
    txt1: {
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
    placeholder: {
        borderWidth: 0.5,
        width: '75%',
        alignSelf: 'center',
        marginTop: 40,
        borderBottomColor: '#c0c0c0',
        flexDirection: 'row',
        paddingLeft: 15,
        borderColor: 'transparent',
        
        
    },

    profile: {
        resizeMode: 'contain',
        height: 20,
        width: 45,
        tintColor: '#757575',
        marginTop: 15,
    },
    mail: {
        resizeMode: 'contain',
        height: 15,
        width: 35,
        marginTop: 15
    },
    phone: {
        resizeMode: 'contain',
        height: 25,
        width: 50,
        tintColor: '#757575',
        marginTop: 15,
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
        elevation: 1,
        borderColor: 'transparent',
        height: 300,
        marginTop: 25
    },
    btn2: {
        borderWidth: 0.5,
        marginTop: 40,
        color: 'white',
        textAlign: 'center',
        borderRadius: 25,
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
        fontSize: 17,
        height: 55,
        textAlignVertical: "center",
        marginTop: 50
    },



});