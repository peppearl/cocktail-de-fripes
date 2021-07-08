import React, {useEffect, useState} from 'react';
import MapView from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';

export default function Map() {

    const [latitude, setLatitude] = useState(45.7597912);
    const [longitude, setLongitude] = useState(4.8391633);

    useEffect(() => {
        findCurrentLocation();
    }, []);

    const findCurrentLocation = () => {

        navigator.geolocation.getCurrentPosition(
            position => {
                const latitude = parseFloat(position.coords.latitude);
                const longitude = parseFloat(position.coords.longitude);

                console.log(longitude)

                setLatitude(latitude);
                setLongitude(longitude);
            },
            {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        )
    }

    let region = {
        latitude: latitude,
        longitude: longitude,
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