import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

export default function Map() {
    let region =  {
        latitude: 45.7614048,
        longitude: 4.8614109,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    }
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
});