import React from 'react';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from "react-native";

export default function ViewMore({style, onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Text style={styles.text}>Voir Plus</Text>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#354362',
        borderRadius: 6,
        width: '100%',
        height: 50,
        marginBottom: 20
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff'
    }
})