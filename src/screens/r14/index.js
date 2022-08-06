import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Picker, StyleSheet, TextInput } from 'react-native';
import { } from 'react-native-gesture-handler';
import DropDownPicker from 'react-native-dropdown-picker';



export default class index extends Component {
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


    renderFileData() {
        if (this.state.fileData) {
            return <Image source={{ uri: 'data:image/jpeg;base64,' + this.state.fileData }}
                style={styles.images}
            />
        } else {
            return <Image source={require('../../assets/dupload.png')}
                style={styles.images}
            />
        }
    }
    render() {
        const [selectedValue, setSelectedValue] = ("java");
        const [selectedValu, setSelectedValu] = ("java");


        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '82%', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('r13'); }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 30 }} source={require('../../assets/dback.png')}></Image>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' }}>Company/Store Information</Text>
                        <TouchableOpacity onPress={() => {this.props.navigation.navigate('r12'); }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 30 }} source={require('../../assets/dmenu.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', marginTop: 50 }}>
                        <Image resizeMode='contain' style={{ width: '60%', height: 120 }} source={require('../../assets/drlogo.png')}></Image>
                        <Text style={{ fontWeight: 'bold', fontSize: 20, marginTop: 10 }}>Restaurant Name</Text>
                        <Text style={{ textAlign: 'center', marginTop: 10 }}>In publishing and graphic design, Lorem ipsum is a placeholder text commonly </Text>

                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed' }}>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50, width: '100%', }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label="Type of Bussiness" value="java" />
                            <Picker.Item label="Limited Paternship" value="js" />
                            <Picker.Item label="General Paternship" value="s" />
                            <Picker.Item label="Joint Venture" value="js" />

                        </Picker>

                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed', marginTop: 15 }}>
                        <TextInput>Name of Comapny</TextInput>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed', marginTop: 15 }}>
                        <TextInput>Restaurant Name</TextInput>
                    </View>

                    <View style={{
                        width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40,
                        borderStyle: 'dashed', marginTop: 15
                    }}>
                        <Picker
                            selectedValue={selectedValu}
                            style={{ height: 50, width: '100%', }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValu(itemValue)}
                        >
                            <Picker.Item label="Type of Restaurant" value="java" />
                            <Picker.Item label="Limited Paternship" value="js" />
                            <Picker.Item label="General Paternship" value="s" />
                            <Picker.Item label="Joint Venture" value="js" />

                        </Picker>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', marginTop: 15 }}>
                        <Text style={{ textAlign: 'center' }}>Store Image (Front Side)</Text>
                        <TouchableOpacity onPress={this.chooseImage}  >
                            <View style={styles.ImageSections}>
                                <View>
                                    {this.renderFileData()}
                                </View>

                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed', marginTop: 15 }}>
                        <TextInput>Identification Number</TextInput>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed', marginTop: 15 }}>
                        <TextInput>Country</TextInput>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed', marginTop: 15 }}>
                        <TextInput>Physical Address</TextInput>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, borderRadius: 40, borderStyle: 'dashed', marginTop: 15 }}>
                        <TextInput>Additional Information</TextInput>
                    </View>
                    <View style={{ width: '83%', alignSelf: 'center', borderWidth: 1, 
                    borderRadius: 40, borderStyle: 'dashed', marginTop: 15, backgroundColor:'black', height:50, justifyContent:'center' }}>
                        <Text style={{color:'white', textAlign:'center', fontSize:15}}>SAVE</Text>
                    </View>



                </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    images: {
        width: '100%',
        height: 200,
        borderColor: 'black',
        borderRadius: 2,
        resizeMode: 'contain',
    },
});
