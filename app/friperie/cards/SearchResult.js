import React, {useState} from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, Text, ScrollView, TouchableOpacity} from "react-native";
import Title from "../common/Title";
import {Icon} from "react-native-elements";

export default function SearchResult({item, onPress}) {
    const {name, city, thumbnail} = item;


    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, styles]}>
                <Image
                    source={{uri: thumbnail, width: 90,height: 90}}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <View style={styles.contentContainer}>
                        <Title size={15}>{name}, {city}</Title>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        marginTop: 10,
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius : 8
    },
    image: {
        borderRadius: 8,
        marginRight: 10
    },
    contentContainer: {
        flex: 0.65,
        marginVertical: 11
    },
    iconContainer: {
        flexDirection: 'row',
        marginVertical: 5,
    },
    text: {
        marginLeft: 10,
        color: '#354362',
        fontWeight: 'bold',
    },
    scrollView: {
        flexGrow: 0,
    }
})