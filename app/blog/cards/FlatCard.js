import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from "react-native";
import Title from "../common/Title";
import Subtitle from "../common/Subtitle";

export default function FlatCard({item, onPress}) {
    const {thumbnail, title, desc} = item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, styles]}>
                <Image
                    source={{uri: thumbnail}}
                    style={styles.image}
                />
                <View style={styles.contentContainer}>
                    <Title size={15}>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
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
        backgroundColor: '#fff',
        borderRadius: 8,
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
    }
})