import React from 'react';
import {View, TextInput, StyleSheet} from "react-native";

export default function SearchBar() {
    return (
        <View style={styles.container}>
            <TextInput placeholder='Rechercher'/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingLeft: 8,
    },
    searchInput: {
        width: '100%',
        height: '100%',
        paddingLeft: 8,
        fontSize: 16
    }
})