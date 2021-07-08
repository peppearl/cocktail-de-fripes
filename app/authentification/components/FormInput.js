import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function FormInput ({labelValue, placeholderText, iconType, ...rest}) {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 55,
        borderColor: '#F0D97B',
        borderRadius: 6,
        borderWidth: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 14,
        color: '#rgba(53, 67, 98, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: 55,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});