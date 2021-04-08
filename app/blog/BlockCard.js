import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Title from './Title';
import Subtitle from './Subtitle';

export default function BlockCard({ style, imageStyle, item }) {
    const { thumbnail, title, desc } = item;
    return (
            <View style={[styles.container, style]}>
                <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
                <View style={styles.contentContainer}>
                    <Title size={15}>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 8,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 5
    }
})