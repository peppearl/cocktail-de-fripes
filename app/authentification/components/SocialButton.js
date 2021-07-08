import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function SocialButton ({
                                          buttonTitle,
                                          btnType,
                                          color,
                                          backgroundColor,
                                          ...rest
                                      }) {
    return (
        <TouchableOpacity
            style={[styles.buttonContainer, {backgroundColor: backgroundColor}]}
            {...rest}>
            <View style={styles.iconWrapper}>
                <Ionicons name={btnType} style={styles.icon} size={22} color={color} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        height: 50,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 100,
        marginHorizontal: 10
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    }
});