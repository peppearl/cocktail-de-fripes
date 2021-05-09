import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import BottomNavBar from "./app/navigation/BottomNavBar";

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar />
            <BottomNavBar/>
        </NavigationContainer>
    );
}

// ~/Documents/my_digital_school/bachelor_dev/cocktail_de_fripes/app/cocktail-de-fripes