import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import NewsList from '../blog/lists/NewsList';
import BlogScreen from '../screens/BlogScreen';
import NewsDetail from '../screens/NewsDetail';

const Stack = createStackNavigator();

export default function BlogStackScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#fff',
                headerLeftContainerStyle: {
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    backgroundColor: 'rgba(92,90,91,0.7)',
                    alignItems: 'center',
                    marginLeft: 10,
                },
            }}
        >
            <Stack.Screen
                options={{ headerShown: false }}
                name='Blog'
                component={BlogScreen}
            />
            <Stack.Screen name='NewsDetail' component={NewsDetail} />
            <Stack.Screen name='NewsList' component={NewsList} />
        </Stack.Navigator>
    );
};
