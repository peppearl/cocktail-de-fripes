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
                    <Title size={18}>{title}</Title>
                    <Subtitle size={13} numberOfLines={1}>{desc}</Subtitle>
                    <Text style={styles.date}>Posté le {date}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 300,
        backgroundColor: '#F0D97B',
        borderRadius: 4,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: 200,
    },
    contentContainer: {
        padding: 5
    },
    date: {
        marginTop: 2,
        fontSize: 10,
        color: 'rgba(53, 67, 98, 0.5)',
    },
})