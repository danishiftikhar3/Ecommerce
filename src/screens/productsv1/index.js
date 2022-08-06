import React, { Component } from 'react';
import { View, Text, ScrollView, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput, Picker, } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

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
            return <Image source={require('../../assets/camera2.png')}
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
                source={require('../../assets/camera2.png')}
                style={styles.images}
            />
        }
    }

    render() {
        const [selectedValue, setSelectedValue] = ("java");
        const [selectedValu, setSelectedValu] = ("java");
        return (
            <ScrollView>
                <View>
                    <View style={styles.mainview}>
                        <View style={styles.view1}>
                            <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile2'); }}>
                                <Image style={styles.backimg} source={require('../../assets/mside.png')}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.view2}>
                            <Image style={styles.homeimg} source={require('../../assets/m35mm.png')}></Image>
                            <Text style={styles.txt1}>Add Digital Products</Text>
                        </View>
                        <TouchableOpacity style= {{justifyContent:'center', marginLeft:10}} onPress={() => { this.props.navigation.navigate('profile2'); }}>
                        <Image style={styles.bell} source={require('../../assets/bell.png')}></Image>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.general}>
                        <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 17, color: '#757575', fontWeight: 'bold' }}>General</Text>
                    </View>
                    <View style={styles.general2}>
                        <TextInput style={{ marginTop: 5, marginLeft: 20, fontSize: 14, color: '#757575',height:35,paddingTop:10 }} placeholder="Product Name"></TextInput>
                        <View style={{ borderWidth: 0.5, marginTop: 5, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <TouchableOpacity>
                            <Text style={{ marginTop: 5, marginLeft: 20, fontSize: 14, color: '#757575', }}>Select Category</Text>
                        </TouchableOpacity>
                        <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <TextInput style={{ marginTop: 5, marginLeft: 20, fontSize: 14, color: '#757575',height:35 }} placeholder="Product Tag"></TextInput>
                        <View style={{ borderWidth: 0.5, marginTop: 5, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                    </View>

                    <View style={styles.general}>
                        <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 17, color: '#757575', fontWeight: 'bold' }}>Images</Text>
                    </View>

                    <View style={styles.general3}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 14, color: '#757575', }}>Main Images*</Text>
                            <TouchableOpacity onPress={this.chooseImage}  >
                                <View style={styles.ImageSections}>
                                    <View>
                                        {this.renderFileData()}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ borderWidth: 0.5, marginTop: 5, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 14, color: '#757575', }}>Thumbnail</Text>
                            <TouchableOpacity onPress={this.chooseImage}  >
                                <View style={styles.ImageSections}>
                                    <View>
                                        {this.renderFileData()}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ borderWidth: 0.5, marginTop: 5, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={{ marginTop: 10, marginLeft: 20, fontSize: 14, color: '#757575', }}>Featured Images</Text>
                            <TouchableOpacity onPress={this.chooseImage}  >
                                <View style={styles.ImageSections}>
                                    <View>
                                        {this.renderFileData()}
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </View>

                    <View style={styles.general}>
                        <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 17, color: '#757575', fontWeight: 'bold' }}>Videos</Text>
                    </View>
                    <View style={styles.general4}>


                        <View style={{ width: '85%', marginTop: 15, marginLeft: 10 }}>
                            <View style={{}}>
                                <DropDownPicker
                                    placeholder='Video from'

                                    items={[
                                        { label: 'Youtube', value: 'Youtube', },
                                        { label: 'Daily Motion', value: 'Daily Motion', },
                                        { label: 'Skype', value: 'Skype', },

                                    ]}

                                    defaultValue={this.state.country}
                                    containerStyle={{ height: 30 }}
                                    style={{ borderColor: 'transparent' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'

                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa', height: 100 }}
                                    onChangeItem={item => this.setState({
                                        country: item.value

                                    })}
                                />
                            </View>
                            <View style={{ borderWidth: 0.5, marginTop: 5, borderColor: '#757575', width: "100%", marginLeft: 10, opacity: 0.3 }}></View>
                        </View>
                        <TextInput placeholder='video url' style={{ marginLeft: 25, fontSize: 15, color: '#757575', width: '80%' }}></TextInput>
                        <View style={{ borderWidth: 0.5, marginTop: 5, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                    </View>
                       
                    <View style={styles.general}>
                        <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 17, color: '#757575', fontWeight: 'bold' }}>Price</Text>
                    </View>
                    <View style={styles.general5}>
            
                        <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: 25, fontSize: 16, color: '#757575', }}>Unit Price</Text>
                            <TextInput style={{ borderWidth: 1, borderColor: '#757575', width: '45%', height: 35, borderRadius: 20, marginTop: 3 }}></TextInput>

                        </View>

                        <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: 25, fontSize: 16, color: '#757575', }}>Purchase Price</Text>
                            <TextInput style={{ borderWidth: 1, borderColor: '#757575', width: '45%', height: 35, borderRadius: 20, marginTop: 3 }}></TextInput>
                        </View>

                        <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: 25, fontSize: 16, color: '#757575', }}>Tax</Text>
                            <TextInput placeholder='20' style={{ borderWidth: 1, borderColor: '#757575', width: '25%', height: 35, borderRadius: 20, marginTop: 3, paddingLeft: 25,marginRight:-38 }}></TextInput>
                            <View style={{ borderWidth: 1, borderColor: '#757575', width: '35%', height: 35, borderRadius: 20, marginTop: 3, }}>
                                <View >
                                    <Picker 
                                        selectedValue={selectedValue}
                                        style={{ height: 30, width: 110, marginBottom: 30, }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                    >
                                        <Picker.Item label="$" value="java" />
                                        <Picker.Item label="%" value="js" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                        <View style={{ borderWidth: 0.5, marginTop: 10, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.3 }}></View>
                        <View style={{ flexDirection: "row", width: "93%", justifyContent: "space-between", marginTop: 10 }}>
                            <Text style={{ marginTop: 10, marginLeft: 25, fontSize: 16, color: '#757575', }}>Discount</Text>
                            <TextInput placeholder='20' style={{ borderWidth: 1, borderColor: '#757575', width: '25%', height: 35, borderRadius: 20, marginTop: 3, paddingLeft: 25 }}></TextInput>
                            <View style={{ borderWidth: 1, borderColor: '#757575', width: '35%', height: 35, borderRadius: 20, marginTop: 3, }}>
                                <View >
                                    <Picker
                                        selectedValue={selectedValue}
                                        style={{ height: 30, width: 110, marginBottom: 30 }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                    >
                                        <Picker.Item label="$" value="java" />
                                        <Picker.Item label="%" value="js" />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={styles.general}>
                        <Text style={{ marginTop: 20, marginLeft: 25, fontSize: 17, color: '#757575', fontWeight: 'bold' }}>Description</Text>
                    </View>

                    <View style={styles.general6}>
                        <View style={{ borderWidth: 0.5, marginTop: 25, borderColor: '#757575', width: "85%", marginLeft: 20, opacity: 0.5, height: 140 }}></View>
                    </View>

                    <View>
                        <TouchableOpacity style={{ width: '50%', alignSelf: "center" }} >
                            <Text style={styles.btn2}>Save Product</Text>
                        </TouchableOpacity>
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
        height: 20,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: 25,
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

    bell: {
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center',
        width: 50

    },

    general: {
        borderWidth: 1,
        marginTop: 15,
        height: 50,
        width: '81%',
        alignSelf: "center",
        backgroundColor: '#E6E6E6',
        borderColor: "transparent",
        borderTopEndRadius: 25,
        borderTopStartRadius: 25
    },

    general2: {
        borderWidth: 1,
        height: 140,
        width: '80%',
        alignSelf: "center",
        backgroundColor: 'white',
        borderColor: "transparent",
        borderBottomStartRadius: 18,
        borderBottomEndRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 2,
    },

    general3: {
        borderWidth: 1,
        height: 180,
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
    images: {
        height: 40,
        resizeMode: 'contain',
    },
    general4: {
        borderWidth: 1,
        height: 140,
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
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    general6: {
        borderWidth: 1,
        height: 220,
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
        marginTop: 20
    },

});