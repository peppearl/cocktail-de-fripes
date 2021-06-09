import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback, Text} from 'react-native';
import Title from '../common/Title';
import Subtitle from '../common/Subtitle';

export default function BlockCard({ style, imageStyle, item, onPress }) {
    const { thumbnail, title, desc, date} = item;
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={[styles.container, style]}>
                <Image source={{ uri: thumbnail }} style={[styles.image, imageStyle]} />
                <View style={styles.contentContainer}>
                    <Title size={15}>{title}</Title>
                    <Subtitle>{desc}</Subtitle>
                    <Text>Posté le {date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
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