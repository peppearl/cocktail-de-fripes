import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts} from 'expo-font';

export default props = ({navigation}) => {
    let [fontsLoaded] = useFonts({
        'market-deco': require('../assets/fonts/Market_Deco.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <>
                <View style={[styles.container, styles.topButton]}>
                    <Pressable
                        style={[styles.cityName, styles.buttonOpen]}
                        onPress={() => navigation.navigate('Friperies')}>
                        <Text style={styles.textStyle}>Paris</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.cityName, styles.buttonOpen]}
                        onPress={() => navigation.navigate('Friperies')}>
                        <Text style={styles.textStyle}>Marseille</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.cityName, styles.buttonOpen]}
                        onPress={() => navigation.navigate('Friperies')}>
                        <Text style={styles.textStyle}>Lyon</Text>
                    </Pressable>
                </View>
                <View style={styles.container}>
                    <Pressable
                        style={[styles.cityName, styles.buttonOpen]}
                        onPress={() => navigation.navigate('Friperies')}>
                        <Text style={styles.textStyle}>Toulouse</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.cityName, styles.buttonOpen]}
                        onPress={() => navigation.navigate('Friperies')}>
                        <Text style={styles.textStyle}>Bordeaux</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.cityName, styles.buttonOpen]}
                        onPress={() => navigation.navigate('Friperies')}>
                        <Text style={styles.textStyle}>Nantes</Text>
                    </Pressable>
                </View>
            </>
        );
    }
};

const styles = StyleSheet.create({
    buttonOpen: {
        backgroundColor: '#354362',
    },
    button: {
        borderRadius: 10,
        paddingHorizontal : 40,
        paddingVertical: 15,
        elevation: 1,
        marginBottom: 20
    },
    textStyle: {
        color: '#8e96a7',
        //fontWeight: 'bold',
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'market-deco',
    },
    container: {
        backgroundColor : '#F0D97B',
        flexDirection : 'row',
        justifyContent: 'space-around',
        marginTop: 10,
        marginHorizontal: 5,
    },
    cityName: {
        width: 110,
        height: 52,
        borderRadius: 6,
        paddingHorizontal : 20,
        paddingVertical: 15,
        elevation: 2,
    },
    topButton: {
        marginTop: 40
    }
})