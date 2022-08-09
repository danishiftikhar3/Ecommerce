import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import color from '../../../constants/color'

export default function Divider(props) {
    return (
        <View>
            <View style={styles.view} >
                <Text style={styles.txt}>{props.title} </Text>
                <Image style={styles.img} source={require('../../images/line1.png')}></Image>

            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        alignSelf: 'center',
        alignContent: 'center'
    },
    img: {
        width: 60,
        height: 25,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    txt: {
        fontSize: 20,
        alignSelf: 'center',
        textTransform: 'uppercase',
        fontWeight: '500',
        color: color.black
    }
})