import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';



const slides = [
    {
        key: 's1',
        title: 'Best Deals',
        image: require('../../images/d3.jpg'),
        backgroundColor: 'red',
    },
    {
        key: 's2',
        title: 'Choose your Food',
        image: require('../../images/d2.jpg'),
        backgroundColor: '#febe29',
    },
    {
        key: 's3',
        title: 'Secure Payments',
        image: require('../../images/d1.jpg'),
        backgroundColor: '#22bcb5',
    },

];

export default class StartUpScreen extends Component {
    componentDidMount() {

        setTimeout(
            () => {
                console.log('hell')


            }, 4000
        );
    }
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
        };
    }
    _renderNextButton = () => {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('s1'); }}>

                <View style={styles.buttonCircle}>
                    <Text>Skip</Text>
                </View>
            </TouchableOpacity>
        );
    };
    _renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('c43'); }}>

                <View style={styles.buttonCircle}>
                    <Text>Skip</Text>
                </View>
            </TouchableOpacity>
        );
    };


    _renderItem = ({ item }) => {
        return (
            <View style={styles.mainView} data={slides}>
                <ImageBackground style={styles.image} source={item.image} >
                    <View style={styles.testView}>
                        <Text style={styles.title}>{item.title}</Text>
                    </View>

                </ImageBackground>
            </View>
        );
    };

    render() {

        return (

            <AppIntroSlider
                data={slides}
                renderItem={this._renderItem}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}


            />


        );

    }
}
const styles = StyleSheet.create({
    mainView: {



    },

    image: {
        flex: 1,
        width: "100%",
        height: 770,
        alignItems: "center",

    },

    title: {
        fontSize: 50,
        color: 'white',
        marginTop: '70%',
        alignSelf: 'center'
    },

    textView: {
        width: '80%',
        alignSelf: 'center',
        marginTop: '50%'
    },

    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6
    },

});
