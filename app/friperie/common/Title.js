import React from 'react';
import {Text} from "react-native";
import {useFonts} from "expo-font";
import AppLoading from "expo-app-loading";

export default function Title({children, numberOfLines = 2, size}) {
    let [fontsLoaded] = useFonts({
        'market-deco': require('../../../assets/fonts/Market_Deco.ttf'),
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    } else {
        return (
            <Text
                numberOfLines={numberOfLines}
                style={{
                    fontSize: size,
                    marginBottom: 10,
                    color: '#354362',
                    fontFamily: 'market-deco',
                }}
            >
                {children}
            </Text>
        )
    }
}