import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {Icon} from "react-native-elements";

export default function FormButton({buttonTitle, onPress, iconName}) {
    return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <View style={styles.iconWrapper}>
                <Icon
                    style={{marginTop: 2}}
                    name={iconName}
                    type='feather'
                    color='#354362'
                    size={15}
                />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={styles.buttonText}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: 50,
        backgroundColor: '#fff',
        padding: 10,
        justifyContent: 'center',
        borderRadius: 6,
        flexDirection: 'row'
    },
    buttonText: {
        fontSize: 14,
        color: '#354362',
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
    },
});