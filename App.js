import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import AppBar from "./app/navigation/AppBar";
import BottomNav from "./app/navigation/BottomNavigation";

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <AppBar/>
        <BottomNav/>
      </NavigationContainer>
  );

}

// ~/Documents/my_digital_school/bachelor_dev/cocktail_de_fripes/app/cocktail-de-fripes