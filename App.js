import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import BottomNavBar from "./app/navigation/BottomNavBar";

import * as firebase from 'firebase';
import AppLoading from "expo-app-loading";
import AuthStackScreen from "./app/navigation/AuthStackScreen"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
    apiKey: "AIzaSyB8k0kiGxZSiJyJSpEaTqcZw-jJKN9siUY",
    authDomain: "cocktail-de-fripes.firebaseapp.com",
    projectId: "cocktail-de-fripes",
    storageBucket: "cocktail-de-fripes.appspot.com",
    messagingSenderId: "290163580844",
    appId: "1:290163580844:web:ef5ed7a9c079e1aafc2409",
    measurementId: "G-7SKC4079Q1"
};
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}else {
    firebase.app(); // if already initialized, use that one
}

export default function App() {
    const userLoggedIn = false;

    if (userLoggedIn === false) {
        return (
            <NavigationContainer>
                <AuthStackScreen/>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <StatusBar/>
                <BottomNavBar/>
            </NavigationContainer>
        )
    }
    /*


    return (
        <NavigationContainer>
            <StatusBar />
            <BottomNavBar/>
        </NavigationContainer>
    );
     */
}

// ~/Documents/my_digital_school/bachelor_dev/cocktail_de_fripes/app/cocktail-de-fripes
