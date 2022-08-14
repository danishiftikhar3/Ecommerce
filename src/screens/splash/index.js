import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { SafeAreaView } from 'react-native-safe-area-context';
import Constants from "expo-constants";
import { useNavigation, useRoute } from '@react-navigation/native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const slides = [
    {
        key: 's1',
        title: 'Best Deals',
        image: require('../../images/d3.jpg'),
        backgroundColor: 'red',
    },
    {
        key: 's2',
        title: 'Choose your Style',
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
const _renderNextButton = () => {
    return (


        <Image style={styles.img} source={require('../../images/forwardArrow.png')}></Image>


    );
};

function SplashScreen() {
    const navigation = useNavigation();


    const renderDoneButton = () => {
        return (
            <TouchableOpacity onPress={() => { this.props.navigation.navigate('c43'); }}>

                <View style={styles.buttonCircle}>
                    <Text>Skip</Text>
                </View>
            </TouchableOpacity>
        );
    };


    const RenderItem = ({ item }) => {
        return (
            <View style={styles.mainView}>
                <ImageBackground style={styles.image} source={item.image} >
                    <View style={styles.testView}>
                        <Text style={styles.title}>Best Deals</Text>
                    </View>

                </ImageBackground>
            </View>
        );
    };
    const onDone = () => {
        navigation.navigate('TabNav');
    };
    const onSkip = () => {
        navigation.navigate('TabNav');
    };


    return (

        <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            renderDoneButton={renderDoneButton}
            renderNextButton={_renderNextButton}
            onDone={onDone}
            onSkip={onSkip}

            showSkipButton={true}


        />


    );

}
export default SplashScreen;

const styles = StyleSheet.create({
    img: {
        resizeMode: 'contain',
        width: 60,
        height: 60,
        alignSelf: 'center'
    },
    mainView: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        justifyContent: 'center',
        alignContent: 'center'


    },

    image: {
        flex: 1,
        width: windowWidth,
        height: windowHeight * 1.5,
        alignItems: "center",
        resizeMode: 'contain'

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
