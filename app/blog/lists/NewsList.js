import React from 'react';
import { View, StyleSheet, StatusBar, Text, ScrollView } from 'react-native';
import VerticalList from "./VerticalList";
import Title from "../common/Title";

export default function NewsList({route}) {
    const data = route.params;
    const header = data[0].category.split('-').join(' ');
    return (
        <>
            <View style={styles.headerContainer}>
                <Title size={40}>{header}</Title>
            </View>
            <ScrollView contentContainerStyle={{padding: 15, backgroundColor: '#fff'}}>
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
        backgroundColor: '#fff'
    },
    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#354362'
    }
})