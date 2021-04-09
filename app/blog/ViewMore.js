import React from 'react';
import {StyleSheet, View, Text} from "react-native";

export default function ViewMore({style}) {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.text}>Voir Plus</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 8,
        width: '100%',
        height: 50
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#7a74e0'
    }
})