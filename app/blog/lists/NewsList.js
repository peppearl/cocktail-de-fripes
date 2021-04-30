import React from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import VerticalList from "./VerticalList";

export default function NewsList({route}) {
    const data = route.params;
    const header = data[0].category.split('-').join(' ').toUpperCase();
    return (
        <>
            <View style={styles.headerContainer}>
                <Text style={styles.categoryTitle}>{header}</Text>
            </View>
            <ScrollView contentContainerStyle={{padding: 15}}>
                <VerticalList data={data}/>
            </ScrollView>
        </>
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