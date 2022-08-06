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
                    <View style={styles.background}>

                        <View style={styles.header}>

                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile'); }}>
                                <Image style={styles.backarrow} source={require('../../assets/marrow.png')}></Image>
                            </TouchableOpacity>

                            <View style={{ alignSelf: 'center', width: '60%' }}>
                                <Text style={styles.txt1}>Edit Profile</Text>
                            </View>
                        </View>

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

                    <View style={styles.bottom}>
                        <View>

                            <View style={styles.placeholder}>
                                <TextInput style={{ width: "70%" }} placeholder='Your Name'></TextInput>
                                <Image style={styles.profile} source={require('../../assets/mprofile.png')}></Image>
                            </View>

                            <View style={styles.placeholder}>
                                <TextInput style={{ width: "71%" }} placeholder='info@yourbusiness.com'></TextInput>
                                <Image style={styles.mail} source={require('../../assets/mmessage.png')}></Image>
                            </View>

                            <View style={styles.placeholder}>
                                <TextInput style={{ width: "68%" }} placeholder='Contact.No'></TextInput>
                                <Image style={styles.phone} source={require('../../assets/mphone.png')}></Image>
                            </View>


                        </View>

                        <View>
                            <TouchableOpacity style={{ width: '50%', alignSelf: "center" }} >
                                <Text style={styles.btn2}>Update</Text>
                            </TouchableOpacity>
                        </View>


                    </View>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#1397d5',
        height: 280,
        width: '100%',
    },
    header: {
        flexDirection: 'row',
        textAlign: 'center',
        marginTop: 10
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
        marginLeft: '20%'
    },

    location: {

        resizeMode: 'contain',
        alignSelf: 'center'

    },

    bottom: {
        borderWidth: 1,
        height: 600,
        marginTop: -40,
        backgroundColor: 'white',
        borderRadius: 30,
        borderColor: 'transparent',
        width: '100%',
        alignSelf: 'center'

    },
    placeholder: {
        borderWidth: 1,
        width: '75%',
        alignSelf: 'center',
        marginTop: 40,
        borderColor: '#c0c0c0',
        flexDirection: 'row',
        borderRadius: 8,
        paddingLeft: 15
    },
    profile: {
        resizeMode: 'contain',
        height: 20,
        width: 45,
        tintColor: '#757575',
        marginTop: 15,


    },
    phone: {
        resizeMode: 'contain',
        height: 25,
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
        marginTop: 80

    },
    images: {
        alignSelf: "center",
        height: 110,
        resizeMode: 'contain',
        marginTop: 5
    },


});