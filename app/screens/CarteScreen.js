import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';

export default function CarteScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <View>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Friperies')}>
                    <Text style={styles.textStyle}>Voir toutes les friperies</Text>
                </Pressable>
            </View>

        </View>
    );
}
const styles = StyleSheet.create({
    buttonOpen: {
        backgroundColor: '#6200ee',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})