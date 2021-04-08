import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import MainNavigator from './app/navigation';
import AppBar from "./app/navigation/AppBar";

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <AppBar/>
        <MainNavigator/>
      </NavigationContainer>
  );
}

// ~/Documents/my_digital_school/bachelor_dev/cocktail_de_fripes/app/cocktail-de-fripes