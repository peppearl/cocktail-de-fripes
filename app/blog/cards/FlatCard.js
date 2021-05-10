import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, Text} from "react-native";
import Title from "../common/Title";
import Subtitle from "../common/Subtitle";

export default function FlatCard({item, onPress}) {
    const {thumbnail, title, desc, date} = item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, styles]}>
                <Image
                    source={{uri: thumbnail}}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <Title size={18}>{title}</Title>
                    <Subtitle size={13} numberOfLines={1}>{desc}</Subtitle>
                    <Text style={styles.date}>Posté le {date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 100,
        backgroundColor: '#F0D97B',
        borderRadius: 4,
        overflow: 'hidden',
        marginBottom: 10
    },
    image: {
        flex: 0.35,
        height: '100%',
    },
    contentContainer: {
        flex: 0.65,
        paddingHorizontal: 5
    },
    date: {
        marginTop: 2,
        fontSize: 10,
        color: 'rgba(53, 67, 98, 0.5)',
    },

})