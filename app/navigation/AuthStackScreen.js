import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
//import CarteScreen from "../screens/CarteScreen";
import BottomNavBar from "./BottomNavBar";
import {useState} from "react";
import AppLoading from "expo-app-loading";
import CarteScreen from "../screens/CarteScreen";

const StackAuth = createStackNavigator();

export default function AuthStackScreen() {
    const userToken = null
    return (
        <StackAuth.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#354362',
                headerLeftContainerStyle: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: '#fff',
                    alignItems: 'center',
                    marginLeft: 10,
                },
            }}
        >
            {userToken === null ? (
                // No token found, user isn't signed in
               <>
                <StackAuth.Screen
                    name="Sign In"
                    component={SignInScreen}
                    options={{
                        headerShown: false,
                        title: 'Sign in',
                        // When logging out, a pop animation feels intuitive
                        // You can remove this if you want the default 'push' animation
                        //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    }}
                />
                <StackAuth.Screen
                    options={{ headerShown: false }}
                    name='Sign Up'
                    component={SignUpScreen}
                />
                <StackAuth.Screen
                    options={{ headerShown: false }}
                    name='Home'
                    component={BottomNavBar}
                />
               </>
                ) : (
                // User is signed in
                <BottomNavBar/>
                )}
        </StackAuth.Navigator>
    );
};