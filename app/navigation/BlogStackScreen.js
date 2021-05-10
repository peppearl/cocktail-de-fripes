import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import NewsList from '../blog/lists/NewsList';
import BlogScreen from '../screens/BlogScreen';
import NewsDetail from '../screens/NewsDetail';

const StackBlog = createStackNavigator();

export default function BlogStackScreen() {
    return (
        <StackBlog.Navigator
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
            <StackBlog.Screen
                options={{ headerShown: false }}
                name='Blog'
                component={BlogScreen}
            />
            <StackBlog.Screen name='NewsDetail' component={NewsDetail} />
            <StackBlog.Screen name='NewsList' component={NewsList} />
        </StackBlog.Navigator>
    );
};