import React, { useEffect, useState } from 'react'
import { Keyboard, Text, View, Button, TouchableOpacity, SliderComponent } from 'react-native'
import styles from './styles'
import { firebase } from '../../firebase/config'


export default function HomeScreen(props) {

    const userID = props.extraData.id

    const onLinkPress = () => {
        props.navigation.navigate('Search')
    }

    const Pulse = require('react-native-pulse').default;

    return (

        <View style={styles.container}>
            <Pulse color='blue' numPulses={3} diameter={400} speed={20} duration={2000} />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onLinkPress()}>
                <Text style={styles.buttonTitle}>hit me</Text>
            </TouchableOpacity>
        </View>

    )
}
