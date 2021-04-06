import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {StatusBar} from "expo-status-bar";
import MainNavigator from './navigation';
import AppBar from "./navigation/AppBar";

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar/>
        <AppBar/>
        <MainNavigator/>
      </NavigationContainer>
  );
}
