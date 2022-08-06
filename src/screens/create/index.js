import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Alert, ImageBackground, Modal, TextInput } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import SegmentedControlTab from "react-native-segmented-control-tab";
import StarRating from 'react-native-star-rating';
import RangeSlider from 'rn-range-slider';
import ToggleSwitch from 'toggle-switch-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DocumentPicker from 'react-native-document-picker';

const App = () => {
    let [singleFile, setSingleFile] = useState(null);

    let uploadImage = async () => {
        //Check if any file is selected or not
        if (singleFile != null) {
            //If file selected then create FormData
            const fileToUpload = singleFile;
            const data = new FormData();
            data.append('name', 'Image Upload');
            data.append('file_attachment', fileToUpload);
            //Please change file upload URL
            let res = await fetch(
                'http://localhost/upload.php',
                {
                    method: 'post',
                    body: data,
                    headers: {
                        'Content-Type': 'multipart/form-data; ',
                    },
                }
            );
            let responseJson = await res.json();
            if (responseJson.status == 1) {
                alert('Upload Successful');
            }
        } else {
            //if no file selected the show alert
            alert('Please Select File first');
        }
    };

    let selectFile = async () => {
        //Opening Document Picker to select one file
        try {
            const res = await DocumentPicker.pick({
                //Provide which type of file you want user to pick
                type: [DocumentPicker.types.allFiles],
                //There can me more options as well
                // DocumentPicker.types.allFiles
                // DocumentPicker.types.images
                // DocumentPicker.types.plainText
                // DocumentPicker.types.audio
                // DocumentPicker.types.pdf
            });
            //Printing the log realted to the file
            console.log('res : ' + JSON.stringify(res));
            //Setting the state to show single file attributes
            setSingleFile(res);
        } catch (err) {
            setSingleFile(null);
            //Handling any exception (If any)
            if (DocumentPicker.isCancel(err)) {
                //If user canceled the document selection
                alert('Canceled from single doc picker');
            } else {
                //For Unknown Error
                alert('Unknown Error: ' + JSON.stringify(err));
                throw err;
            }
        }
    };
    return (
        <ScrollView>
            <View>
                <View style={styles.mainview}>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile2'); }}>
                        <View style={styles.view1}>
                            <Image style={styles.backimg} source={require('../../assets/g6.png')}></Image>
                        </View>
                    </TouchableOpacity>
                    <View style={styles.view2}>
                        <Image style={styles.homeimg} source={require('../../assets/home.png')}></Image>
                        <Text style={styles.txt1}>Create A Ticket</Text>
                    </View>
                    <View style={{ alignSelf: 'center' }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.navigate('s8'); }}>
                            <Image style={styles.img1} source={require('../../assets/dabell.png')}></Image>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.v01}>
                    <Text style={styles.t01}>Create a Ticket</Text>
                </View>

                <View style={styles.v02}>
                    <View style={styles.v03}>
                        <Text style={styles.t02}>Details</Text>
                    </View>
                    <View>
                        <Text style={styles.t03}>Subject</Text>
                        <TextInput style={styles.ti1}></TextInput>

                        <Text style={styles.t01}>Create a Ticket</Text>
                        <TextInput style={styles.ti2}></TextInput>
                        <TouchableOpacity style={styles.v04} onPress={selectFile}>
                            <Text style={styles.t04}>Attach files </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ width: '75%', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', marginBottom: 15 }}>
                    <TouchableOpacity style={styles.v05}>
                        <Text style={styles.t05}>Cancel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.v06}>
                        <Text style={styles.t06}>Send Ticket</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    v06: {
        borderWidth: 0.1,
        borderColor: 'transparent',
        borderRadius: 15,
        width: '45%',
        backgroundColor: 'white',
        marginTop: 25,
        justifyContent: 'center',
        height: 30,
        elevation: 2,
        backgroundColor: '#1397D5'
    },
    t06: {
        alignSelf: 'center',
        color: 'white'
    },
    t05: {
        alignSelf: 'center',
        color: '#1397D5'
    },
    v05: {
        borderWidth: 0.1,
        borderColor: 'transparent',
        borderRadius: 15,
        width: '45%',
        backgroundColor: 'white',
        marginTop: 25,
        justifyContent: 'center',
        height: 30,
        elevation: 2
    },
    t04: {
        fontWeight: 'bold',
        alignSelf: 'center',
        marginLeft: 15,

    },
    v04: {
        borderWidth: 1,
        borderColor: '#E6E6E6',
        width: '90%',
        alignSelf: 'center',
        borderRadius: 15,
        height: 40,
        marginTop: 15,
        marginBottom: 10,
        flexDirection: 'row',



    },
    ti2: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E6E6E6',
        height: 150,
        marginTop: 15,
        marginBottom: 10
    },
    ti1: {
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 15,
        borderColor: '#E6E6E6',
        height: 40,
        marginTop: 15,
        marginBottom: 10
    },
    t03: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 35,

    },
    t02: {
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 15,
        marginBottom: 10
    },
    v03: {
        backgroundColor: '#E6E6E6',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
    },
    v02: {
        width: '90%',
        alignSelf: 'center',
        borderRadius: 20,
        borderColor: '#E6E6E6',
        borderWidth: 1,
        marginTop: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.43,
        shadowRadius: 1.51,

        elevation: 0,

    },
    t01: {
        fontWeight: 'bold',
        marginLeft: 20
    },
    v01: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,

    },
    mainview: {
        borderWidth: 1,
        flexDirection: 'row',
        height: 70,
        justifyContent: 'space-around'
    },
    backimg: {
        width: 30,
        height: 30,
        resizeMode: 'contain',
        justifyContent: 'center',
        marginTop: '60%'


    },
    homeimg: {
        width: 50,
        height: 30,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    view1: {

    },
    view2: {
        justifyContent: 'center',
        flexDirection: 'row'
    },
    txt1: {
        alignSelf: 'center',
        fontSize: 18,
        fontFamily: 'CarosSoft',


    },
    img1: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
})
export default App;