import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function FormButton ({buttonTitle, ...rest}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} {...rest}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#354362',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 6,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
});