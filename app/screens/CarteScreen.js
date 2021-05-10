import React from 'react';
import {View} from 'react-native';
import Map from "../map/Map";
import SearchMap from "../map/SearchMap";

export default function CarteScreen({navigation}) {
    return (
        <View style={{flex: 1}}>
            <Map/>
            <SearchMap
                navigation={navigation}
            />
        </View>
    );
}