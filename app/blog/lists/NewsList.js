import React from 'react';
import {StyleSheet, StatusBar, View, Text} from "react-native";
import Title from "../common/Title";

export default function HorizontalList({title, data}) {
    return (
        <View style={styles.headerContainer}>
            <Title size={20}>{title}</Title>
            <Text style={styles.categoryTitle}>Category</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: StatusBar.currentHeight,
        backgroundColor: '#4e4d4d'
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff'
    }
})