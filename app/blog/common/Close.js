import React from 'react';
import {StyleSheet, View} from "react-native";
import {Icon} from 'react-native-elements'


export default function Close({onPress}) {
    return (
        <View style={styles.container}>
            <Icon
                reverse
                name='x'
                type='feather'
                color='rgba(255,255,255, 0.7)'
                reverseColor='#354362'
                style={styles.icon}
                onPress={onPress}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    icon: {
        padding: 10,
    },
    container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        marginVertical: 20
    }
})