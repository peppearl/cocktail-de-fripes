import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import FavorisScreen from "../screens/FavorisScreen";
import ThriftStackScreen from "./ThriftStackScreen";
import BlogStackScreen from "./BlogStackScreen";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function BottomNavBar() {
    return (
        <Tab.Navigator
            initialRouteName="Carte"
            activeColor="#354362"
            inactiveColor="#9aa1b0"
            //shifting={true}
            barStyle={{ backgroundColor: 'white' }}
        >
            <Tab.Screen
                name="Carte"
                component={ThriftStackScreen}
                options={{
                    tabBarColor: "#354362",
                    tabBarLabel: 'Carte',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="map-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Favoris"
                component={FavorisScreen}
                options={{
                    tabBarColor: "#F0D97B",
                    tabBarLabel: 'Favoris',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="heart-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Blog"
                component={BlogStackScreen}
                options={{
                    tabBarColor: "#009688",
                    tabBarLabel: 'Blog',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="newspaper" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}