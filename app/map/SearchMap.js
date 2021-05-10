import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import CityButton from '../CityButton'

export default function SearchMap({ navigation }) {
        return (
            <View style={styles.container}>
            <CityButton navigation={navigation} />
            <View style={styles.contentContainer}>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => navigation.navigate('Friperies')}>
                    <Text style={styles.textStyle}>Découvrir les friperies à proximité</Text>
                </Pressable>

            </View>
            </View>
        );
}

const styles = StyleSheet.create({
    buttonOpen: {
        backgroundColor: '#354362',
    },
    button: {
        borderRadius: 6,
        paddingHorizontal :20,
        paddingVertical: 15,
        elevation: 2,
        marginBottom: 20

    },
    textStyle: {
        color: 'white',
        //fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        backgroundColor : '#F0D97B',
        flex: 0.6,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    contentContainer: {
        flexDirection : 'row',
        justifyContent: 'space-around',
        marginTop: 20
    }
})