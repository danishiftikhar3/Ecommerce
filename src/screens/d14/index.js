import React, { Fragment, Component } from 'react';
import ImagePicker from 'react-native-image-picker';
import DropDownPicker from 'react-native-dropdown-picker';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    Button,
    Dimensions,
    TouchableOpacity,
    TextInput,
    BackHandler
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


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
            return <Image source={require('../../assets/dsedan.jpg')}
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
                source={require('../../assets/dsedan.jpg')}
                style={styles.images}
            />
        }
    }
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white', height: '100%' }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '82%', alignSelf: 'center' }}>
                        <TouchableOpacity onPress={this.handleBackButtonClick}>
                            <Image resizeMode='contain' style={{ marginTop: 10, tintColor: "black", marginRight: 10 }} source={require('../../assets/back.png')}></Image>
                        </TouchableOpacity>
                        <Text style={{ textAlign: 'center', alignSelf: 'center', fontWeight: 'bold' }}>Car Registration</Text>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('c13'); }}>
                            <Image resizeMode='contain' style={{ width: 40, height: 30 }} source={require('../../assets/mmenu.png')}></Image>
                        </TouchableOpacity>
                    </View>
                    <View >
                        <View style={{ width: '85%', alignSelf: 'center' }}>
                            <TouchableOpacity onPress={this.chooseImage}  >
                                <View style={styles.ImageSections}>
                                    <View>
                                        {this.renderFileData()}
                                    </View>

                                </View>
                            </TouchableOpacity>

                        </View>

                        <View style={{ width: '85%', alignSelf: 'center', marginTop: 10 }}>
                            <Text>Transport Type</Text>
                            <View style={{}}>
                                <DropDownPicker
                                    placeholder='Opel'
                                    items={[
                                        { label: 'Opel', value: 'Opel', },
                                        { label: 'Sedan', value: 'Sedan', },
                                    ]}

                                    defaultValue={this.state.country}
                                    containerStyle={{ height: 40 }}
                                    style={{ backgroundColor: 'white', borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, height: 50, width: '100%' }}
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
                        <View style={{ width: '85%', alignSelf: 'center', marginTop: 10 }}>
                            <Text>Transport Model</Text>
                            <View style={{}}>
                                <DropDownPicker
                                    placeholder='Vectra'
                                    items={[
                                        { label: 'Opel', value: 'Opel', },
                                        { label: 'Sedan', value: 'Sedan', },
                                    ]}

                                    defaultValue={this.state.country}
                                    containerStyle={{ height: 40 }}
                                    style={{ backgroundColor: 'white', borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, height: 50, width: '100%' }}
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
                        <View style={{ width: '85%', alignSelf: 'center', marginTop: 10 }}>
                            <Text>Transport Color</Text>
                            <View style={{}}>
                                <DropDownPicker
                                    placeholder='Red'
                                    items={[
                                        { label: 'Opel', value: 'Opel', },
                                        { label: 'Sedan', value: 'Sedan', },
                                    ]}

                                    defaultValue={this.state.country}
                                    containerStyle={{ height: 40 }}
                                    style={{ backgroundColor: 'white', borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, height: 50, width: '100%' }}
                                    itemStyle={{
                                        justifyContent: 'flex-start'

                                    }}
                                    dropDownStyle={{ backgroundColor: '#fafafa' }}
                                    onChangeItem={item => this.setState({
                                        country: item.value

                                    })}
                                />
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ width: '60%' }}>
                                    <Text>Car Registration Number </Text>
                                    <TextInput style={{ backgroundColor: 'white', borderWidth: 1, borderStyle: 'dashed', borderRadius: 0.5, height: 35, width: '90%', borderColor: 'grey' }}></TextInput>
                                </View>
                                <View>
                                    <Text>Fuel Type                 </Text>
                                    <DropDownPicker
                                        placeholder='Petrol'
                                        items={[
                                            { label: 'Opel', value: 'Opel', },
                                            { label: 'Sedan', value: 'Sedan', },
                                        ]}

                                        defaultValue={this.state.country}
                                        containerStyle={{ height: 40 }}
                                        style={{ backgroundColor: 'white', borderWidth: 1, borderStyle: 'dashed', borderRadius: 1, }}
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

                    </View>




                    <View style={{ marginTop: 200 }}>

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