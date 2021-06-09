import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import BottomNavBar from "./app/navigation/BottomNavBar";

import * as firebase from 'firebase';
import AppLoading from "expo-app-loading";
import AuthStackScreen from "./app/navigation/AuthStackScreen"
import {AuthContext, AuthProvider} from "./Auth";
import {useContext, useState} from "react";

export default function App() {
    const [currentUser, setCurrentUser] = useState(false);

    //const { currentUser } = useContext(AuthContext);

    if (!currentUser) {
        return (
            <AuthProvider>
                <NavigationContainer>
                    <AuthStackScreen/>
                </NavigationContainer>
            </AuthProvider>
        );
    } else {
        return (
            <AuthProvider>
                <NavigationContainer>
                    <StatusBar/>
                    <BottomNavBar/>
                </NavigationContainer>
            </AuthProvider>
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
