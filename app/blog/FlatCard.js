import React from 'react';
import {View, StyleSheet, Image} from "react-native";
import Title from "./Title";
import Subtitle from "./Subtitle";

export default function FlatCard({item}) {
    const {thumbnail, title, desc} = item;
    return (
        <View style={[styles.container, styles]}>
            <Image
                source={{uri : thumbnail}}
                style={styles.image}
            />
            <View style={styles.contentContainer}>
                <Title size={15}>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
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